var navMenu = document.getElementById("nav-menu");
var dropDown = document.getElementById("dropdown-menu");
var dropDownMore = document.getElementById("more");
var menuButton = document.getElementById("openMenu");

function slide() {
  navMenu.classList.toggle("visible");
}

document.addEventListener('click', function(e){
 
  x = e.pageX;
  target = e.target;
  if (target != dropDown && !dropDown.contains(target) && target != dropDownMore) {
    dropDown.classList.remove("active");
    dropDown.classList.remove("clickable");
  }
  if (target != navMenu && !navMenu.contains(target) && target != menuButton || target.tagName == 'A') {
    navMenu.classList.remove("visible");
  }
});

function dropdown() {
    dropDown.classList.toggle("active");
    dropDown.classList.toggle("clickable");

}

function removeOverlay() {
  overlay.style.opacity = "0"
  sleep(500).then(() => {
    overlay.remove();
  }); 
}
