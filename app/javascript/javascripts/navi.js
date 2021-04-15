$(document).on('turbolinks:load', function(){

  $('.TopContents__navi__smafo__icon').click(function() {
    $(this).toggleClass('mytoggle');
    $('.TopContents__navi__smafo__icon2').toggleClass('mytoggle');
    $('.right_1000__down').slideToggle();

})

$('.TopContents__navi__smafo__icon2').click(function() {
  $(this).toggleClass('mytoggle');
  $('.TopContents__navi__smafo__icon').toggleClass('mytoggle');
  $('.right_1000__down').slideToggle();

})


});