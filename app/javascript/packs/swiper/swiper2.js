const swiper2 = new Swiper('.swiper-container2', {
  // Optional parameters

  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  centeredSlides : true,
  allowTouchMove: false, // スワイプ操作をできないようにする
  // effect: 'slide',    //切り替わるときのアニメーション
      speed: 3000,        //画像の切替スピード
      autoplay: {         //自動で動かす
        delay: 0,
        disableOnInteraction: false
      },
    });