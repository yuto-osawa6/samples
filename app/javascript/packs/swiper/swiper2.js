const swiper2 = new Swiper('.swiper-container2', {
  // Optional parameters

  direction: 'horizontal',
  loop: true,
  freeMode: true,
  slidesPerView: 1,
  centeredSlides : true,
  allowTouchMove: false, // スワイプ操作をできないようにする
  // effect: 'slide',    //切り替わるときのアニメーション
      speed: 3000,        //画像の切替スピード
      autoplay: {         //自動で動かす
        delay: 1,
        disableOnInteraction: false
      },
      breakpoints: {
        999: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        399: {
          slidesPerView: 2,
          spaceBetween: 0
        }
      }
    });