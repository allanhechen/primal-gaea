const navBar = document.getElementById("navbar");
// const dropDown = document.getElementById("dropdown-menu");
const overlay = document.getElementById("overlay-links");
const height = window.innerHeight * 0.5;

var myScrollFunc = function() {
  if (window.scrollY >= height) {
    console.log("hello");
    navBar.classList.add("view-navbar");
    overlay.classList.add("visible");
  } else {
    navBar.classList.remove("view-navbar");
    dropDown.classList.remove("active");
    overlay.classList.remove("visible");
  }
};

window.addEventListener("scroll", myScrollFunc);