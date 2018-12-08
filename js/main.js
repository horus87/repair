
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


var modal = document.getElementById('modal-js');
var modal2 = document.getElementById('modal-mini-js');
var btn = document.getElementById('button-js');
var btn2 = document.getElementById('button-js_sm');
var btn3 = document.getElementsByClassName('modal-close');

for (var i = 0; i < btn3.length; i++) {
  btn3[i].addEventListener('click', function() {
    modal.style.display = "none";
    modal2.style.display = "none";
  })
}

btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
  modal.style.display = "block";
}



window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}




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