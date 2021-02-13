let name = "test";
var sub  = "js";

console.log(name + sub);

let result = "";
var i = 0;
do{
    i++;
    if(i%2==0)
    result = result +i;
}while(i<10)
console.log(result);

var pattern = "";
for(var i=1 ;i<=10;i++){
    for (var j= 1 ; j<=1;j++){
    pattern += "*";
    }
    console.log(pattern);
    //pattern = "";
}