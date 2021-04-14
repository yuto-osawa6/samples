// $(document).on('turbolinks:load', function(){
// $(function(){

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.5,
  centeredSlides : true,
  simulateTouch:false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		renderBullet: function (index, className) {
			//中に数字を表示
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		}
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});





