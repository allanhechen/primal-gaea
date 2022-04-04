const overlay = document.getElementById("overlay-links");
const footer = document.getElementById("footer");

var myScrollFunc = function() {
  if (footer.getBoundingClientRect().top < window.innerHeight) {
    overlay.classList.remove("visible");
  } else if (window.scrollY >= 0) {
    overlay.classList.add("visible");
  } else {
    overlay.classList.remove("visible");
  }
};

window.addEventListener("scroll", myScrollFunc);