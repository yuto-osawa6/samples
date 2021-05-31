
  const swiper2 = new Swiper('.swiper-container2', {
    // Optional parameters
  
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    // simulateTouch:false,
    centeredSlides : true,
    spaceBetween: 20,
    // allowTouchMove: false, // スワイプ操作をできないようにする
    effect: 'slide',
        speed: 9000,        //画像の切替スピード
        autoplay: {         //自動で動かす
          delay: 1,
          disableOnInteraction: true
        },
        mousewheel: {
          forceToAxis: true,
        },
        breakpoints: {
          1800:{
            slidesPerView: 5,
            
          },
          1600: {
            slidesPerView: 4.5,
  
          },
          1400: {
            slidesPerView: 4,
  
          },
          1200:{
            slidesPerView: 3.5,
  
          },
          999: {
            slidesPerView: 3,
  
          },
          767: {
            slidesPerView: 2.5,
  
          },
          580: {
            slidesPerView: 2,
       
  
          },
          480: {
            slidesPerView: 1.5,
  
  
          },
          450: {
            slidesPerView: 1,
  
            // freeMode: false,
  
          },
  
          399: {
            slidesPerView: 1,
  
            // freeMode: false,
  
          },
          200: {
            slidesPerView: 1,
      
          }
        }
      });
