
$('.slider').slick({
  draggable: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="arrow arrow-left"></div>',
  nextArrow: '<div class="arrow arrow-right"></div>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 2,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      
      }
    }
  ]
});

/*
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    modal3.style.display = "flex";
  })
}
*/


$( document ).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      document.getElementById('modal-mini-js').style.display = 'flex';
      $(this).find("input").val("");
      $("form").trigger("reset");
    });
    return false;
  });

});

document.querySelector('#button-js').addEventListener('click', function() {
  yaCounter51456473.reachGoal('btn'); return true;
});


var telInp = $('input[type="tel"]');
      
telInp.each(function(){
  $(this).mask("+7-999-99-99-999");
});


  