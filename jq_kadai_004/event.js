// $(function() {
  // ページ読み込み完了時に「loadイベントが発生しました」と表示する
  $(window).on("load", function() {
    console.log("loadイベントが発生しました");
  });
 
  // スクロール時に「scrollイベントが発生しました」と表示する
  $(window).on("scroll", function() {
    console.log("scrollイベントが発生しました");
  });
//  });