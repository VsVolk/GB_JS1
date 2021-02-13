
//особенности работы инкремента слева и справа
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);      

 //Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
console.log(x); // 5 
 
let a = prompt('Введите число a'), b = prompt('Введите число b');
if (a>0 && b>0) {
    let x=a-b;
    console.log(x);
} 
if (a,b<0) {
    let x=a-b;
    console.log(x);
}
if (a>0 && b<0 || a<0 && b>0) {
    let x=a+b;
    console.log(x);
} // почему происходит соединение a и b, а не их сумма
 

//Присвоить переменной а значение в промежутке [0..15].
//С помощью оператора switch организовать вывод чисел от a до 15
 a = +prompt ('Введите число от 1 до 15');
		switch (a) {
		case 1:
			alert ( 'Ваше число 1');			
		case 2:
			alert ( 'Ваше число 2');			
		case 3:
			alert ( 'Ваше число 3');		
		case 4:
			alert ( 'Ваше число 4');			
		case 5:
			alert ( 'Ваше число 5');		
		case 6:
			alert ( 'Ваше число 6');			
		case 7:
			alert ( 'Ваше число 7');			
		case 8:
			alert ( 'Ваше число 8');
		case 9:
			alert ( 'Ваше число 9');			
		case 10:
			alert ( 'Ваше число 10');			
		case 11:
			alert ( 'Ваше число 11');			
		case 12:
			alert ( 'Ваше число 12');			
		case 13:
			alert ( 'Ваше число 13');			
		case 14:
			alert ( 'Ваше число 14');			
		case 15:
			alert ( 'Ваше число 15');
			break;	
        }	
         
//Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно 		
//использовать оператор return. 
 	var a = 2;
	var b = 3;

	function plus(a, b) {
    	return a + b;
	}

	function minus(a, b) {
    	return a - b;
	}

	function div (a, b) {
    	return a / b;
	}

	function mult (a, b) {
    	return a + b;
    } 
    
    //Реализовать функцию с тремя параметрами: 
    //function mathOperation(arg1, arg2, operation), где arg1, arg2
     function mathOperation(arg1, arg2, operation){
        switch(operation){
                case 'сложение':
                    return arg1 + arg2;
                    break;
                case 'вычитание':
                    return arg1 - arg2;
                 break;
             case 'деление':
                           return arg1 / arg2;
                 break;
                case 'умножение':
                    return arg1 * arg2;
                 break;
           }
} 
//С помощью рекурсии организовать функцию возведения числа в степень.
//Формат: function power(val, pow), где val – заданное число, pow – степень.
function power(val, pow) {
    if (pow == 0)
      return 1;
    else
      return val * power(val, pow - 1);
  }
 console.log(power(2, 5)); //32