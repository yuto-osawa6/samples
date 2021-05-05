$(document).on('turbolinks:load', function(){
  // $(function(){
  $(document).on('click','a[href^="#a"]', function (){


    // e.preventdefault()

    
    // $('.interviews__question__answers').css('display','none')

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

  // console.log(locate);
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

  var navilis = $('.right_1000__up li').offset().top + 0;
  var ahomes = $('#aa').offset().top - navilis;
  // var bhomes = $('#ab').offset().top - navilis;
  var ehomes = $('#ae').offset().top - navilis;
  var ghomes = $('#ag').offset().top - navilis;

  var fhomes = $('#af').offset().top - navilis;


  var bhomes = $('#ab').offset().top - navilis;


 


  $(window).scroll(function () {

    // if ($(this).scrollTop() >= 1) {
    //   $('.TopContents__navi').css('background-color','black');
    //   // $('.TopContents__navi').animate({
    //   //   'background-color' : 'black'
    //   // }, 'slow');
    // }

    //   else if($(this).scrollTop() == 0)  {
       
    //     $('.TopContents__navi').css('background-color','transparent');
    

    //   }


    if($(".interviews__question__answers").hasClass('minny')){
        var minny = $(".minny").outerHeight(true);
        // var ahomes1 = 
        // console.log(ahomes)
        // console.log(ahomes+minny)

      if ($(this).scrollTop() >= ahomes && $(this).scrollTop() < bhomes) {
        $('.image__logo').css('display','none')
        $('.image__logo2').css('display','block');
        
        $('.right_1000__up li').find('a').css('color','black');
        // $('.TopContents__navi').css('background-color','black');
  
        $('.right_1000__up li').find('a').addClass('active__navi')
       
       
        
      
      } else if($(this).scrollTop() >= bhomes+minny && $(this).scrollTop() < fhomes+minny ) {
        // $('.interviews__question__answers').css('display','none')
        $('.image__logo').css('display','block')
        $('.image__logo2').css('display','none');
        $('.right_1000__up li').find('a').css('color','#fff');
        $('.right_1000__up li').find('a').removeClass('active__navi')
  
          }else if($(this).scrollTop() < ahomes) {
            $('.image__logo').css('display','block')
        $('.image__logo2').css('display','none');
            $('.right_1000__up li').find('a').css('color','#fff');
            $('.right_1000__up li').find('a').removeClass('active__navi')
          
  
  
  
          }else if($(this).scrollTop() >= fhomes+minny && $(this).scrollTop() < ghomes+minny) {
            $('.image__logo').css('display','none')
        $('.image__logo2').css('display','block');
            $('.right_1000__up li').find('a').css('color','black');
            $('.right_1000__up li').find('a').addClass('active__navi')
  
  
  
          }else if($(this).scrollTop() >= ghomes+minny) {
            $('.image__logo').css('display','block')
        $('.image__logo2').css('display','none');
            $('.right_1000__up li').find('a').css('color','#fff');
            $('.right_1000__up li').find('a').removeClass('active__navi')
        
  
  
          }








    }
    else{
      // console.log(ahomes)

    


  
    if ($(this).scrollTop() >= ahomes && $(this).scrollTop() < bhomes) {
      $('.image__logo').css('display','none')
      $('.image__logo2').css('display','block');
      
      $('.right_1000__up li').find('a').css('color','black');
      // $('.TopContents__navi').css('background-color','black');

      $('.right_1000__up li').find('a').addClass('active__navi')
     
     
      
    
    } else if($(this).scrollTop() >= bhomes && $(this).scrollTop() < fhomes ) {
      // $('.interviews__question__answers').css('display','none')
      $('.image__logo').css('display','block')
      $('.image__logo2').css('display','none');
      $('.right_1000__up li').find('a').css('color','#fff');
      $('.right_1000__up li').find('a').removeClass('active__navi')

        }else if($(this).scrollTop() < ahomes) {
          $('.image__logo').css('display','block')
      $('.image__logo2').css('display','none');
          $('.right_1000__up li').find('a').css('color','#fff');
          $('.right_1000__up li').find('a').removeClass('active__navi')
        



        }else if($(this).scrollTop() >= fhomes && $(this).scrollTop() < ghomes) {
          $('.image__logo').css('display','none')
      $('.image__logo2').css('display','block');
          $('.right_1000__up li').find('a').css('color','black');
          $('.right_1000__up li').find('a').addClass('active__navi')



        }else if($(this).scrollTop() >= ghomes) {
          $('.image__logo').css('display','block')
      $('.image__logo2').css('display','none');
          $('.right_1000__up li').find('a').css('color','#fff');
          $('.right_1000__up li').find('a').removeClass('active__navi')
      


        }
      
      };

  });





  // $(function(){
    $(document).on('click', '.interviews__question ul li', function(){
    // $(".interviews__question ul li").on("click", function() {
      console.log(1)
      const commentId = $(this).data('question-id'); 
      if (!$("#slidetoggle_menu"+commentId).hasClass("minny")){
        $(".minny").slideToggle(); 
        
        // const commentId = $(this).data('question-id'); 
        // $("#slidetoggle_menu"+commentId).slideToggle(); 
        
        $(".interviews__question__answers").removeClass("minny")
        $("#slidetoggle_menu"+commentId).addClass("minny")

      }else{
        // $(".minny").slideToggle(); 
        
        $(".interviews__question__answers").removeClass("minny")
      }
        
        $("#slidetoggle_menu"+commentId).slideToggle(); 
        // $("#slidetoggle_menu").toggleClass("active"); 
    });

// });







});