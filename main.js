$(document).ready(function(){
  $('#mobile').click(function(){
    $('#sidebar').slideToggle('fast')
  });

  window.onresize = function(event) {
    if($(window).width() > 520) {
      $('#sidebar').show();
    }
    if($(window).width() < 520) {
      $('#sidebar').hide();
    }
  };
});