console.log(1<2)

// 比較演算の例

var x = 2;
var y = 3;

console.log(x==y);
console.log(x===y);
console.log(x<y);
console.log(x<=y);
console.log(x>y);
console.log(x>=y);
console.log(x!=y);



var licence_flag = 0;
var now = 14;
if (licence_flag == 1){
    console.log("車を運転できました");
}else if(now=18){
    console.log("電車で帰ります");
}else{
    console.log("運転できません");
}



var limit = 11;
var getup = 11;
if (limit<getup){
    console.log("遅刻");
}else if (limit==getup){
    console.log("ギリ");
}


// for 繰り返し分
for (var i=1;i<=20;i++){
    console.log(i);
}

for (var i=0;i<=25;i++){
    console.log(i+"無駄");
}


function gteet(){
    console.log("hello");
}
console.log(greet());