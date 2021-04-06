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

//bhomes

$(document).on("click",".TopContents__bhomes__edit__button", function () {
  // e.preventdefault() 
            
  const commentIdb = $(this).data('bhomes__id'); 
  // console.log(commentId)                  
  const commentLabelAreab = $('#bhomes_area--box2b');
  const commentLabelAreabb = $('#bhomes_area--box2bb');     
  const commentTextAreab = $('#bhomes_area--box3-' + commentIdb); 
  const commentButtonb = $('#bcr-edit-button' + commentIdb);   
  
  // console.log(commentId)



  // commentLabelAreab.hide();
  // commentLabelAreabb.hide();
  commentTextAreab.show();  
  commentButtonb.show(); 

  $(".allcover__sheet").css("display","block")


});

// cancel
$(document).on("click", ".bcr-cancel-button", function () {
  const commentIdb = $(this).data('cancel-idb');
  const commentLabelAreab = $('#bhomes_area--box2b');
  const commentLabelAreabb = $('#bhomes_area--box2bb');
  const commentTextAreab = $('#bhomes_area--box3-' + commentIdb);
  const commentButtonb = $('#bcr-edit-button' + commentIdb);
  // const commentError = $('#js-comment-post-error-' + commentId);

  // commentLabelAreab.show();
  // commentLabelAreabb.show();
  commentTextAreab.hide();
  commentButtonb.hide();
  $(".allcover__sheet").css("display","none")
  // commentError.hide();
});


//chomes

$(document).on("click",".TopContents__chomes__edit__button", function () {

            
  const commentIdb = $(this).data('chomes__id');     
  const commentTextAreac = $('#chomes_area--box3-' + commentIdb); 
  const commentButtonc = $('#ccr-edit-button' + commentIdb);   

  commentTextAreac.show();  
  commentButtonc.show(); 

  $(".allcover__sheet").css("display","block")


});

// cancel
$(document).on("click", ".ccr-cancel-button", function () {
  const commentIdb = $(this).data('cancel-idc');
  const commentTextAreac = $('#chomes_area--box3-' + commentIdb);
  const commentButtonc = $('#ccr-edit-button' + commentIdb);
  // const commentError = $('#js-comment-post-error-' + commentId);


  commentTextAreac.hide();
  commentButtonc.hide();
  $(".allcover__sheet").css("display","none")
});

//dhomes

$(document).on("click",".TopContents__dhomes__edit__button", function () {

            
  const commentIdd = $(this).data('dhomes__id');     
  const commentTextAread = $('#dhomes_area--box3-' + commentIdd); 
  const commentButtond = $('#dcr-edit-button' + commentIdd);   

  commentTextAread.show();  
  commentButtond.show(); 

  $(".allcover__sheet").css("display","block")


});

// cancel
$(document).on("click", ".dcr-cancel-button", function () {
  const commentIdd = $(this).data('cancel-idd');
  const commentTextAread = $('#dhomes_area--box3-' + commentIdd);
  const commentButtond = $('#dcr-edit-button' + commentIdd);
  // const commentError = $('#js-comment-post-error-' + commentId);


  commentTextAread.hide();
  commentButtond.hide();
  $(".allcover__sheet").css("display","none")
});

//ehomes

$(document).on("click",".TopContents__ehomes__edit__button", function () {

            
  const commentIde = $(this).data('ehomes__id');     
  const commentTextAreae = $('#ehomes_area--box3-' + commentIde); 
  const commentButtone = $('#ecr-edit-button' + commentIde);   

  commentTextAreae.show();  
  commentButtone.show(); 

  $(".allcover__sheet").css("display","block")


});

// cancel
$(document).on("click", ".ecr-cancel-button", function () {
  const commentIde = $(this).data('cancel-ide');
  const commentTextAreae = $('#ehomes_area--box3-' + commentIde);
  const commentButtone= $('#ecr-edit-button' + commentIde);
  // const commentError = $('#js-comment-post-error-' + commentId);


  commentTextAreae.hide();
  commentButtone.hide();
  $(".allcover__sheet").css("display","none")
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

