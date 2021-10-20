console.log("jsからハロワー");

//-------tweetボタン----
// ------tweetボタン終わり----


function twitText() {
	var s, url;
	s = "JSでTwitterを開いて投稿しているよ";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}

// -------

console.log("Rie"+"G");
console.log("sumomo".split("o"));

// var 変数名 = 入れたいデータの値;

var students = "りえ";
console.log (students);

students = "たい";
console.log(students);

students = ["りえ","たい","りん"]
console.log(students);

console.log(students[2]);
students [0] = "ジョン";
console.log(students);

var sunabako = {"沖縄":"KOZA","北海道":"EBETSU","香川":"TAKAMATSU"}
console.log(sunabako);
console.log(sunabako["北海道"]);

// 数値代入演算
var count = 1;

console.log(count);  //1

count+= 1 ;  //count =count +1 ; 答えは2

count-= 2 ;

count*= 2 ;

count++; //count = count +1 ; 答えは2
count


console.log(1<2);

// 比較演算の例
var x = 2;
var y = 3;

console.log(x==y);  //xとyは等しい    f
console.log(x===y); //xとyは等しい    f
console.log(x<y);   //xよりyが大きい  t
console.log(x<=y);  //xよりyが大きいまたは等しい  t
console.log(x>y);   //xよりyが小さい   f
console.log(x>=y); //xよりyが小さいまたは等しいか  f
console.log(x!=y);  //xとyは等しくない  t

//条件分の練習



// if (条件式){
//実行したいプログラム
//}
var licence_flag = 0;  //次の条件分で使う為の下準備をしてる
var now = 14;

if (licence_flag == 1) {
    console.log ("車を運転できました")
}else if (now>22){
    console.log("電車で帰れます");
}
else{
    console.log("免許がないので運転できません");
}

var limit = 10;
var getup = 8 ;
if (limit<getup) {
    console.log("遅刻です");
}
// if (limit<getup) {
//     console.log("遅刻です")
// }

// } else if (limit==getup){
//     console.log("ギリギリセーフ!");
// } else {
//     console.log("よくがんばりました");
// 



// 1-20までの数字をコンソールに出力してください 繰り返し分
// for (初期値;条件式;増減式){
//     実行したいプログラム;
// }
for (var i=1;i<=20;i++){
    console.log(i);
}
// var i=1
// i<=20            //1 <=20  T
// i++               //i = 1 +1
// console.log(i);  //1
// i<=20  //2  <=20
// i++  //i = 2+1
// console.log(i)  //2



for (var i=0;i<=25;i++){
    console.log(i+"無駄");
}

for (var i=0;i<=25;i++){
    console.log("無駄");
}

// 変数 =データが入ってる箱
//　関数= 命令分がまとめて入ってる箱

// function greet (){
//     console.log("こんにちは");
//     console.log("hello");
// }
// console.log(greet());

function greet (user_name){
    var message = user_name + "さんこんにちは";
    console.log(message);

}
console.log(greet("にんじゃわんこ"));