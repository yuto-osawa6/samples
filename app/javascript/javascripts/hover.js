$(document).on('turbolinks:load', function(){
// $(function(){

//hover
// $('.News__contents__lists__1').hover(
//   function() {
      
//     //  const blogsId = $(this).data('b2blogs__id');
//       //マウスカーソルが重なった時の処理
//       // $('.blogslie'+blogsId).css('transform', 'translateY(-10px)');
//       // $('.blogslie'+blogsId).addClass('News__contents__lists__cover__second')
//       $(this).css('transform', 'translateY(-10px)');
//       $(this).addClass('News__contents__lists__cover__second')
      
//   },
//   function() {
//       const blogsId = $(this).data('b2blogs__id');
//       //マウスカーソルが離れた時の処理
//       $(this).css('transform', 'translateY(10px)');
//       $(this).removeClass('News__contents__lists__cover__second')
//   }
// );
const mql = window.matchMedia('(min-width: 769px)');
const handleMediaQuery = function(mql) {
  if (mql.matches) {
    // 769px以上の場合の処理
    // console.log('769px以上');
    $('.News__contents__lists__cover').hover(
      function() {
          
         const blogsId = $(this).data('b2blogs__id');
         $('.blogslie'+blogsId).css('opacity', '0.6');
    
          //マウスカーソルが重なった時の処理
          // $('.blogslie'+blogsId).css('transform', 'translateY(-10px)');
          // $('.blogslie'+blogsId).addClass('News__contents__lists__cover__second')
          // $(this).css('transform', 'translateY(-10px)');
          // $(this).addClass('News__contents__lists__cover__second')
         
          
          
      },
      function() {
          const blogsId = $(this).data('b2blogs__id');
          $('.blogslie'+blogsId).css('opacity', '1');
    
          // $('.blogslie'+blogsId).css('transform', 'translateY(10px)');
          // $('.blogslie'+blogsId).removeClass('News__contents__lists__cover__second')
          //マウスカーソルが離れた時の処理
          // $(this).css('transform', 'translateY(10px)');
          // $(this).removeClass('News__contents__lists__cover__second')
      }
    );


  } else {
    // 769px未満の場合の処理
    console.log('769px未満');
  }
};

mql.addListener(handleMediaQuery);
handleMediaQuery(mql);

});