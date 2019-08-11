// ヘッダーの画像とナビゲーションがフワッと出る処理
$(function() {
  $('#navigation').fadeIn(2500);
  $('#top-banner').addClass('show');
})

// ヘッダーナビゲーションのリンクにクリックするとスクロールでリンク先へ飛ぶ処理
$('header a').click(function() {
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html,body').animate({'scrollTop':position},1000);
});

// 右下のスクロールトップボタンをクリックするとトップにスクロールする処理
$(function() {
$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    topBtn.stop().animate({'bottom':'10%'});//画面の右下に表示
  } else {
    topBtn.stop().animate({'bottom':'-100px'});//画面外に出す
  }
});

// スクロールボタンがクリックされた時の処理
  var topBtn = $('#scroll-icon');
    topBtn.click(function() {
    $('html,body').animate({'scrollTop':0},500);
  });
});

// ヘッダーナビゲーションのリンクをhoverすると文字が拡大する処理
$(function() {
  $('.nav-item').hover(function() {
    $(this).css({
      'border-bottom': '2px solid #005FFF',
      'color':         '#005FFF',
      'transition':    '.4s',
      'transform':     'scale(1.2)',
    });
  }, function() {
    $(this).css({
      'border':     'none',
      'color':      '#222',
      'transition': '.5s',
      'transform':  'scale(1.0)',
    });
  });
});

// textareaの文字カウンター
$(function() {
  $('#js-counter').keyup(function() {
    var count = $(this).val().length;
    $('.show-counter').text(count);
  });
});

// Contactフォームに入力されているかバリデーションチェック
$(function() {
  const MSG_EMPTY =        'を入力してください';
  const MSG_TEXT_MAX =     'は20文字以内で入力してください';
  const MSG_TEXTAREA_MAX = 'は100文字以内で入力してください';
  const MSG_EMAIL =        'の形式で入力してください';

  $('.valid-text').keyup(function() {
    var formText = $(this).closest('.form-group');
    if ($(this).val().length === 0) {
      formText.removeClass('success').addClass('error');
      formText.find('.error-text').text(MSG_EMPTY);
    } else if ($(this).val().length > 20) {
      formText.removeClass('success').addClass('error');
      formText.find('.error-text').text(MSG_TEXT_MAX);
    } else {
      formText.removeClass('error').addClass('success');
      formText.find('.error-text').text('');
    }
  });
  $('.valid-email').keyup(function() {
    var formText = $(this).closest('.form-group');
    if ($(this).val().length === 0) {
      formText.removeClass('success').addClass('error');
      formText.find('.error-text').text(MSG_EMPTY);
    } else if ($(this).val().length > 50 || !$(this).val().match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      formText.removeClass('success').addClass('error');
      formText.find('.error-text').text(MSG_EMAIL);
    } else {
      formText.removeClass('error').addClass('success');
      formText.find('.error-text').text('');
    }
  });
  $('.valid-textarea').keyup(function() {
    var formText = $(this).closest('.form-group');
    if ($(this).val().length === 0) {
      formText.removeClass('success').addClass('error');
      formText.find('.error-text').text(MSG_EMPTY);
    } else if ($(this).val().length > 100) {
      formText.removeClass('success').addClass('error');
      formText.find('.error-text').text(MSG_TEXTAREA_MAX);
    } else {
      formText.removeClass('error').addClass('success');
      formText.find('.error-text').text('');
    }
  });
});
