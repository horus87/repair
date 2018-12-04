
$('.slider').slick({
  draggable: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: 'ease-in',
  prevArrow: '<div class="arrow arrow-left"></div>',
  nextArrow: '<div class="arrow arrow-right"></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerPadding: '0',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});


var modal = document.getElementById('modal-js');
var btn = document.getElementById('button-js');

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}