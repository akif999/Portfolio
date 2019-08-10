//ヘッダーの画像とナビゲーションがフワッと出る処理
$(function(){
  $('#navigation').fadeIn(2500);
  $('#top-banner').addClass('show');
})

//ヘッダーナビゲーションのリンクにクリックするとスクロールでリンク先へ飛ぶ処理
$('header a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html,body').animate({'scrollTop':position},1000);
});

//右下のスクロールトップボタンをクリックするとトップにスクロールする処理
$(function(){
// ウィンドウが一定以上スクロールされてからスクロールボタンを表示する処理
$(window).scroll(function(){
  if ($(this).scrollTop() > 300) {
    topBtn.stop().animate({'bottom':'10%'});//画面の右下に表示
  }else{
    topBtn.stop().animate({'bottom':'-100px'});//画面外に出す
  }
});
// スクロールボタンがクリックされた時の処理
  var topBtn = $('#scroll-icon');
    topBtn.click(function(){
    $('html,body').animate({'scrollTop':0},500);
  });
});

//ヘッダーナビゲーションのリンクをhoverすると文字が拡大する処理
$(function(){
  $('.nav-item').hover(function(){
    // hoverされた時の処理
    $(this).css({
      'border-bottom':'2px solid #005FFF',
      'color':'#005FFF',
      'transition':'.4s',
      'transform':'scale(1.2)',
    });
  },function(){
    //hoverが外れた時の処理
    $(this).css({
      'border':'none',
      'color':'#222',
      'transition':'.5s',
      'transform':'scale(1.0)',
    });
  });
});

//textareaの文字カウンター
$(function(){
  $('#js-counter').keyup(function(){ //keyupで発火
    var count = $(this).val().length; //countにtextareaの文字数を格納
    $('.show-counter').text(count); //文字数が変わる処理
  });
});

//Contactフォームに入力されているかバリデーションチェック
$(function(){
  const MSG_EMPTY = 'を入力してください';
  const MSG_TEXT_MAX = 'は20文字以内で入力してください';
  const MSG_TEXTAREA_MAX = 'は100文字以内で入力してください';
  const MSG_EMAIL = 'の形式で入力してください';

  //名前フォームのバリデーションチェック
  $('.valid-text').keyup(function(){
    var formText = $(this).closest('.form-group');
    //0文字の時にエラー
    if ($(this).val().length === 0) {
      formText.removeClass('success').addClass('error');
      formText.find('.error-text').text(MSG_EMPTY);
    //20文字以上の時にエラー
    }else if ($(this).val().length > 20) {
      formText.removeClass('success').addClass('error');
      formText.find('.error-text').text(MSG_TEXT_MAX);
    }else {
      formText.removeClass('error').addClass('success');
      formText.find('.error-text').text('');
    }
  });
  //Emailフォームのバリデーションチェック
  $('.valid-email').keyup(function(){
    var formText = $(this).closest('.form-group');
    //0文字の時にエラー
    if ($(this).val().length === 0) {
      formText.removeClass('success').addClass('error');
      formText.find('.error-text').text(MSG_EMPTY);
    //50文字以上またはemailの形式でない場合にエラー
    }else if ($(this).val().length > 50 || !$(this).val().match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      formText.removeClass('success').addClass('error');
      formText.find('.error-text').text(MSG_EMAIL);
    }else {
      formText.removeClass('error').addClass('success');
      formText.find('.error-text').text('');
    }
  });
  //textareaのバリデーションチェック
  $('.valid-textarea').keyup(function(){
    var formText = $(this).closest('.form-group');
    //0文字の時にエラー
    if ($(this).val().length === 0) {
      formText.removeClass('success').addClass('error');
      formText.find('.error-text').text(MSG_EMPTY);
    //100文字以上の時にエラー
    }else if ($(this).val().length > 100) {
      formText.removeClass('success').addClass('error');
      formText.find('.error-text').text(MSG_TEXTAREA_MAX);
    }else {
      formText.removeClass('error').addClass('success');
      formText.find('.error-text').text('');
    }
  });
});
