
// Constructor function initializes the playlist object with a name and empty song list
function Playlist(name) {
  this.name = name; // Current Playlist object being created
  this.songs = []; // Creates an empty array to hold songs in the playlist
  this.currentSong = null; // Tracks the playing song
}

// Adds song to playlist
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);
};

// Plays the first song in the playlist
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong);  // Outputs the song being played
  }
};

// Skips the current song and plays the next one
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift(); // Removes the first song from the list
    this.currentSong = this.songs[0];
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};

// Lists all songs in the playlist
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};

// Improvement Suggestion: Add a method to repeat the currently playing song
// New Method: Repeats the current song
Playlist.prototype.repeatSong = function() {
  if (this.currentSong) {
    console.log("Replaying:", this.currentSong);
  } else {
    console.log("No song is currently playing to repeat.");
  }
};

let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();
  
