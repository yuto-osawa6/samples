$(document).on('turbolinks:load', function(){
 
 // edit
  
 $(document).on("click",".TopContents__ahomes__edit__button", function () {
  // e.preventdefault() 
            
  const commentId = $(this).data('ahomes__id'); 
  // console.log(commentId)                  
  // const commentLabelArea = $('#ahomes_area--box2-' + commentId);   
  const commentTextArea = $('#ahomes_area--box3-' + commentId); 
  const commentButton = $('#cr-edit-button' + commentId);   
  
  // console.log(commentId)



  // commentLabelArea.hide();
  commentTextArea.show();  
  commentButton.show(); 

  $(".allcover__sheet").css("display","block")


});

// cancel
$(document).on("click", "a1submits", function () {
  const commentId = $(this).data('submit-id');
  // const commentLabelArea = $('#ahomes_area--box2-' + commentId);
  const commentTextArea = $('#ahomes_area--box3-' + commentId);
  const commentButton = $('#cr-edit-button' + commentId);
  // const commentError = $('#js-comment-post-error-' + commentId);

  // commentLabelArea.show();
  commentTextArea.hide();
  commentButton.hide();
  $(".allcover__sheet").css("display","none")
  // commentError.hide();
});

$(document).on("click", ".cr-cancel-button", function () {
  const commentId = $(this).data('cancel-id');
  // const commentLabelArea = $('#ahomes_area--box2-' + commentId);
  const commentTextArea = $('#ahomes_area--box3-' + commentId);
  const commentButton = $('#cr-edit-button' + commentId);
  // const commentError = $('#js-comment-post-error-' + commentId);

  // commentLabelArea.show();
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


//fhomes

$(document).on("click",".TopContents__fhomes__edit__button", function () {

            
  const commentIdf = $(this).data('fhomes__id');     
  const commentTextAreaf = $('#fhomes_area--box3-' + commentIdf); 
  const commentButtonf = $('#fcr-edit-button' + commentIdf);   

  commentTextAreaf.show();  
  commentButtonf.show(); 

  $(".allcover__sheet").css("display","block")


});

// cancel
$(document).on("click", ".fcr-cancel-button", function () {
  const commentIdf = $(this).data('cancel-idf');
  const commentTextAreaf = $('#fhomes_area--box3-' + commentIdf);
  const commentButtonf= $('#fcr-edit-button' + commentIdf);
  // const commentError = $('#js-comment-post-error-' + commentId);


  commentTextAreaf.hide();
  commentButtonf.hide();
  $(".allcover__sheet").css("display","none")
});

//ihomes

$(document).on("click",".TopContents__ihomes__edit__button", function () {

            
  const commentIdi = $(this).data('ihomes__id');     
  const commentTextAreai = $('#ihomes_area--box3-' + commentIdi); 
  const commentButtoni = $('#icr-edit-button' + commentIdi);   

  commentTextAreai.show();  
  commentButtoni.show(); 

  $(".allcover__sheet").css("display","block")


});

// cancel
$(document).on("click", ".icr-cancel-button", function () {
  const commentIdi = $(this).data('cancel-idi');
  const commentTextAreai = $('#ihomes_area--box3-' + commentIdi);
  const commentButtoni= $('#icr-edit-button' + commentIdi);
  // const commentError = $('#js-comment-post-error-' + commentId);


  commentTextAreai.hide();
  commentButtoni.hide();
  $(".allcover__sheet").css("display","none")
});


//b1homes(blog.new)

$(document).on("click",".TopContents__b1homes__edit__button", function () {

            
  const commentIdi = $(this).data('b1homes__id');     
  const commentTextAreai = $('#b1homes_area--box3-' + commentIdi); 
  const commentButtoni = $('#b1cr-edit-button' + commentIdi);   

  commentTextAreai.show();  
  commentButtoni.show(); 

  $(".allcover__sheet").css("display","block")


});

// cancel
$(document).on("click", ".b1cr-cancel-button", function () {
  const commentIdi = $(this).data('cancel-idb1');
  const commentTextAreai = $('#b1homes_area--box3-' + commentIdi);
  const commentButtoni= $('#b1cr-edit-button' + commentIdi);
  // const commentError = $('#js-comment-post-error-' + commentId);


  commentTextAreai.hide();
  commentButtoni.hide();
  $(".allcover__sheet").css("display","none")
});




//b2blogshow

$(document).on("click",".arminarlert", function () {

            
  const commentIdi = $(this).data('b2blogs__id');     
  const commentTextAreai = $('#blogs_area--box3-' + commentIdi); 
  const commentButtoni = $('#blogscr-edit-button' + commentIdi);   

  commentTextAreai.show();  
  commentButtoni.show(); 

  console.log(commentTextAreai)

  $(".allcover__sheet").css("display","block")


});

// cancel
$(document).on("click", ".blogscr-cancel-button", function () {
  
  const commentIdi = $(this).data('cancel-idblogs');     
  const commentTextAreai = $('#blogs_area--box3-' + commentIdi); 
  const commentButtoni = $('#blogscr-edit-button' + commentIdi);   

  commentTextAreai.hide();  
  commentButtoni.hide(); 

  
  $(".allcover__sheet").css("display","none")
});


//b2homes(blog.edit)

$(document).on("click",".TopContents__b2homes__edit__button", function () {
  const commentIdi = $(this).data('b2homes__id'); 
  const commentTextAreai2 = $('#blogs_area--box3-' + commentIdi); 
  const commentButtoni2 = $('#blogscr-edit-button' + commentIdi); 

            
      
  const commentTextAreai = $('#b2homes_area--box3-' + commentIdi); 
  const commentButtoni = $('#b2cr-edit-button' + commentIdi);   

 
  commentTextAreai.show();  
  commentButtoni.show(); 
   commentTextAreai2.hide();  
  commentButtoni2.hide(); 

  $(".allcover__sheet").css("display","block")


});

// cancel
$(document).on("click", ".b2cr-cancel-button", function () {
  const commentIdi = $(this).data('cancel-idb2');
  const commentTextAreai = $('#b2homes_area--box3-' + commentIdi);
  const commentButtoni= $('#b2cr-edit-button' + commentIdi);
  // const commentError = $('#js-comment-post-error-' + commentId);


  commentTextAreai.hide();
  commentButtoni.hide();
  $(".allcover__sheet").css("display","none")
});



//cuhomes

$(document).on("click",".TopContents__cuhomes__edit__button", function () {

            
  const commentIdb = $(this).data('cuhomes__id');     
  const commentTextAreac = $('#cuhomes_area--box3-1'); 
  const commentButtonc = $('#cucr-edit-button' + commentIdb);   

  commentTextAreac.show();  
  commentButtonc.show(); 

  $(".allcover__sheet").css("display","block")


});

// cancel
$(document).on("click", ".cucr-cancel-button", function () {
  const commentIdb = $(this).data('cancel-idcu');
  const commentTextAreac = $('#cuhomes_area--box3-1');
  const commentButtonc = $('#cucr-edit-button' + commentIdb);
  // const commentError = $('#js-comment-post-error-' + commentId);


  commentTextAreac.hide();
  commentButtonc.hide();
  $(".allcover__sheet").css("display","none")
});







})

