// =============================================================================
// CHORD DATA — AW Guitar Tutorial
// Source: https://youtu.be/kZ7MBgaso78
// Voicings matched from video frame chord diagrams
// =============================================================================

// strings: [lowE, A, D, G, B, highE] — -1=muted, 0=open, n=fret number
// fingers: [lowE, A, D, G, B, highE] — 0=not played, 1=index, 2=middle, 3=ring, 4=pinky
// startFret: lowest fret shown in diagram (1 = open position near nut)
// barres: [{fret, fromString, toString}] — fromString/toString are 1-6 (1=highE, 6=lowE)

const CHORD_VOICINGS = {
  // ===================== KEY OF A =====================

  'AM7': {
    strings: [-1, 0, 2, 1, 2, 0],
    fingers: [0, 0, 2, 1, 3, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'E/G#': {
    strings: [4, 2, 2, 1, 0, 0],
    fingers: [4, 2, 3, 1, 0, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'F#m7': {
    strings: [2, -1, 2, 2, 2, 0],
    fingers: [1, 0, 3, 4, 2, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'A/B': {
    strings: [-1, 2, 2, 2, 2, 0],
    fingers: [0, 1, 2, 3, 4, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'Bm7': {
    strings: [-1, 2, 0, 2, 0, 2],
    fingers: [0, 1, 0, 2, 0, 3],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'D/E': {
    strings: [0, -1, 0, 2, 3, 2],
    fingers: [0, 0, 0, 1, 3, 2],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'Bb7(#11)': {
    strings: [-1, 1, 0, 1, 3, 0],
    fingers: [0, 1, 0, 2, 4, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'C#m7': {
    strings: [-1, 4, 2, 4, 0, 0],
    fingers: [0, 3, 1, 4, 0, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'EM7': {
    strings: [0, -1, 1, 1, 0, 0],
    fingers: [0, 0, 1, 2, 0, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'B/D#': {
    strings: [-1, -1, 1, 4, 4, 2],
    fingers: [0, 0, 1, 3, 4, 2],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'Bm/D': {
    strings: [-1, -1, 0, 4, 3, 2],
    fingers: [0, 0, 0, 4, 3, 1],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'C#7': {
    strings: [-1, 4, 3, 4, 2, 0],
    fingers: [0, 3, 2, 4, 1, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'F#/A#': {
    strings: [-1, 1, -1, 3, 2, 2],
    fingers: [0, 1, 0, 4, 2, 3],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'B7sus4': {
    strings: [-1, 2, 2, 2, 0, 0],
    fingers: [0, 1, 2, 3, 0, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'B7': {
    strings: [-1, 2, 1, 2, 0, 2],
    fingers: [0, 2, 1, 3, 0, 4],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'E': {
    strings: [0, 2, 2, 1, 0, 0],
    fingers: [0, 2, 3, 1, 0, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'A/E': {
    strings: [0, 0, 2, 2, 2, 0],
    fingers: [0, 0, 1, 2, 3, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_A'
  },
  'Bm': {
    strings: [-1, 2, 4, 4, 3, 2],
    fingers: [0, 1, 3, 4, 2, 1],
    startFret: 1,
    barres: [{fret: 2, fromString: 1, toString: 5}],
    category: 'key_of_A'
  },

  // ===================== KEY OF B =====================

  'BM7': {
    strings: [-1, 2, 1, 3, 0, -1],
    fingers: [0, 2, 1, 3, 0, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_B'
  },
  'G#m7': {
    strings: [-1, -1, 1, 1, 0, 2],
    fingers: [0, 0, 1, 2, 0, 3],
    startFret: 4,
    barres: [],
    category: 'key_of_B'
  },
  'F#M7': {
    strings: [-1, -1, 3, 3, 2, 1],
    fingers: [0, 0, 3, 4, 2, 1],
    startFret: 1,
    barres: [],
    category: 'key_of_B'
  },
  'B/C#': {
    strings: [-1, 4, 4, 4, 4, 2],
    fingers: [0, 1, 2, 3, 4, 1],
    startFret: 1,
    barres: [],
    category: 'key_of_B'
  },
  'F#': {
    strings: [2, 4, 4, 3, 2, 2],
    fingers: [1, 3, 4, 2, 1, 1],
    startFret: 1,
    barres: [{fret: 2, fromString: 1, toString: 6}],
    category: 'key_of_B'
  },

  // ===================== KEY OF C/G =====================

  'CM7': {
    strings: [-1, 3, 2, 0, 0, 0],
    fingers: [0, 3, 2, 0, 0, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'G/B': {
    strings: [-1, 2, 0, 0, 0, 3],
    fingers: [0, 1, 0, 0, 0, 3],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'Am7': {
    strings: [-1, 0, 2, 0, 1, 0],
    fingers: [0, 0, 2, 0, 1, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'C/D': {
    strings: [-1, -1, 0, 0, 1, 0],
    fingers: [0, 0, 0, 0, 1, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'Dm7': {
    strings: [-1, -1, 0, 2, 1, 1],
    fingers: [0, 0, 0, 2, 1, 1],
    startFret: 1,
    barres: [{fret: 1, fromString: 1, toString: 2}],
    category: 'key_of_C_G'
  },
  'F/G': {
    strings: [3, -1, 3, 2, 1, 1],
    fingers: [3, 0, 4, 2, 1, 1],
    startFret: 1,
    barres: [{fret: 1, fromString: 1, toString: 2}],
    category: 'key_of_C_G'
  },
  'C#9(#11)': {
    strings: [-1, 4, 3, 4, 4, -1],
    fingers: [0, 2, 1, 3, 4, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'G': {
    strings: [3, 2, 0, 0, 0, 3],
    fingers: [2, 1, 0, 0, 0, 3],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'Bb13': {
    strings: [-1, 1, 0, 1, 3, 3],
    fingers: [0, 1, 0, 2, 3, 4],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'Dm/F': {
    strings: [1, -1, 0, 2, 3, 1],
    fingers: [1, 0, 0, 2, 4, 1],
    startFret: 1,
    barres: [{fret: 1, fromString: 1, toString: 6}],
    category: 'key_of_C_G'
  },
  'E7sus4': {
    strings: [0, 0, 2, 0, 3, 0],
    fingers: [0, 0, 1, 0, 2, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'A/C#': {
    strings: [-1, 4, 2, 2, 2, 0],
    fingers: [0, 4, 1, 2, 3, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'D7sus4': {
    strings: [-1, -1, 0, 2, 1, 3],
    fingers: [0, 0, 0, 2, 1, 3],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'D7': {
    strings: [-1, -1, 0, 2, 1, 2],
    fingers: [0, 0, 0, 2, 1, 3],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'Dsus4': {
    strings: [-1, -1, 0, 2, 3, 3],
    fingers: [0, 0, 0, 1, 2, 3],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'D/F#': {
    strings: [2, 0, 0, 2, 3, 2],
    fingers: [1, 0, 0, 2, 4, 3],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'B/D#': {
    // reuse same voicing from key_of_A — handled via lookup
    strings: [-1, -1, 1, 4, 4, 2],
    fingers: [0, 0, 1, 3, 4, 2],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'Em7': {
    strings: [0, 2, 2, 0, 3, 0],
    fingers: [0, 1, 2, 0, 3, 0],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  },
  'C#m7(b5)': {
    strings: [-1, 4, 2, 4, 2, 0],
    fingers: [0, 3, 1, 4, 1, 0],
    startFret: 1,
    barres: [{fret: 2, fromString: 1, toString: 3}],
    category: 'key_of_C_G'
  },
  'GM7': {
    strings: [3, 2, 0, 0, 0, 2],
    fingers: [3, 1, 0, 0, 0, 2],
    startFret: 1,
    barres: [],
    category: 'key_of_C_G'
  }
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
