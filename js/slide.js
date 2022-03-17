var element = document.getElementById("nav-menu");
var navBar = document.getElementById("navbar");
var dropDown = document.getElementById("dropdown-menu");
const height = window.innerHeight * 0.75;

function slide() {
  element.classList.toggle("visible")
}

document.addEventListener('click', function(e){
  x = e.pageX;
  target = e.target;
  if (dropDown.classList.contains("active") && target.id != "dropdown-menu" && target.id != "more") {
    // console.log(target);
    dropDown.classList.toggle("active");
  }
  if (element.classList.contains("visible") && $(window).width() - x > 350) {
    element.classList.toggle("visible");
  }
});

var myScrollFunc = function() {
  if (window.scrollY >= height) {
    navBar.classList.add("view");
  } else {
    navBar.classList.remove("view");
    dropDown.classList.remove("active")
  }
};

window.addEventListener("scroll", myScrollFunc);

function dropdown() {
  dropDown.classList.toggle("active");
}