$(document).ready(function() {
  var color = 'white';

  $('#red').on('click', function(){
    color = 'red';
  });

  $('#blue').on('click', function(){
    color = 'blue';
  });

  $('#yellow').on('click', function(){
    color = 'yellow';
  });

  $('#green').on('click', function(){
    color = 'green';
  });

  $('#white').on('click', function(){
    color = 'white';
  });


  $('.box').click(function() {
    $(this).addClass(color);
  });

  $('.box').on('dblclick', function() {
    $(this).removeClass('red blue yellow green white');
  });

$('#reset').on('click', function(){
  $('.box').removeClass('red blue yellow green white');
});



});
