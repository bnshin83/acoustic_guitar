// =============================================================================
// SONG REGISTRY — Multi-song support
// Each song's data.js calls registerSong() to store its data here.
// =============================================================================

const SONG_STORE = {};

function registerSong(id, data) {
  SONG_STORE[id] = data;
}

const SONG_REGISTRY = [
  {
    id: 'aw_guitar_jazz',
    title: 'Beautiful Jazz Arrangement',
    artist: 'AW Guitar',
    source: 'https://youtu.be/kZ7MBgaso78',
    dataFile: 'songs/aw_guitar_jazz/data.js'
  }
  // To add a new song:
  // 1. Create songs/<song_id>/data.js using songs/_template/data.js
  // 2. Add an entry here
  // 3. Add a <script src="songs/<song_id>/data.js"> tag in index.html
];
