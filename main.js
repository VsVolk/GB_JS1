/* //стоимость корзины
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


//функция, преобразующую число в объект.
let number = prompt ('Введите трехзначное число: ')
function CreateObject (number) {
    if (number<=999) {
    this.s =  Math.floor(number/100%10);
    this.d = Math.floor(number/10%10);
    this.e = number%10;
    } else 
    console.log("Вы ввели не трехзначное число");
} */

/* console.log(new CreateObject(number)); */

/* let hockeyProduct = {
    vendorCode:,
    price: ,
    quantity: ,
    payMethod: ,
    delivery: ,
    productType = {
        skates: ,
        helmets: ,
        defense: ,
        hockeySticks: ,
        thermalUnderwear: ,
    }
} */

let stics = {
    name: "ccm",
    height: 150,
    price: 15600,
    flex: 76,
    type: "left",
}

let shields = {
    name: "bauer",
    size: 36,
    price: 10400,
}

function countBasketPrice () {
    let sum = stics.price + shields.price
    console.log(sum); 
}
countBasketPrice();