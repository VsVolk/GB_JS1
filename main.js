
//Вывести простые числа
var i=1;
while (i<=100) {
i++;
for(var j=2; j<=i; j++){
    if (i%j == 0)
    break;
}
if(j==i)
console.log(i);
}

//стоимость корзины
let arr = [
    24, 49.8, 
    60.6, 37.3,
     58, 25.5]

function countBasketPrice (array) {
    var sum=0;
    for(var i=0;i<arr.length;i++) {
    sum = sum + parseInt(arr[i]);
    }
    console.log(sum);
}

countBasketPrice(arr);

// вывод 0-9 не используя тело цикла
for (var i = 0; i<10; console.log(i++)) {

}

//Ёлочка
for (let x = "x"; x.length<=20; x+="x") {
    console.log(x);
}