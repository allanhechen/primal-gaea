const playButton = document.getElementById("play-button");
const audioSource = document.getElementById("audio");
var isPlaying = false;

function play() {
  if (isPlaying) {
    playButton.src = "img/player/circle-play-solid.svg";
    isPlaying = false;
    audioSource.volume = .50;
    audioSource.pause();
  } else {
    playButton.src = "img/player/circle-pause-solid.svg";
    isPlaying = true;
    audioSource.volume = .50;
    audioSource.play();
  }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("volumeId");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  audioSource.volume = this.value*.01;
}