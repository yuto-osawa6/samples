$(document).on('turbolinks:load', function(){
 
 // edit
  
 $(document).on("click",".TopContents__ahomes__edit__button", function () {
  // e.preventdefault() 
            
  const commentId = $(this).data('ahomes__id'); 
  // console.log(commentId)                  
  const commentLabelArea = $('#ahomes_area--box2-' + commentId);   
  const commentTextArea = $('#ahomes_area--box3-' + commentId); 
  const commentButton = $('#cr-edit-button' + commentId);   
  
  // console.log(commentId)



  commentLabelArea.hide();
  commentTextArea.show();  
  commentButton.show(); 

  $(".allcover__sheet").css("display","block")


});

// cancel
$(document).on("click", ".cr-cancel-button", function () {
  const commentId = $(this).data('cancel-id');
  const commentLabelArea = $('#ahomes_area--box2-' + commentId);
  const commentTextArea = $('#ahomes_area--box3-' + commentId);
  const commentButton = $('#cr-edit-button' + commentId);
  // const commentError = $('#js-comment-post-error-' + commentId);

  commentLabelArea.show();
  commentTextArea.hide();
  commentButton.hide();
  $(".allcover__sheet").css("display","none")
  // commentError.hide();
});








// allcover__sheet

// $('.TopContents__ahomes__edit__button').click(function() { 
       
//   if ($(this).hasClass('selected2')) {
//     // メニュー非表示
//     $(this).removeClass('selected2').next('.f3iali').slideUp('fast');
//   } else {
//     // 表示しているメニューを閉じる
//     // $('.f3ia').removeClass('selected2');
//     // $('.f3iali').hide();

//     // メニュー表示
//     $(this).addClass('selected2').next('.f3iali').slideDown('fast');
//     $(".kddy-p").css("display","block")

//   }    
// });

// $('.f3ia,.f3iali').hover(function(){
//     over_flg = true;
//   }, function(){
//     over_flg = false;
//   });  
  
//   // メニュー領域外をクリックしたらメニューを閉じる
//   $('.kddy-p').click(function() {
//     if (over_flg == false) {
//       $('.f3ia').removeClass('selected2');
//       $('.f3iali').slideUp('fast');
//       $(".kddy-p").css("display","none")
//     }




//   });



})

