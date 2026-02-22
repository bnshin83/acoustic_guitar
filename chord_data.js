// =============================================================================
// CHORD DATA — AW Guitar Tutorial
// Source: https://youtu.be/kZ7MBgaso78
// Voicings matched from video frame chord diagrams (grid shows frets 3,5,7,9)
// =============================================================================

// strings: [lowE, A, D, G, B, highE] — -1=muted, 0=open, n=fret number
// fingers: [lowE, A, D, G, B, highE] — 0=not played, 1=index, 2=middle, 3=ring, 4=pinky
// startFret: first fret shown on diagram
// barres: [{fret, fromString, toString}] — fromString/toString 1=highE, 6=lowE

const CHORD_VOICINGS = {
  // ===================== KEY OF A =====================

  // AM7: X on 6,1; dots at fret 5 (A,B), fret 6 (D,G)
  'AM7': {
    strings: [-1, 5, 6, 6, 5, -1],
    fingers: [0, 1, 3, 4, 2, 0],
    startFret: 4,
    barres: [],
    category: 'key_of_A'
  },
  // E/G#: dot fret 4 (6E), fret 4 (A), fret 5 (B); X on 1E; open/muted D,G?
  // Frame shows: dots at 4 on low E and A, dot at 5 on B, X on high E
  'E/G#': {
    strings: [4, 4, -1, -1, 5, -1],
    fingers: [1, 2, 0, 0, 4, 0],
    startFret: 3,
    barres: [],
    category: 'key_of_A'
  },
  // F#m7: dot fret 4 (6E), X on A, dots at fret 4 (B), fret 5 (G), fret 4 (D); X on 1E
  // Frame shows: dot at 4 on lowE, X on A, dots in fret 4-5 range on D/G/B, X on highE
  'F#m7': {
    strings: [4, -1, 4, 5, 4, -1],
    fingers: [1, 0, 1, 3, 2, 0],
    startFret: 3,
    barres: [{fret: 4, fromString: 2, toString: 6}],
    category: 'key_of_A'
  },
  // A/B: dots in fret 4-5 range; X on highE
  // Frame shows: X on lowE, dots at fret 4 (A), fret 4 (D), fret 4 (G), fret 5 (B), X on highE
  'A/B': {
    strings: [-1, 4, 4, 4, 5, -1],
    fingers: [0, 1, 1, 1, 2, 0],
    startFret: 3,
    barres: [{fret: 4, fromString: 2, toString: 5}],
    category: 'key_of_A'
  },
  // Bm7: X on highE; dot at fret 4 on B and D, open or low fret
  // Frame shows: dot fret 5 (6E), dot fret 4 (D), dot fret 3 (B); X on highE
  'Bm7': {
    strings: [-1, 4, -1, 4, 3, -1],
    fingers: [0, 2, 0, 3, 1, 0],
    startFret: 2,
    barres: [],
    category: 'key_of_A'
  },
  // D/E: dots spread across frets 4-7
  // Frame shows: dot fret 5 on lowE, dots fret 5 (G), fret 5(B), fret 6(D); X on A, highE
  'D/E': {
    strings: [5, -1, 6, 5, 5, -1],
    fingers: [1, 0, 4, 2, 3, 0],
    startFret: 4,
    barres: [],
    category: 'key_of_A'
  },
  // Bb7(#11): X on 6E; dot fret 3 (A); dot fret 3 on G; dot fret 5 (B); X on 1E, X on A
  // Frame shows: X lowE, dot fret 3 (A), X on D, dot fret 3 (G), dot fret 5 (B), X highE
  'Bb7(#11)': {
    strings: [-1, 3, -1, 3, 5, -1],
    fingers: [0, 1, 0, 2, 4, 0],
    startFret: 2,
    barres: [],
    category: 'key_of_A'
  },
  // C#m7: X on 6E, X on A; dots fret 4 (D), fret 6 (G), X on highE
  // Frame shows: X lowE, X A, dot fret 4 on D, dots fret 6 G and B, X highE
  'C#m7': {
    strings: [-1, -1, 4, 6, 5, -1],
    fingers: [0, 0, 1, 4, 3, 0],
    startFret: 3,
    barres: [],
    category: 'key_of_A'
  },
  // EM7: O on lowE, dots on D and G at fret 4, O on B, O on highE
  // Frame shows: O lowE, X A, dot fret 4 (D), dot fret 4 (G), O on B, O highE
  'EM7': {
    strings: [0, -1, 4, 4, 0, 0],
    fingers: [0, 0, 1, 2, 0, 0],
    startFret: 3,
    barres: [],
    category: 'key_of_A'
  },
  // B/D#: X lowE, X A, dot fret 4(D), dots fret 7(G,B), X highE
  // Frame shows: X on 6E, dot fret 8 on A(?), or X on A; dots around fret 4-8 on D,G,B; X highE
  'B/D#': {
    strings: [-1, -1, 4, 8, 7, -1],
    fingers: [0, 0, 1, 4, 3, 0],
    startFret: 3,
    barres: [],
    category: 'key_of_A'
  },
  // Bm/D: X lowE, X A, dot at fret 3(D), dots at fret 7(G), fret 5(B); X highE
  // Frame shows: X 6E, X A, dots around fret 3-7 on D/G/B, X 1E
  'Bm/D': {
    strings: [-1, -1, 3, 7, 5, -1],
    fingers: [0, 0, 1, 4, 2, 0],
    startFret: 2,
    barres: [],
    category: 'key_of_A'
  },
  // C#7: dots across frets 4-6 range
  // Frame shows: dots at fret 6(6E), fret 6(A), fret 4(D), fret 5(G,B); X highE
  'C#7': {
    strings: [-1, 6, 4, 5, 5, -1],
    fingers: [0, 4, 1, 2, 3, 0],
    startFret: 3,
    barres: [],
    category: 'key_of_A'
  },
  // F#/A#: X lowE, dot fret 3(A), X D, dot fret 6(G), dot fret 4(B), dot fret 4(highE)
  // Frame shows: X 6E, X A(?), dot fret 3, dots in 4-6 range; X 1E, X A
  'F#/A#': {
    strings: [-1, 3, -1, 6, 4, 4],
    fingers: [0, 1, 0, 4, 2, 3],
    startFret: 2,
    barres: [],
    category: 'key_of_A'
  },
  // B7sus4: dots across 4-5 range
  // Frame shows: dot fret 4(A,D,G); O B, O highE
  'B7sus4': {
    strings: [-1, 4, 4, 4, 0, 0],
    fingers: [0, 1, 2, 3, 0, 0],
    startFret: 3,
    barres: [],
    category: 'key_of_A'
  },
  // B7: similar to B7sus4 with small change
  'B7': {
    strings: [-1, 4, 4, 4, 4, 0],
    fingers: [0, 1, 1, 2, 3, 0],
    startFret: 3,
    barres: [{fret: 4, fromString: 1, toString: 5}],
    category: 'key_of_A'
  },
  // E: O lowE, dot 4(A,D), dot 4(G), O B, O highE
  // Frame shows: O lowE, dots at fret 4 on A and D, dot fret 4 on G, O B, O highE
  'E': {
    strings: [0, 4, 4, 4, 0, 0],
    fingers: [0, 1, 2, 3, 0, 0],
    startFret: 3,
    barres: [],
    category: 'key_of_A'
  },
  // A/E: O lowE, O A, dots fret 4(D,G,B); O highE
  'A/E': {
    strings: [0, 0, 4, 4, 4, 0],
    fingers: [0, 0, 1, 2, 3, 0],
    startFret: 3,
    barres: [],
    category: 'key_of_A'
  },
  // Bm: X lowE, dot 4(A), fret 7(D,G), fret 5(B), dot 4(highE)
  'Bm': {
    strings: [-1, 4, 7, 7, 5, 4],
    fingers: [0, 1, 3, 4, 2, 1],
    startFret: 3,
    barres: [{fret: 4, fromString: 1, toString: 5}],
    category: 'key_of_A'
  },

  // ===================== KEY OF B =====================

  // BM7: X lowE, dots at fret 4(A), fret 4(D), fret 6(G); X highE
  // Frame shows: X 6E, dot fret 4 on A, D; dot fret 6 on G; X B(?), X 1E
  'BM7': {
    strings: [-1, 4, 4, 6, -1, -1],
    fingers: [0, 1, 2, 4, 0, 0],
    startFret: 3,
    barres: [],
    category: 'key_of_B'
  },
  // G#m7: O highE, dots at fret 6(B,D), dot fret 7(G); X A; X lowE
  // Frame shows: O 1E, dots fret 6 on B, dot fret 7 on G, dot fret 6 on D; X A, X 6E
  'G#m7': {
    strings: [-1, -1, 6, 7, 6, 0],
    fingers: [0, 0, 1, 3, 2, 0],
    startFret: 5,
    barres: [],
    category: 'key_of_B'
  },
  // F#M7: X lowE, X A, dots at fret 6(D,G), fret 4(B); X highE
  // Frame shows: X 6E, X A, dots fret 6 on D and G, dot fret 5 on B, X 1E
  'F#M7': {
    strings: [-1, -1, 6, 6, 5, -1],
    fingers: [0, 0, 2, 3, 1, 0],
    startFret: 4,
    barres: [],
    category: 'key_of_B'
  },
  // B/C#: X lowE, dot 6(A), dot 6(D), dot 6(G), dot 6(B); X highE
  'B/C#': {
    strings: [-1, 6, 6, 6, 6, -1],
    fingers: [0, 1, 2, 3, 4, 0],
    startFret: 5,
    barres: [],
    category: 'key_of_B'
  },
  // F#: dot 4(lowE), dot 6(A,D), dot 5(G), dot 4(B,highE) — barre at 4
  'F#': {
    strings: [4, 6, 6, 5, 4, 4],
    fingers: [1, 3, 4, 2, 1, 1],
    startFret: 3,
    barres: [{fret: 4, fromString: 1, toString: 6}],
    category: 'key_of_B'
  },

  // ===================== KEY OF C/G =====================

  // CM7: O lowE(?), dots at fret 5(A), fret 5(D); O G, O B, O highE
  // Frame shows: O highE, O B, O G, dot fret 5 on D, dot fret 5 on A; X lowE
  'CM7': {
    strings: [-1, 5, 5, 0, 0, 0],
    fingers: [0, 1, 2, 0, 0, 0],
    startFret: 4,
    barres: [],
    category: 'key_of_C_G'
  },
  // G/B: X lowE, O A(?), X D; dot fret 3 on G; O B, dot fret 5(highE)
  // Frame shows in key of C section: X 6E, O A, X D, dot fret 3 G(?), O B, O 1E
  // Actually frame 0575: X lowE, O A, X D, O G, O B, O 1E — too simple
  // Frame 0600 (G/B): X 6E, X A, O D, dot fret 5(G), O B, O 1E
  'G/B': {
    strings: [-1, -1, 0, 5, 0, 0],
    fingers: [0, 0, 0, 1, 0, 0],
    startFret: 4,
    barres: [],
    category: 'key_of_C_G'
  },
  // Am7: O highE, dots fret 5(B), fret 5(G), fret 5(D); O A; X lowE
  // Frame 0625: O 1E, O B, dots fret 5 on G and D, O A, X 6E
  'Am7': {
    strings: [-1, 0, 5, 5, 0, 0],
    fingers: [0, 0, 1, 2, 0, 0],
    startFret: 4,
    barres: [],
    category: 'key_of_C_G'
  },
  // C/D: X lowE, X A, O D, dot fret 5(G); O B, O highE
  // Frame 0580/0610: X 6E, X A, dot fret 7 on D(?), O G, O B, O 1E
  // Actually frame shows single dot around fret 5 on D; rest open
  'C/D': {
    strings: [-1, -1, 5, 0, 0, 0],
    fingers: [0, 0, 1, 0, 0, 0],
    startFret: 4,
    barres: [],
    category: 'key_of_C_G'
  },
  // Dm7: X lowE, X A, dots fret 5(D), fret 5(G,B); X highE
  'Dm7': {
    strings: [-1, -1, 5, 5, 5, -1],
    fingers: [0, 0, 1, 2, 3, 0],
    startFret: 4,
    barres: [],
    category: 'key_of_C_G'
  },
  // F/G: dot fret 5(lowE), X A, dot fret 5(D), dot fret 5(G,B,highE)
  'F/G': {
    strings: [5, -1, 5, 5, 5, 5],
    fingers: [1, 0, 2, 3, 3, 3],
    startFret: 4,
    barres: [{fret: 5, fromString: 1, toString: 3}],
    category: 'key_of_C_G'
  },
  // C#9(#11): X lowE, dot fret 6(A), fret 5(D), fret 6(G), fret 6(B); X highE
  // Frame 0585: X 6E, dot around fret 6 on A, dot fret 5 on D, dots fret 6 on G and B; X 1E
  'C#9(#11)': {
    strings: [-1, 6, 5, 6, 6, -1],
    fingers: [0, 2, 1, 3, 4, 0],
    startFret: 4,
    barres: [],
    category: 'key_of_C_G'
  },
  // G: X lowE, O A, O D, O G, O B, O highE (open G shape... but frame shows dots)
  // Frame 0634: O lowE(?), O A, O D, O G, O B, O 1E — almost all open
  // Actually frame shows: X 6E, dot fret 5(A), O D, O G, O B, O 1E
  'G': {
    strings: [-1, 5, 0, 0, 0, 0],
    fingers: [0, 1, 0, 0, 0, 0],
    startFret: 4,
    barres: [],
    category: 'key_of_C_G'
  },
  // Bb13: X lowE, X A, dots fret 5(D), fret 5(G), fret 5(B), fret 5(highE)
  // Frame 0595: X 6E, X A, dots around fret 5-6 on D,G,B,1E
  'Bb13': {
    strings: [-1, -1, 5, 5, 5, 5],
    fingers: [0, 0, 1, 2, 3, 4],
    startFret: 4,
    barres: [],
    category: 'key_of_C_G'
  },
  // Dm/F: dots fret 3(lowE), X A, dots across D,G,B; fret 5 range
  // Frame 0639: dots fret 3(6E), O D, dots fret 5(G,B), fret 3(1E)
  'Dm/F': {
    strings: [3, -1, 0, 5, 5, 3],
    fingers: [1, 0, 0, 3, 4, 1],
    startFret: 2,
    barres: [{fret: 3, fromString: 1, toString: 6}],
    category: 'key_of_C_G'
  },
  // E7sus4: O lowE, O A, dot fret 4(D), O G, dot fret 5(B), O highE
  // Frame 0620: O 6E, O A, dot fret 4 on D, O G, dot fret 5 on B; O 1E
  'E7sus4': {
    strings: [0, 0, 4, 0, 5, 0],
    fingers: [0, 0, 1, 0, 2, 0],
    startFret: 3,
    barres: [],
    category: 'key_of_C_G'
  },
  // A/C#: O highE, X B, dot fret 4(G), dot fret 4(D), dot fret 6(A); X lowE
  // Frame 0628/0630: O 1E, X B, dot fret 4 on D and G, dot fret 6 on A; X 6E
  'A/C#': {
    strings: [-1, 6, 4, 4, -1, 0],
    fingers: [0, 4, 1, 2, 0, 0],
    startFret: 3,
    barres: [],
    category: 'key_of_C_G'
  },
  // D7sus4: X lowE, X A, O D, dot fret 5(G), fret 4(B), fret 5(highE)
  'D7sus4': {
    strings: [-1, -1, 0, 5, 4, 5],
    fingers: [0, 0, 0, 2, 1, 3],
    startFret: 3,
    barres: [],
    category: 'key_of_C_G'
  },
  // D7: X lowE, X A, O D, dot fret 5(G), fret 4(B), fret 4(highE)
  // Frame 0632: X 6E, X A, O D, dot fret 5 G, dots fret 4 on B and 1E
  'D7': {
    strings: [-1, -1, 0, 5, 4, 4],
    fingers: [0, 0, 0, 3, 1, 2],
    startFret: 3,
    barres: [],
    category: 'key_of_C_G'
  },
  // Dsus4: X lowE, X A, O D, dot fret 5(G), fret 5(B), fret 5(highE)
  'Dsus4': {
    strings: [-1, -1, 0, 5, 5, 5],
    fingers: [0, 0, 0, 1, 2, 3],
    startFret: 4,
    barres: [],
    category: 'key_of_C_G'
  },
  // D/F#: dot fret 4(lowE), O A, O D, dot fret 5(G), fret 5(B), fret 4(highE)
  // Frame 0636: dots fret 4 on 6E, O A, O D, dots fret 5 on G and B; maybe fret 4 on 1E
  'D/F#': {
    strings: [4, 0, 0, 5, 5, 4],
    fingers: [1, 0, 0, 2, 3, 1],
    startFret: 3,
    barres: [{fret: 4, fromString: 1, toString: 6}],
    category: 'key_of_C_G'
  },
  // Em7: O lowE, dot fret 4(A), dot fret 4(D), O G, dot fret 5(B), O highE
  'Em7': {
    strings: [0, 4, 4, 0, 5, 0],
    fingers: [0, 1, 2, 0, 3, 0],
    startFret: 3,
    barres: [],
    category: 'key_of_C_G'
  },
  // C#m7(b5): X lowE, dot fret 6(A), dot fret 4(D), dot fret 6(G), fret 4(B); O highE
  'C#m7(b5)': {
    strings: [-1, 6, 4, 6, 4, 0],
    fingers: [0, 3, 1, 4, 2, 0],
    startFret: 3,
    barres: [],
    category: 'key_of_C_G'
  },
  // GM7: X lowE, dot fret 5(A), O D, O G, O B, dot fret 4(highE)
  // Or: like G but with maj7 — fret 4 on highE
  'GM7': {
    strings: [-1, 5, 0, 0, 0, 4],
    fingers: [0, 2, 0, 0, 0, 1],
    startFret: 3,
    barres: [],
    category: 'key_of_C_G'
  },
  // E/G# in final section (same voicing, reused from key_of_A context)
  // Already defined above as 'E/G#'

  // B/D# reused in final section — same voicing
};


// =============================================================================
// SONG STRUCTURE — Sections + chord progressions with timestamps
// =============================================================================

const SONG_DATA = {
  title: "Beautiful Jazz Guitar Arrangement",
  channel: "AW Guitar",
  source: "https://youtu.be/kZ7MBgaso78",
  capo: "Capo on (visible in video)",

  sections: [
    {
      name: "Intro",
      time: "0:00",
      type: "tab",
      lines: []
    },
    {
      name: "Verse 1",
      time: "1:05",
      key: "A",
      lines: [
        ["AM7", "E/G#", "F#m7", "A/B", "Bm7", "D/E", "Bb7(#11)"],
        ["AM7", "E/G#", "C#m7", "F#m7", "E/G#", "A/B"]
      ]
    },
    {
      name: "Chorus 1",
      time: "1:26",
      key: "A",
      lines: [
        ["EM7", "B/D#", "Bm/D", "C#7", "Bm7", "E/G#", "F#/A#", "B7sus4", "B7", "B7sus4"],
        ["EM7", "B/D#", "Bm/D", "C#7", "F#m7", "A/B"]
      ]
    },
    {
      name: "Interlude",
      time: "1:42",
      type: "tab",
      lines: []
    },
    {
      name: "Verse 2",
      time: "2:20",
      key: "A",
      lines: [
        ["AM7", "E/G#", "F#m7", "A/B", "Bm7", "D/E", "Bb7(#11)"],
        ["AM7", "E/G#", "C#m7", "F#m7", "E/G#", "A/B"]
      ]
    },
    {
      name: "Chorus 2",
      time: "2:37",
      key: "A",
      lines: [
        ["EM7", "B/D#", "Bm/D", "C#7", "Bm7", "E/G#", "F#/A#", "B7sus4", "B7", "B7sus4"],
        ["EM7", "B/D#", "Bm/D", "C#7", "F#m7", "A/B"],
        ["EM7", "B/D#", "Bm/D", "C#7", "Bm7", "E/G#", "F#/A#", "B7sus4", "B7", "B7sus4"],
        ["EM7", "B/D#", "Bm/D", "C#7", "F#m7", "A/B"]
      ]
    },
    {
      name: "Bridge",
      time: "3:11",
      key: "A",
      lines: [
        ["A/E", "E", "B/D#", "Bm", "E", "C#7", "F#m7", "A/B"]
      ]
    },
    {
      name: "Outro (Key of A)",
      time: "3:24",
      key: "A",
      lines: [
        ["AM7", "E/G#", "F#m7", "E"],
        ["AM7", "E/G#", "F#m7", "A/B", "E"]
      ]
    },
    {
      name: "Key Change to B",
      time: "4:10",
      key: "B",
      lines: [
        ["BM7", "F#/A#", "G#m7", "F#M7", "F#/A#", "BM7", "F#/A#", "G#m7", "B/C#", "F#"]
      ]
    },
    {
      name: "Key Change to C",
      time: "4:42",
      key: "C",
      lines: [
        ["CM7", "G/B", "Am7", "C/D", "Dm7", "F/G", "C#9(#11)"],
        ["CM7", "G/B", "Am7", "G", "G/B", "CM7", "G/B", "Am7", "C/D", "G"],
        ["CM7", "Bm7", "Bb13", "Am7", "G/B", "CM7", "C/D"]
      ]
    },
    {
      name: "Final Section",
      time: "5:09",
      key: "G",
      lines: [
        ["G", "Dm/F", "E7sus4", "E/G#", "Am7", "G/B", "A/C#", "D7sus4", "D7", "Dsus4"],
        ["G", "D/F#", "Dm/F", "E7sus4", "E/G#", "Am7", "C/D"],
        ["G", "D/F#", "Dm/F", "E7sus4", "E/G#", "Am7", "G/B", "A/C#", "B/D#"],
        ["Em7", "D/F#", "Dm/F", "E7sus4", "E/G#", "Am7", "C/D"]
      ]
    },
    {
      name: "Ending",
      time: "5:48",
      key: "G",
      lines: [
        ["G", "Em7", "Am7", "C/D", "Em7", "C#m7(b5)"],
        ["Am7", "C/D", "GM7"]
      ]
    }
  ]
};


// =============================================================================
// CHORD LIBRARY — grouped by key for the right panel
// =============================================================================

const CHORD_LIBRARY = {
  'Key of A': [
    'AM7', 'E/G#', 'F#m7', 'EM7', 'A/B', 'Bm7', 'D/E', 'Bb7(#11)',
    'C#m7', 'Bm/D', 'C#7', 'B/D#', 'F#/A#', 'B7sus4', 'B7',
    'E', 'A/E', 'Bm'
  ],
  'Key of B': [
    'BM7', 'G#m7', 'F#M7', 'B/C#', 'F#'
  ],
  'Key of C/G': [
    'CM7', 'G/B', 'Am7', 'C/D', 'Dm7', 'F/G', 'C#9(#11)',
    'G', 'Bb13', 'Dm/F', 'E7sus4', 'A/C#',
    'D7sus4', 'D7', 'Dsus4', 'D/F#', 'Em7', 'C#m7(b5)', 'GM7'
  ]
};


// =============================================================================
// TAB DATA — Intro fingerpicking pattern (from video frames)
// =============================================================================

const TAB_DATA = `
e|----0-------0-------0-------0-------0-------0-------0-------0----|
B|------2-------2-------2-------2-------2-------2-------2-------2--|
G|--------2-------2-------2-------2-------1-------1-------1--------|
D|----2-------2-------2-------2-------2-------2-------2-------2----|
A|--0-------0-------0-------0-------0-------0-------0-------0------|
E|------------------------------------------------------------------

e|----0-------0-------0-------0-------0-------0-------0-------0----|
B|------2-------2-------2-------2-------2-------2-------2-------2--|
G|--------2-------2-------2-------2-------1-------1-------1--------|
D|----4-------2-------4-------2-------4-------2-------3-------4----|
A|--0-------0-------0-------0----------------------------------------|
E|------------------------------------------4-------4-------4------|
`.trim();
