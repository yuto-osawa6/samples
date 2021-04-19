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

  var navilis = $('.right_1000__up li').offset().top + 0;
  var ahomes = $('#aa').offset().top - navilis;
  var bhomes = $('#ab').offset().top - navilis;
  var chomes = $('#ac').offset().top - navilis;
  var ghomes = $('#ag').offset().top - navilis;

 


  $(window).scroll(function () {
    console.log(ahomes)
    console.log($(this).scrollTop());
    // 画面をトップから100px以上スクロールした時
    if ($(this).scrollTop() >= ahomes && $(this).scrollTop() < bhomes) {
      // ヘッダーのbackground-colorを白に変更し、boxshadowをつける
      $('.right_1000__up li').find('a').css('color','black');
      $('.right_1000__up li').find('a').addClass('active__navi')
      $('#align-justigy-icon').css('color','black');
     
      // CONTACTとお問い合わせの文字色のみ、白のまま固定
      // navContact.find('a, span').css('color', '#fff');
      // liタグにホバーした際、文字色を変更
      // $('.right_1000__up').hover(
      //   function() {
      //     $(this).find('a').css('color', '#fff');
      //   }
    
    } else if($(this).scrollTop() >= bhomes && $(this).scrollTop() < chomes ) {
      $('.right_1000__up li').find('a').css('color','#fff');
      $('.right_1000__up li').find('a').removeClass('active__navi')
      $('#align-justigy-icon').css('color','#fff');
      
      // 画面がトップから100px以下の時は、上記と逆の処理を行う
      // header.css({'background':'rgba(250, 250, 250, 0)', 'box-shadow':'none'});
      // headerLogo.attr('src', 'logo-white.png').css('width', 120);
      // navLink.find('a').css('color', '#fff');
      // navSpan.css('color', '#fff');
      // navLink.hover(
      //   function() {
      //     $(this).find('a, span').css('color', '#fff');
      //   },
      //   function() {
      //     $(this).find('a, span').css('color', '#fff');
        }else if($(this).scrollTop() < ahomes) {
          $('.right_1000__up li').find('a').css('color','#fff');
          $('.right_1000__up li').find('a').removeClass('active__navi')
          $('#align-justigy-icon').css('color','#fff');



        }else if($(this).scrollTop() >= chomes && $(this).scrollTop() < ghomes) {
          $('.right_1000__up li').find('a').css('color','black');
          $('.right_1000__up li').find('a').addClass('active__navi')
          $('#align-justigy-icon').css('color','black');


        }else if($(this).scrollTop() >= ghomes) {
          $('.right_1000__up li').find('a').css('color','#fff');
          $('.right_1000__up li').find('a').removeClass('active__navi')
          $('#align-justigy-icon').css('color','#fff');


        }
      // );
    // );


  });







});