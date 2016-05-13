$(document).foundation();


// See Owl Slider options and add comma before new options.
// http://www.owlcarousel.owlgraphic.com/docs/api-options.html

$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
});

// Parallax Init
// var scene = document.getElementById('scene');
// var parallax = new Parallax(scene);


// Scrollspeed Smoothing Plugin Init
// Increase first variable to increase movement amount
// Increase second variable to increase movement speed
jQuery.scrollSpeed(100, 500);
