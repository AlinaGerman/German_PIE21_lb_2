alert('Вычисление значении функции');
var x=Number(prompt('Введите х', ''));
var a=2.73;
var b=1.68;
if (x<=1){
    var y=Math.sin(Math.log(Math.abs(x)));
} else if (1<x && x<=3){
    var y=4*x+b**2;
} else if (x>3){
    var y=1/(x**2+a**2);
}
alert('y = '+String(y));