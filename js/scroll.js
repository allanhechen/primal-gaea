const navBar = document.getElementById("navbar");
// const dropDown = document.getElementById("dropdown-menu");
const overlay = document.getElementById("overlay-links");
const height = window.innerHeight * 0.5;
const footer = document.getElementById("footer");

var myScrollFunc = function() {
  // console.log(footer.getBoundingClientRect().top < window.innerHeight);
  if (footer.getBoundingClientRect().top < window.innerHeight) {
    navBar.classList.add("view-navbar");
    overlay.classList.remove("visible");
  } else if (window.scrollY >= height) {
    navBar.classList.add("view-navbar");
    overlay.classList.add("visible");
  } else {
    navBar.classList.remove("view-navbar");
    dropDown.classList.remove("active");
    overlay.classList.remove("visible");
  }
};

window.addEventListener("scroll", myScrollFunc);