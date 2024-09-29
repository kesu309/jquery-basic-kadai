// HTMLドキュメントのロードイベント
$(window).on('load', function() {
    console.log('loadイベントが発生しました');
  });

  // ウィンドウのスクロールイベント
  $(window).on('scroll', function() {
    console.log('scrollイベントが発生しました');
  });