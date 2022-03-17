function slide() {
  var element = document.getElementById('nav-menu');
  element.classList.toggle("visible")
}

document.addEventListener('click', function(e){
  x = e.pageX
  var element = document.getElementById("nav-menu");
  if (element.classList.contains("visible") && $(window).width() - x > 350) {
    element.classList.toggle("visible");
  }
});

var thing = document.getElementById("navbar");
var dropDown = document.getElementById("dropdown-menu")

var myScrollFunc = function() {
  if (window.scrollY >= window.innerHeight) {
    thing.classList.add("view");
  } else {
    thing.classList.remove("view");
    dropDown.classList.remove("active")
  }
};

window.addEventListener("scroll", myScrollFunc);

function dropdown() {
  var element = document.getElementById("dropdown-menu");
  element.classList.toggle("active")
}