preloader = document.getElementById("preloader");
preloader.style.opacity = "0";
sleep(500).then(() => {
  preloader.remove();
});

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}