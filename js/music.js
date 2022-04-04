const playButton = document.getElementById("play-button");
const audioSource = document.getElementById("audio");
var isPlaying = false;

function play() {
  if (isPlaying) {
    playButton.src = "img/player/circle-play-solid.svg";
    isPlaying = false;
    audioSource.pause();
  } else {
    playButton.src = "img/player/circle-pause-solid.svg";
    isPlaying = true;
    audioSource.play();
  }
}