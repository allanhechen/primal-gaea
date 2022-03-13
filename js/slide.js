function slide() {
  var element = document.getElementById('nav-menu');
  element.classList.toggle("visible")
}

document.addEventListener('click', function(e){
  x = e.pageX
  element = document.getElementById("nav-menu");
  if (element.classList.contains("visible") && $(window).width() - x > 350) {
    element.classList.toggle("visible");
  }
});