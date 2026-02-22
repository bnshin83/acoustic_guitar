// =============================================================================
// SONG DATA — [Song Title]
// Source: [YouTube URL]
// =============================================================================
//
// How to add a new song:
// 1. Copy this file to songs/<song_id>/data.js
// 2. Fill in the voicings, songData, library, and tabData
// 3. Add an entry to songs/registry.js
// 4. Add a <script src="songs/<song_id>/data.js"> tag in index.html
//
// Voicing format:
//   strings: [lowE, A, D, G, B, highE] — -1=muted, 0=open, n=fret number
//   fingers: [lowE, A, D, G, B, highE] — 0=not played, 1=index, 2=middle, 3=ring, 4=pinky
//   startFret: first fret shown on diagram (used as fallback)
//   barres: [{fret, fromString, toString}] — fromString/toString: 1=highE, 6=lowE
//   category: grouping key (e.g. 'key_of_C', 'intro', 'verse')

registerSong('CHANGE_ME', {

voicings: {
  // 'ChordName': {
  //   strings: [-1, 0, 2, 2, 1, 0],
  //   fingers: [0, 0, 2, 3, 1, 0],
  //   startFret: 1,
  //   barres: [],
  //   category: 'key_of_C'
  // },
},

songData: {
  title: "",
  artist: "",
  source: "",
  capo: "",

  sections: [
    // {
    //   name: "Intro",
    //   time: "0:00",
    //   type: "tab",     // use type:"tab" for fingerpicking sections (no chord buttons)
    //   lines: []
    // },
    // {
    //   name: "Verse 1",
    //   time: "0:30",
    //   key: "C",        // shown as "Key of C" label
    //   lines: [
    //     ["C", "Am", "F", "G"],       // each sub-array is one line of chords
    //     ["C", "Am", "Dm7", "G7"]
    //   ]
    // },
  ]
},

library: {
  // 'Key of C': ['C', 'Am', 'F', 'G', 'Dm7', 'G7'],
},

tabData: ''

});
