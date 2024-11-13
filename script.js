// List of songs with details
const songs = [
    { title: "Song 1", artist: "Artist 1", file: "song1.mp3" },
    { title: "Song 2", artist: "Artist 2", file: "song2.mp3" },
    { title: "Song 3", artist: "Artist 3", file: "song3.mp3" },
    { title: "Song 4", artist: "Artist 4", file: "Full Video_ Chuttamalle - Devara  NTR  Janhvi Kapoor  Anirudh  Shilpa Rao  Koratala Siva.mp3" },
    { title: "Song 5", artist: "Artist 5", file: "song4.mp3" },
    { title: "Song 6", artist: "Artist 6", file: "song5.mp3" }
  ];
  
  let currentSongIndex = 0;
  const audioPlayer = document.getElementById("audio-player");
  const songTitle = document.getElementById("song-title");
  const songArtist = document.getElementById("song-artist");
  
  function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    audioPlayer.src = song.file;
  }
  
  function togglePlayPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }
  
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
  }
  
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
  }
  
  // Load the first song initially
  loadSong(currentSongIndex);
  