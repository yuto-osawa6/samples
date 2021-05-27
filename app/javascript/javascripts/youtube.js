$(document).on('turbolinks:load', function(){
  function createyotube(data) {
    let html = `<div class="youtube__center" id="${data.id}">
    <div class = "youtube__buttuon__close"><i class="fas fa-times"></i></div>
    <div class = "youtube__roll__box">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${data.youtube}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
   </div>
   
                </div>`
    return html;
  }


  // $(".playzoon").on("click", function(e) {
    $(document).on("click",".playzoon", function (e) {
    e.preventDefault();  // デフォルトのイベント(HTMLデータ送信など)を無効にする
    // let inputText = $(".note_form-text").val();  // textareaの入力値を取得
    // let url = $(this).attr("action");  // action属性のurlを抽出
     youtube_id = $(this).data('youtube_id');
    $.ajax({
      url: "/iihomes/youtube",  // リクエストを送信するURLを指定
      type: "GET",  // HTTPメソッドを指定（デフォルトはGET）
      data: { 
        id: youtube_id // 送信するデータをハッシュ形式で指定
      },
      dataType: "json"  // レスポンスデータをjson形式と指定する
    })
    .done(function(data) {
      console.log(data)
      let html = createyotube(data);  // 受信したデータ(data)を元に追加するURLを生成(createHTML関数は冒頭で定義)
      $(".youtube__box").append(html);  // 生成したHTMLをappendメソッドでドキュメントに追加
      // $(".note_form-text").val("");
        // textareaを空にする
        $(".allcover__sheet").css("display","block")
    })
    .fail(function() {
      alert("error!");  // 通信に失敗した場合はアラートを表示
    })
    // .always(function() {
    //   // $(".note_form-btn").prop("disabled", false);  // submitボタンのdisableを解除
    //   // $(".note_form-btn").removeAttr("data-disable-with");  // submitボタンのdisableを解除(Rails5.0以降はこちらも必要)
    // });
  });


  $(document).on("click",".playzoon2", function (e) {
    e.preventDefault();  // デフォルトのイベント(HTMLデータ送信など)を無効にする
    // let inputText = $(".note_form-text").val();  // textareaの入力値を取得
    // let url = $(this).attr("action");  // action属性のurlを抽出
     youtube_id = $(this).data('youtube_id2');
    $.ajax({
      url: "/eehomes/youtube",  // リクエストを送信するURLを指定
      type: "GET",  // HTTPメソッドを指定（デフォルトはGET）
      data: { 
        id: youtube_id // 送信するデータをハッシュ形式で指定
      },
      dataType: "json"  // レスポンスデータをjson形式と指定する
    })
    .done(function(data) {
      console.log(data)
      let html = createyotube(data);  // 受信したデータ(data)を元に追加するURLを生成(createHTML関数は冒頭で定義)
      $(".youtube__box").append(html);  // 生成したHTMLをappendメソッドでドキュメントに追加
      // $(".note_form-text").val("");
        // textareaを空にする
        $(".allcover__sheet").css("display","block")
    })
    .fail(function() {
      alert("error!");  // 通信に失敗した場合はアラートを表示
    })
    // .always(function() {
    //   // $(".note_form-btn").prop("disabled", false);  // submitボタンのdisableを解除
    //   // $(".note_form-btn").removeAttr("data-disable-with");  // submitボタンのdisableを解除(Rails5.0以降はこちらも必要)
    // });
  });









    $(document).on("click",".fa-times", function () {
      $(".allcover__sheet").css("display","none")
      $(".youtube__center").remove();
      
  });

  // $(document).on("hover",".planning__image", function () {
    $('.planning__image').hover(function() {
    $(this).find('img').addClass("players__hovers");
    },
    function() {
        
      //マウスカーソルが離れた時の処理
      $(this).find('img').removeClass("players__hovers");
    
});


});
