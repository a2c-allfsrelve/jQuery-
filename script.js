//cssを設定できる
$(function(){
  $("#q01").css('color', 'red');
});
$(function(){
    $("#q02").css({'color':'blue','background':'yellow'});
});
//テキストを書き換える
$(function(){
    $("#q03").text("あいうえお先生");
});
$(function(){
    $("#q04").text("大脳視床下部");
});
//おまけ
var $agyou = $("#02"); 
$(function(){
  $("#03").mouseover(
    function(){
      $agyou.fadeOut();
    }
  );
});
//htmlを書き換える
$(function(){
  $("#q05").html('<a href="#">大脳視床下部</a>');
});
//タグにアドレスを追加
$(function(){
  $("#q06").addClass("aaa");
});
//内容の削除
//こういう風に複数の要素を指定できるらしい
$(function(){
  $("#q07 li").remove();
});
$(function(){
  $(".button").click(function(){
    alert("くりっくしました");
  });
});