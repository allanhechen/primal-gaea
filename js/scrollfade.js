$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    document.getElementById('top-nav').classList.add('scrolled')
  } else {
    document.getElementById('top-nav').classList.remove('scrolled')
  }
});