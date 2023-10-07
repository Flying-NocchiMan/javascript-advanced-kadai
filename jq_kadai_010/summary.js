$(function () {
  // id属性が文字色変化の要素がクリックされたら
  $('#change-color').on('click', function () {
    // id属性がtargetの要素のcolorプロパティをblueにする
    $('#target').css('color', 'blue');
  });
  // id属性が文字内容変化の要素がクリックされたら
$('#change-text').on('click', function () {
    // id属性がPの要素のtextプロパティをHello!にする
    $('P').text('Hello!');
  });
// id属性がフェードアウトの要素がクリックされたら
$('#fade-out').on('click', function () {
  // id属性がtargetの要素をフェードアウトにする
  $('#target').fadeOut();
  });
// id属性がフェードインの要素がクリックされたら
$('#fade-in').on('click', function () {
  // id属性がtargetの要素をフェードアウトにする
  $('#target').fadeIn();
    });
  });