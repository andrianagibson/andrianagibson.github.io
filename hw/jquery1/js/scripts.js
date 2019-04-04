var step = 0
var titles = ['prepare ingredients', //thi is 0 titles[0]
  'make the layers', //this is 1 titles[1]
  'bake!', //this is 2 titles[2]
  'They are done! What now?', //this is 3 titles[3]
  'Questions? Answered.' //this is 4 titles[4]
];


$(function() {
  $("#stepinfo, section, footer, .prev").hide();
});

$('.start').on('click', function() {
  //do stuff when button is clicked//
  $('.intro').hide();
  $('footer,#stepinfo').show();
  step = 1;
  $('#step' + step).show();
  //f(x)=x+2
  //set the title for our current step
  $('#stepinfo').text('step ' + step + ': ' + titles[step - 1]);
});

$('.next').on('click', function() {
  //make the change only if we are under the number of steps
  $('#step' + step).hide();
  step++;
  if (step == 2) {
    $('.prev').show();
  }
  if (step == 5) {
    $('.next').hide();
  }
  if (step <= 5) {
    $('#step' + step).show();
    $('#stepinfo').text('Step ' + step + ': ' + titles[step - 1]);
  } else {
    step--;
    $('#step' + step).show();

  }
});

//previous
$('.prev').on('click', function() {
  //make the change only if we are under the number of steps
  $('#step' + step).hide();
  step--;
  if (step == 1) {
    $('.prev').hide();
  } else {
    $('.next').show();
  }
  if (step == 5) {
    $('.next').hide();
  }
  if (step >= 1) {
    $('#step' + step).show();
    $('#stepinfo').text('Step ' + step + ': ' + titles[step - 1]);
  } else {
    step--;
    $('#step' + step).show();

  }
});

$('.start').on('click', function() {
  $('.body').css('color', 'green');

});

$('.finish').on('click', function() {
  $('body').html('<h2> You have reached the end of the tutorial!</h2> <p>Enjoy your dessert!</p>');
});
