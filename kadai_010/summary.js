// ボタンが押された時に文字色を変更する関数
document.getElementById("change-color").onclick = function() {
    // 文字色を赤色に変更
    document.getElementById("target").style.color = "red";
};
// ボタンが押された時に文字色を変更する関数
document.getElementById("change-text").onclick = function() {
    // 文字内容の変更、文字色を赤
    document.getElementById("target").textContent = "Hello!";
    document.getElementById("target").style.color = "red";
};

$(function () {
    // id属性がfade-outの要素がクリックされたら
    $('#fade-out').on('click', function() {
      // フェードアウトする
      $('#target').fadeOut();
    });

    // id属性がfade-inの要素がクリックされたら
    $('#fade-in').on('click', function() {
     // フェードインする
     $('#target').fadeIn();
   });
 
   });