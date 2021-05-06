const swiper2 = new Swiper('.swiper-container2', {
  // Optional parameters

  direction: 'horizontal',
  loop: true,
  freeMode: true,
  slidesPerView: 6,
  centeredSlides : true,
  allowTouchMove: false, // スワイプ操作をできないようにする
  // effect: 'slide',    //切り替わるときのアニメーション
      speed: 9000,        //画像の切替スピード
      autoplay: {         //自動で動かす
        delay: 1,
        disableOnInteraction: false
      },
      breakpoints: {
        1800:{
          slidesPerView: 5,
          spaceBetween: 0
        },
        1600: {
          slidesPerView: 4.5,
          spaceBetween: 0
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        1200:{
          slidesPerView: 3.5,
          spaceBetween: 0
        },
        999: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        767: {
          slidesPerView: 2.5,
          spaceBetween: 0
        },
        580: {
          slidesPerView: 2,
          spaceBetween: 0
        },

        399: {
          slidesPerView: 1.5,
          spaceBetween: 0
        },
        200: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    });