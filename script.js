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

//クリックの機能
$(function(){
  $(".button").click(function(){
    alert("くりっくしました");
    $("#q10").removeClass("aaa");  
  });
});

//q02のプロパティ情報を持ってくる
$(function(){
  var q02c = $("#q02").css("color");
  $("#q09").text(q02c);
});

//焼肉をクリックするとclassをaaaからbbbへ変更される
$(function(){
  $("#q10").click(function(){
    alert("aaa")
    $(this).toggleClass("bbb");  
  });
});

//テキストの先頭に追加
$(function(){
  $("#q10").prepend("超平和バスターズ！");
});

//テキストの末尾に追加
$(function(){
  $("#q10").append("タン、ハツ、ミノ、レバー！！");
});

//ulへの要素のつけたしができる→詳しくはキータ参照
$(function(){
  $("#q13 li").before("<li>飛べない</li>");
});
$(function(){
  //eqは、インデックス-1(つまり末尾)のliを指定している。
  //そのあとにただの豚を挿入
  $("#q13 li").eq(-1).after('<li>ただの豚</li>');
});

//要素の追加のやり方２
$(function(){
  $('<p>あああ</p>').prependTo('#q15');
  $('<p>ううう</p>').appendTo('#q15');
});


//divの前後に差し込み
$(function(){
  $('<p>ききき</p>').insertBefore("#q17");
  $('<p>くくく</p>').insertAfter("#q17");
});

//要素をタグで囲む
$(function(){
  $("#q19").wrap('<div class="ccc"><div>')
});

$(function(){
  $("p.q21").wrapAll('<div class="ddd"><div>');
});

//タグ内の文字列の変更
$(function(){
  $('<p>XXX</p>').replaceAll(".q22");
});

//attrメソッド：HTML要素の 属性 を取得,変更,新規追加できるメソッド
$(function(){
  $(".q24").attr('class', 'q24_a');
});

//aタグのhref属性を削除->aタグまで指定してあげないといけないよね。
$(function(){
  $("p.q25 a").removeAttr('href');
});

//target='_blanc'を追加することによって別窓を開くことができる。
$(function(){
  $("p.q26 a").attr('target','_blank');
});

//クラスの切り替え
$(function(){
  $(".q27_a").attr('class', 'q27_b');
  //$(".q27_a").toggleClass('q27_b'); ->どっちでも可
});

//要素内のvalueを変更
$(function(){
    $("form input").val("入力してくださいよ")           
});

//要素の位置を設定する
$(function(){
  $("#q29").offset({
    "top": 5430, 
    "left": 800
  });
});

//クリックでliの要素を削除
$(function(){
  $(".button2").click(function(){
    alert("クリックされたよ");
    $("#q30").empty();
  });
});
 
//問題31 ->未完
//画面のロードで画像をリサイズ
$(function(){
  $(".img1").on('load',function(){
    $("this").toggleClass('image');
  });
});

	//問題32
	//画面のロードで画像をリサイズ???
	$(function(){
	  $(window).resize(function(){
		  $(".image").css({'width': '100','height':'60'});
	  });
	});

	//問題33
	//ul内のliの数を取得
	$(function(){
	      var size = $(".eee li").length;
        alert(size);
	      $('#q33').text('liの数は' + size + '個');
	  });
