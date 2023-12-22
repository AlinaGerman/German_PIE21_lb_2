alert('Второе задание');
var number=Number(prompt('Введите число',''));
if (number>0){
    number+=1;
} else if (number<0){
    number-=2;
} else if (number==0){
    number=10;
}
alert('Полученное число: '+String(number));