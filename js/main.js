// var skillset = document.getElementsByClassName('skillset');

// alert(skillset);

// function main () {
//   var $skillset = $('.skillset');
//   alert($skillset);
// }

// $(document).ready(main);

function main () {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function() {
    //$('.projects').show();
    //$('.projects').toggle();
    //$('.projects').toggleClass('active');
    //$(this).next().toggle();
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
  })
}

$(document).ready(main);