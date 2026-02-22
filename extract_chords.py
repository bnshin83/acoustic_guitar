#!/usr/bin/env python3
"""
Extract chord progression from guitar tutorial videos (like AW Guitar channel).

Strategy:
1. Extract frames at 2fps from video
2. Detect visual changes in the chord name label (bottom-right)
3. Filter to keep only frames where the chord actually changed
4. Send change frames to Claude Vision API to read chord names + fretboard
5. Compile full chord progression with timestamps
"""

import os
import sys
import json
import base64
import subprocess
from pathlib import Path
from datetime import timedelta

import cv2
import numpy as np
from anthropic import Anthropic

# ── Config ──────────────────────────────────────────────────────────────────
FPS = 2
# Region for the chord name text (bottom-right label): (x1_frac, y1_frac, x2_frac, y2_frac)
CHORD_TEXT_REGION = (0.82, 0.90, 1.0, 1.0)
# Region for the full notation area (bottom strip)
NOTATION_REGION_Y = 0.65  # top of notation starts at 65% height
CHANGE_THRESHOLD = 5.0
MIN_FRAMES_BETWEEN_CHANGES = 2  # skip changes within 1 sec of each other


def extract_frames(video_path: str, output_dir: str, fps: int = FPS) -> int:
    """Extract frames from video at given fps."""
    os.makedirs(output_dir, exist_ok=True)
    cmd = [
        "ffmpeg", "-y", "-i", video_path,
        "-vf", f"fps={fps}",
        "-q:v", "2",
        os.path.join(output_dir, "frame_%04d.jpg")
    ]
    subprocess.run(cmd, capture_output=True, text=True, check=True)
    count = len(list(Path(output_dir).glob("frame_*.jpg")))
    print(f"Extracted {count} frames at {fps} fps")
    return count


def get_chord_text_region(frame: np.ndarray) -> np.ndarray:
    """Crop just the chord name label area (bottom-right)."""
    h, w = frame.shape[:2]
    x1 = int(w * CHORD_TEXT_REGION[0])
    y1 = int(h * CHORD_TEXT_REGION[1])
    return frame[y1:h, x1:w]


def detect_change_frames(frames_dir: str, threshold: float = CHANGE_THRESHOLD) -> list[dict]:
    """Detect frames where the chord name label changes."""
    frames = sorted(Path(frames_dir).glob("frame_*.jpg"))
    if not frames:
        return []

    changes = []
    prev_region = None
    last_change_idx = -999

    for i, fpath in enumerate(frames):
        frame = cv2.imread(str(fpath))
        if frame is None:
            continue

        region = cv2.cvtColor(get_chord_text_region(frame), cv2.COLOR_BGR2GRAY)

        if prev_region is None:
            changes.append({
                "frame_num": i + 1,
                "timestamp": i / FPS,
                "frame_path": str(fpath),
            })
            prev_region = region
            last_change_idx = i
            continue

        diff = np.mean(cv2.absdiff(region, prev_region))

        if diff > threshold and (i - last_change_idx) >= MIN_FRAMES_BETWEEN_CHANGES:
            changes.append({
                "frame_num": i + 1,
                "timestamp": i / FPS,
                "frame_path": str(fpath),
            })
            last_change_idx = i

        prev_region = region

    print(f"Detected {len(changes)} chord changes out of {len(frames)} frames")
    return changes


def frame_to_base64(frame_path: str) -> str:
    with open(frame_path, "rb") as f:
        return base64.standard_b64encode(f.read()).decode("utf-8")


def analyze_batch(client: Anthropic, batch: list[dict]) -> list[dict]:
    """Send a batch of frames to Claude Vision and parse chord info."""
    content = []
    content.append({
        "type": "text",
        "text": (
            "These are frames from a guitar tutorial video. Each frame has:\n"
            "- A chord name shown in large text at the BOTTOM-RIGHT (e.g., 'AM7', 'F#m7', 'Bm7')\n"
            "- A fretboard chord diagram to the right showing finger positions\n"
            "- A sheet music line at the bottom showing chord names above the staff\n\n"
            "For EACH frame, extract:\n"
            "1. current_chord: The large chord name label at bottom-right\n"
            "2. progression: All chord names visible in the sheet music line, left to right\n"
            "3. fretboard: Describe the chord diagram — which strings are muted (X), "
            "open (O), and where fingers are placed (string number 1=high e, 6=low E, and fret number)\n\n"
            "Return a JSON array. Example:\n"
            '[{"frame_index":1,"current_chord":"AM7","progression":["AM7","E/G#","F#m7","EM7"],'
            '"fretboard":{"muted":[6,5],"open":[1],"fingers":[{"string":4,"fret":6},{"string":3,"fret":6},{"string":2,"fret":5}]}}]\n\n'
            "Return ONLY valid JSON, no markdown."
        )
    })

    for i, change in enumerate(batch):
        ts = str(timedelta(seconds=int(change["timestamp"])))
        content.append({"type": "text", "text": f"Frame {i + 1} (at {ts}):"})
        content.append({
            "type": "image",
            "source": {
                "type": "base64",
                "media_type": "image/jpeg",
                "data": frame_to_base64(change["frame_path"]),
            }
        })

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=4096,
        messages=[{"role": "user", "content": content}],
    )

    text = response.content[0].text
    try:
        if "```" in text:
            json_str = text.split("```")[1]
            if json_str.startswith("json"):
                json_str = json_str[4:]
            return json.loads(json_str.strip())
        return json.loads(text.strip())
    except json.JSONDecodeError:
        print(f"  Warning: JSON parse failed. Raw: {text[:300]}...")
        return [{"frame_index": j + 1, "current_chord": "?", "parse_error": True} for j in range(len(batch))]


def analyze_frames(changes: list[dict], batch_size: int = 8) -> list[dict]:
    """Analyze all change frames with Claude Vision in batches."""
    client = Anthropic()
    all_results = []

    for start in range(0, len(changes), batch_size):
        batch = changes[start:start + batch_size]
        print(f"  Batch {start // batch_size + 1}: frames {start + 1}-{start + len(batch)} of {len(changes)}")

        batch_results = analyze_batch(client, batch)

        for j, item in enumerate(batch_results):
            if j < len(batch):
                item["timestamp"] = batch[j]["timestamp"]
                item["frame_path"] = batch[j]["frame_path"]
                all_results.append(item)

    return all_results


def deduplicate(results: list[dict]) -> list[dict]:
    """Remove consecutive entries with same chord."""
    if not results:
        return []
    deduped = [results[0]]
    for r in results[1:]:
        if r.get("current_chord", "") != deduped[-1].get("current_chord", ""):
            deduped.append(r)
    print(f"Deduplicated: {len(results)} → {len(deduped)} unique chord changes")
    return deduped


def format_chord_chart(results: list[dict]) -> str:
    """Format as a readable chord chart."""
    lines = []
    lines.append("=" * 70)
    lines.append("  CHORD PROGRESSION — Extracted from video")
    lines.append("=" * 70)
    lines.append("")

    # Collect all progression lines to build full song structure
    seen_progressions = []

    for r in results:
        ts = str(timedelta(seconds=int(r["timestamp"])))
        chord = r.get("current_chord", "?")
        progression = r.get("progression", [])

        lines.append(f"[{ts}]  {chord}")

        fb = r.get("fretboard")
        if fb and not r.get("parse_error"):
            muted = fb.get("muted", [])
            open_s = fb.get("open", [])
            fingers = fb.get("fingers", [])

            parts = []
            if muted:
                parts.append(f"Muted: {muted}")
            if open_s:
                parts.append(f"Open: {open_s}")
            if fingers:
                fstr = ", ".join(f"S{f['string']}F{f['fret']}" for f in fingers)
                parts.append(f"Fingers: {fstr}")
            if parts:
                lines.append(f"        {' | '.join(parts)}")

        if progression:
            prog_str = " | ".join(progression)
            lines.append(f"        Line: {prog_str}")
            if progression not in seen_progressions:
                seen_progressions.append(progression)

        lines.append("")

    # Summary
    all_chords = [r.get("current_chord") for r in results if r.get("current_chord") and r.get("current_chord") != "?"]
    unique = list(dict.fromkeys(all_chords))

    lines.append("=" * 70)
    lines.append(f"  UNIQUE CHORDS ({len(unique)}):")
    lines.append(f"  {', '.join(unique)}")
    lines.append("")
    lines.append("  SONG STRUCTURE (unique progression lines):")
    for i, prog in enumerate(seen_progressions, 1):
        lines.append(f"  {i}. {' | '.join(prog)}")
    lines.append("=" * 70)

    return "\n".join(lines)


def main():
    import argparse
    parser = argparse.ArgumentParser(description="Extract chords from guitar tutorial video")
    parser.add_argument("input", help="Path to video file or YouTube URL")
    parser.add_argument("--fps", type=int, default=FPS, help="Frames per second (default: 2)")
    parser.add_argument("--threshold", type=float, default=CHANGE_THRESHOLD, help="Change threshold (default: 5.0)")
    parser.add_argument("--output", "-o", default=None, help="Output text file")
    parser.add_argument("--skip-extract", action="store_true", help="Reuse existing frames")
    parser.add_argument("--frames-dir", default=None, help="Frames directory")
    parser.add_argument("--batch-size", type=int, default=8, help="Vision API batch size")
    args = parser.parse_args()

    video_path = args.input
    is_url = video_path.startswith("http")
    project_dir = Path(".") if is_url else Path(video_path).parent
    frames_dir = args.frames_dir or str(project_dir / "frames")

    # Download if URL
    if is_url:
        print("Downloading video...")
        dl_path = str(project_dir / "video.mp4")
        subprocess.run(["yt-dlp", "-f", "best[height<=1080]", "-o", dl_path, video_path], check=True)
        video_path = dl_path

    # Extract frames
    if not args.skip_extract:
        print(f"\n[1/4] Extracting frames at {args.fps} fps...")
        extract_frames(video_path, frames_dir, args.fps)
    else:
        print(f"\n[1/4] Using existing frames in {frames_dir}")

    # Detect changes
    print(f"\n[2/4] Detecting chord changes (threshold={args.threshold})...")
    changes = detect_change_frames(frames_dir, args.threshold)
    if not changes:
        print("No changes detected! Try lowering --threshold")
        sys.exit(1)

    # Analyze with Vision
    print(f"\n[3/4] Analyzing {len(changes)} frames with Claude Vision...")
    results = analyze_frames(changes, args.batch_size)

    # Deduplicate
    results = deduplicate(results)

    # Format output
    print(f"\n[4/4] Formatting results...")
    output = format_chord_chart(results)

    # Save
    output_path = args.output or str(project_dir / "chord_chart.txt")
    with open(output_path, "w") as f:
        f.write(output)

    json_path = output_path.replace(".txt", ".json")
    with open(json_path, "w") as f:
        json.dump(results, f, indent=2, default=str)

    print(f"\n{output}")
    print(f"\nSaved: {output_path}")
    print(f"Saved: {json_path}")


if __name__ == "__main__":
    main()
