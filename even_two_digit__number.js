alert('Проверка является ли число четным и двузначным');
var number=Number(prompt('Введите число',''));
if (number%2==0 && number>=10 && number<100){
    alert('Число '+String(number)+' является четным и двузначным');
} else {
    alert('Число '+String(number)+' не является четным и двузначным');
}