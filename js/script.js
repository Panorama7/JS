// 1 level
// Здание 1
function level1_1(){
  let a, b, d, c; 
  a = 10;
  b = 20;
  d = a - b;
  c = c = d;
  let res;
  res = d + c;
  alert(`result: ${res}`);
  console.log(res); 
}

// Задание 2
function level1_2(){
  let num = 100;
  num += 7;
  num -= 18;
  num *= 10;
  num /= 15;
  ++ num;
  -- num;
  alert(`Второе задание в коде`);
}
// Задание 3
function level1_3(){
  let age = prompt("Введите свой возраст");
  if(age >= 18){
    alert("Вы совершеннолетний")
  } else {
    alert("Приходите чуть позже")
  }
}
// Задание 4
function level1_4(){
  let number = prompt("Введите число");
  alert(`Ваше число в квадрате ${number * number}`)
}
// 2 level
// Задание 1
function level2_1(){
  let month = prompt("Введие номер месяца")
  if(month == 1 || month == 2 || month == 12){
    alert("Зима")
  } else if(month == 3 || month == 4 || month == 5){
    alert("Весна")
  } else if(month == 6 || month == 7 || month == 8){
    alert("Лето")
  } else if(month == 9 || month == 10 || month == 11){
    alert("Осень")
  } else {
    alert("Вы ввели лабуду, я не знаю что с этим делать")
  }
}
// Задание 2
function level2_2(){
  let a = +prompt("Введите число а")
  let b = +prompt("Введите число b")
  if(a <= 1 && b > 5){
    alert(`Сумма: ${a + b}`)
  } else {
    alert(`Разница: ${a - b}`)
  }
}
// Задание 3
function level2_3(){
  let count = prompt("Количевство товара")
  let price = prompt("Цена товара")
  let sum = count * price;
  if(sum > 800){
    alert(`Цена со скидкой 3%: ${sum - (sum * 0.03)}Грн`)
  } else if(sum > 500){
    alert(`Цена со скидкой 2%: ${sum - (sum * 0.02)}Грн`)
  } else {
    alert("Такой цены на товар не существует")
  }
}
// 3 level
// Задание 1
function level3_1(){

}