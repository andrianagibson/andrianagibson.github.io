$(function() {
  //alert("jquery loaded!")
});
//targeting a class
//click or mouseover or mouseleave
//standard way of writing an action
$('.hide').on('click', function() {
  $('#myimage').hide();
  $('#actiontitle').text('Image is hidden');
  $('#actiontitle').css('color', 'red');
});

$('.show').on('click', function() {
  $('#myimage').show();
  $('#actiontitle').text('Image is showing');
  $('#actiontitle').css('color', 'green');
});

$('.done').on('click', function() {
  $('body').html('<h2>We are done!</h2> <p>see ya later!</p>');
});


$('.append').on('click', function() {
  var username = $('#testinput').val();
  $('#list').append('<li>'+username+'</li>');
});
