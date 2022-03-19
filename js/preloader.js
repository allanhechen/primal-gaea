preloader = document.getElementById("preloader");
sleep(200).then(() => {
  preloader.style.opacity = "0";
    preloader.remove();
});

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}