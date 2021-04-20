$(document).on('turbolinks:load', function(){
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

});