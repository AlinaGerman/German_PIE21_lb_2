alert('Вычисление значении функции с помощью оператора switch');
var x=Number(prompt('Введите число', ''));
var a=2.73;
var b=1.68;
var y='Неизвестно';
switch (x){
    case -2:
        y=Math.sin(Math.log(Math.abs(x)));
        break;
    case 3:
        y=(4*x+b)**2;
        break;
    case 5:
        y=1/(x**2+a**2);
        break;  
}
alert('y = '+String(y));