/*
* Сделайте страницу, которая выводит «Я – JavaScript!».
*/

//alert("Я – JavaScript!");

/*
 * Работа с переменными
 * */

/*var admin;
var name;
name = 'Василий';
admin = name;
alert(admin);*/

/*
* Объявление переменных
* */

/*var ourPlanetName = 'Земля';
var userName = 'Петя';*/

/*
* Простая страница
* */

/*var userName = prompt('Введите Ваше имя:');
alert('Здравствуйте, ' + userName + '!');*/

/*
* Проверка стандарта
* */

/*var languageName = prompt('Каково «официальное» название JavaScript?');
if (languageName == 'EcmaScript') {
    alert('Верно!');
} else {
    alert('Не знаете? «EcmaScript»!');
}*/

/*
* Получить знак числа
* */

/*var inputNumber = prompt('Введите число:');
if (inputNumber > 0) {
    alert(1);
} else if (inputNumber < 0) {
    alert(-1);
} else {
    alert(0);
}*/

/*
* Проверка логина
* */

/*var userName = prompt('Кто пришёл?');

if (userName == 'Админ') {
    var userPassword = prompt('Пароль?');
    if (userPassword == 'Чёрный Властелин') {
        alert('Добро пожаловать!');
    } else if (userPassword == null) {
        alert('Вход отменён');
    } else {
        alert('Я вас не знаю');
    }
} else if (userName == null) {
    alert('Вход отменён');
} else {
    alert('Я вас не знаю');
}*/

/*
* Перепишите 'if' в '?'
* */

/*var inputFirstNumber  = prompt('Введите первое число:');
var inputSecondNumber = prompt('Введите второе число:');
if (inputFirstNumber != '' && inputSecondNumber != '') {
    var parsedFirstNumber = parseInt(inputFirstNumber, 10);
    var parsedSecondNumber = parseInt(inputSecondNumber, 10);
    result = (parsedFirstNumber + parsedSecondNumber < 4) ? 'Мало' : 'Много';
    alert(result);
}*/

/*
* Перепишите 'if..else' в '?'
* */

/*var login = prompt('Введите имя:');
(login == 'Вася')     ? alert('Привет') :
(login == 'Директор') ? alert('Здравствуйте') :
(login == '')         ? alert('Нет логина') :
alert('');*/

/*
* Проверка if внутри диапазона
* */

/*var age = prompt('Введите число между 14 и 90 включительно:');

if (age != '' && !isNaN(age) && age != null) {
    var parsedAge = parseInt(age, 10);

    if (parsedAge >= 14 && parsedAge <= 90) {
        alert('Число находится в заданном диапазоне');
    } else {
        alert('Число НЕ находится в заданном диапазоне');
    }
}*/

/*
* Проверка if вне диапазона вариант 1
* */

/*var age = prompt('Введите число вне диапазона 14 и 90 включительно:');

if (age != '' && !isNaN(age) && age != null) {
    var parsedAge = parseInt(age, 10);

    if (!(parsedAge >= 14 && parsedAge <= 90)) {
        alert('Число НЕ находится в заданном диапазоне');
    } else {
        alert('Число находится в заданном диапазоне');
    }
}*/

/*
 * Проверка if вне диапазона вариант 2
 * */

/*var age = prompt('Введите число вне диапазона 14 и 90 включительно:');

if (age != '' && !isNaN(age) && age != null) {
    var parsedAge = parseInt(age, 10);

    if (parsedAge < 14 || parsedAge > 90) {
        alert('Число НЕ находится в заданном диапазоне');
    } else {
        alert('Число находится в заданном диапазоне');
    }
}*/

/*
* Выведите чётные числа
* */

/*for (var i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}*/

/*
* Замените for на while
* */

/*var i = 2;

while (i <= 10) {
    if (i % 2 == 0) {
        alert(i);
    }
    i++;
}*/

/*
* Повторять цикл, пока ввод неверен
* */

/*do {
    var userInputNumber = prompt('Введите число больше 100:');
} while (userInputNumber <= 100 && userInputNumber != null);*/

/*
* Вывести простые числа - решение подсмотрел на stackoverflow
* */

/*for (var n = 2; n <= 10; n++) {
    //console.log('n = ' + n);
    for (var j = 2; j <= n; j++) {
        //console.log('j = ' + j);
        if (n % j == 0) {
            //console.log('остаток от деления: n = ' + n + ' и j = ' + j + ' = 0');
            break;
        }
    }
    if (j == n) {
        //console.log('j = ' + j + ' == n = ' + n);
        console.log(n);
    }
}*/

/*
* Напишите «if», аналогичный «switch»
* */

/*var browser = prompt('Введите Ваш браузер:');

if (browser == 'IE') {
    alert( 'О, да у вас IE!' );
} else if (
    browser == 'Chrome'  ||
    browser == 'Firefox' ||
    browser == 'Safari'  ||
    browser == 'Opera') {
    alert('Да, и эти браузеры мы поддерживаем');
} else {
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}*/

/*
* Переписать if'ы в switch
* */

/*var inputNumber = parseInt(prompt('a?'), 10);

switch (inputNumber) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        alert('Не угадали.');
}*/

/*
* Перепишите функцию, используя оператор '?'
* */

/*var userAge = parseInt(prompt('Введите Ваш возраст:'), 10);
checkAge(userAge);

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}*/

/*
 * Перепишите функцию, используя оператор '?'
 * */

/*var userAge = parseInt(prompt('Введите Ваш возраст:'), 10);
checkAge(userAge);

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}*/

/*
* Функция min
* */

/*var firstNumber = parseInt(prompt('Введите первое число:'), 10);
var secondNumber = parseInt(prompt('Введите второе число:'), 10);
min(firstNumber, secondNumber);

function min(a, b) {
    if (a > b) {
        alert(b + ' меньше, чем ' + a);
    } else if (a == b) {
        alert('Числа равны');
    } else {
        alert(a + ' меньше, чем ' + b);
    }
}*/

/*
* Функция pow(x,n)
* */

/*var number = parseInt(prompt('Введите число, которое необходимо ' +
                              'возвести в степень'), 10);
var powerOfNumber = parseInt(prompt('Введите степень числа:'), 10);
pow(number, powerOfNumber);

function pow(number, powerOfNumber) {
    var result = number;
    for (var i = 1; i < powerOfNumber; i++) {
        result *= number;
    }
    alert(result);
}*/

/*
* Вычислить сумму чисел до данного с использованием цикла
* */

/*var userInput = Number(prompt('Введите число:'));
var resultSum = userInput;

function sumTo(n) {
    for (var i = 1; i < n; i++) {
        //console.log('i = ' + i);
        resultSum += i;
        //console.log('resultSum = ' + resultSum);
    }
    //console.log('end resultSum = ' + resultSum);
    return resultSum;
}

alert(sumTo(userInput));*/

/*
* Вычислить сумму чисел до данного с использованием формулы
* */

/*var userInput = Number(prompt('Введите число:'));

function sumTo(userInput) {
    return (1 + userInput) * userInput / 2;
}

alert(sumTo(userInput));*/

/*
 * Вычислить сумму чисел до данного с использованием рекурсии
 * */

/*var userInput = Number(prompt('Введите число:'));

function sumTo(userInput) {
    if (userInput > 1) {
        return userInput + sumTo(userInput - 1);
    } else {
        return userInput;
    }
}

alert(sumTo(userInput));*/

/*
 * Вычислить факториал
 * */

/*var userInput = Number(prompt('Введите число:'));

function factorial(userInput) {
    if (userInput > 1) {
        return userInput * factorial(userInput - 1);
    } else {
        return userInput;
    }
}

alert(factorial(userInput));*/

/*
* Интерфейс суммы
* */

/*var firstNumberFromPrompt = Number(prompt('Введите первое число:'));
var secondNumberFromPrompt = Number(prompt('Введите второе число:'));

function addTwoNumbers(firstNumber, secondNumber) {
    var result = firstNumber + secondNumber;
    alert('Сумма равна: ' + result);
}

addTwoNumbers(firstNumberFromPrompt, secondNumberFromPrompt);*/

/*
* Как получить дробную часть числа?
* */

// Принимаем ввод из prompt -> приводим его к числу ->
// получааем абсолютное значение -> переводим обратно в строку
/*var numberFromPrompt = Math.abs(prompt('Введите число:')).toString();

function getDecimal() {
    if (numberFromPrompt == 0) {
        return alert(0);
    }
    // Переворачиваем строку numberFromPrompt
    var reversedNumberFromPrompt = '';
    for (var i = numberFromPrompt.length - 1; i >= 0; i--) {
        reversedNumberFromPrompt += numberFromPrompt.charAt(i);
    }
    // Обрезаем строку до точки
    var reversedFractionalPart = parseInt(Number(reversedNumberFromPrompt)).toString();
    // Переворачиваем дробную часть
    var fractionalPart = '';
    for (var j = reversedFractionalPart.length - 1; j >= 0; j--) {
        fractionalPart += reversedFractionalPart.charAt(j);
    }
    alert('0.' + fractionalPart);
}

getDecimal();*/

/*
* Формула Бине
* */

/*var numberFromPrompt = Number(prompt('Введите число:'));

function fibBinet() {
    var f = (1 + Math.sqrt(5)) / 2;
    var fN = Math.pow(f, numberFromPrompt) / Math.sqrt(5);
    alert(fN);
}

fibBinet();*/

/*
* Случайное число из интервала (0, max)
* */

/*var numberFromPrompt = Number(prompt('Введите максимальное число:'));

function getRandomNumber() {
    alert(Math.random() * numberFromPrompt);
}

getRandomNumber();*/

/*
* Случайное число из интервала (min, max)
* */

/*var minNumberFromPrompt = Number(prompt('Введите минимальное число:'));
var maxNumberFromPrompt = Number(prompt('Введите максимальное число:'));

function getRandomNumber() {
    alert(Math.random() * (maxNumberFromPrompt - minNumberFromPrompt)
                            + minNumberFromPrompt);
}

getRandomNumber();*/

/*
* Случайное целое от min до max
* */

/*function getRandomInteger() {
    var minNumberFromPrompt = Number(prompt('Введите минимальное число:'));
    var maxNumberFromPrompt = Number(prompt('Введите максимальное число:'));
    for (var i = 0; i <= 100; i++) {
        var randomFloatNumber = Math.random() * (maxNumberFromPrompt -
            minNumberFromPrompt + 1) + minNumberFromPrompt;
        console.log(Math.floor(randomFloatNumber));
    }
}

getRandomInteger();*/

/*
* Сделать первый символ заглавным
* */

var stringFromPrompt = prompt('Ввести строку:');

function upperCaseFirstLetter() {
    var newStr = stringFromPrompt.charAt(0).toUpperCase();
    for (var i = 1; i < stringFromPrompt.length; i++) {
        newStr += stringFromPrompt.charAt(i);
    }
    alert(newStr);
}

upperCaseFirstLetter();
