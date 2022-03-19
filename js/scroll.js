var navBar = document.getElementById("navbar");
var dropDown = document.getElementById("dropdown-menu");
const height = window.innerHeight * 0.75;

var myScrollFunc = function() {
  if (window.scrollY >= height) {
    navBar.classList.add("view");
  } else {
    navBar.classList.remove("view");
    dropDown.classList.remove("active");
  }
};

window.addEventListener("scroll", myScrollFunc);