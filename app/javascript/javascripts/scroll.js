$(document).on('turbolinks:load', function(){
  $(document).on('click','a[href^="#a"]', function (){
    // e.preventdefault()
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#a" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  $(document).on('click','.Scrollebutton', function (){
    

   function locate(){
    $(window).scroll(function() {

      var kddy = ($(this).scrollTop()
      

      )})
    }

  console.log(locate);
    var wH = $(window).height(); 
    const position = wH
      const speed = 400;
      $("html,body").animate({scrollTop:position},speed);
    
    return false;
  });




  $(document).on('click','.TopContents__navi__left', function (){
    

    var wH = $(window).height(); 
    const position = 0
      const speed = 400;
      $("html,body").animate({scrollTop:position},speed);
    
    return false;
  });

});