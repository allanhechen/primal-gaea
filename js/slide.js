var element = document.getElementById("nav-menu");
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
    dropDown.classList.toggle("clickable");
  }
  if (element.classList.contains("visible") && $(window).width() - x > 350) {
    element.classList.toggle("visible");
  }
});

function dropdown() {
  dropDown.classList.toggle("active");
  dropDown.classList.toggle("clickable");
}