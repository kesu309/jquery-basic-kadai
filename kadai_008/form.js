$(function() {
    // ボタンがクリックされたとき
    $('.btn').click(function() {
        // テキストボックス内に表示
        $('.text-box').val('クリックしました！');
        console.log('クリックしました！');
    });
});