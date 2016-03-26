/*
* Сделайте страницу, которая выводит «Я – JavaScript!».
*/

//alert("Я – JavaScript!");

/*
 * Работа с переменными
 * */

/*var admin,
    name;
name = 'Василий';
admin = name;
alert(admin);*/

/*
* Объявление переменных
* */

/*var ourPlanetName = 'Земля',
    userName = 'Петя';*/

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

/*var userName = prompt('Кто пришёл?'),
    userPassword;

if (userName == 'Админ') {
    userPassword = prompt('Пароль?');
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

// result = (a + b < 4) ? 'Мало' : 'Много';

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

/*var age = prompt('Введите число между 14 и 90 включительно:'),
    parsedAge;

if (age != '' && !isNaN(age) && age != null) {
    parsedAge = parseInt(age, 10);

    if (parsedAge >= 14 && parsedAge <= 90) {
        alert('Число находится в заданном диапазоне');
    } else {
        alert('Число НЕ находится в заданном диапазоне');
    }
}*/

/*
* Проверка if вне диапазона вариант 1
* */

/*var age = prompt('Введите число вне диапазона 14 и 90 включительно:'),
    parsedAge;

if (age != '' && !isNaN(age) && age != null) {
    parsedAge = parseInt(age, 10);

    if (!(parsedAge >= 14 && parsedAge <= 90)) {
        alert('Число НЕ находится в заданном диапазоне');
    } else {
        alert('Число находится в заданном диапазоне');
    }
}*/

/*
 * Проверка if вне диапазона вариант 2
 * */

/*var age = prompt('Введите число вне диапазона 14 и 90 включительно:'),
    parsedAge;

if (age != '' && !isNaN(age) && age != null) {
    parsedAge = parseInt(age, 10);

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

/*var i = 0;

while (i < 3) {
    alert('номер ' + i + '!' );
    i++;
}*/

/*
* Повторять цикл, пока ввод неверен
* */

/*var userInputNumber;

do {
    userInputNumber = prompt('Введите число больше 100:');
} while (userInputNumber <= 100 && userInputNumber != null);*/

/*
* Вывести простые числа
* */

/*var n, j;

for (n = 2; n <= 10; n++) {
    for (j = 2; j <= n; j++) {
        if (n % j == 0) {
            break;
        }
    }
    if (j == n) {
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

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

checkAge(userAge);*/

/*
 * Перепишите функцию, используя оператор '||'
 * */

/*var userAge = parseInt(prompt('Введите Ваш возраст:'), 10);

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

checkAge(userAge);*/

/*
* Функция min
* */

/*var firstNumber = parseInt(prompt('Введите первое число:'), 10),
    secondNumber = parseInt(prompt('Введите второе число:'), 10);

function min(a, b) {
    if (a > b) {
        alert(b + ' меньше, чем ' + a);
    } else if (a == b) {
        alert('Числа равны');
    } else {
        alert(a + ' меньше, чем ' + b);
    }
}

min(firstNumber, secondNumber);*/

/*
* Функция pow(x,n)
* */

/*var number = parseInt(prompt('Введите число, которое необходимо возвести в степень'), 10),
    powerOfNumber = parseInt(prompt('Введите степень числа:'), 10);

function pow(number, powerOfNumber) {
    var result,
        i;

    if (number <= 0) {
        alert('Функция поддерживает только натуральные значения');
        return;
    }
    result = number;
    for (i = 1; i < powerOfNumber; i++) {
        result *= number;
    }
    alert(result);
}

pow(number, powerOfNumber);*/

/*
* Вычислить сумму чисел до данного с использованием цикла
* */

/*var userInput = Number(prompt('Введите число:'));

function sumTo(n) {
    var resultSum = 0,
        i;

    for (i = 1; i <= n; i++) {
        resultSum += i;
    }
    return resultSum;
}

alert(sumTo(userInput));*/

/*
* Вычислить сумму чисел до данного с использованием формулы
* */

/*var userInput = Number(prompt('Введите число:'));

function sumTo(n) {
    return (1 + n) * n / 2;
}

alert(sumTo(userInput));*/

/*
 * Вычислить сумму чисел до данного с использованием рекурсии
 * */

/*var userInput = Number(prompt('Введите число:'));

function sumTo(n) {
    if (n > 1) {
        return n + sumTo(n - 1);
    } else {
        return n;
    }
}

alert(sumTo(userInput));*/

/*
 * Вычислить факториал
 * */

/*var userInput = Number(prompt('Введите число:'));

function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    } else {
        return n;
    }
}

alert(factorial(userInput));*/

/*
* Числа Фибоначчи
* */

/*function fib(n) {
    var a = 1,
        b = 1,
        c;
        
    for (var i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}*/

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

/*var stringFromPrompt = prompt('Ввести строку:');

function upperCaseFirstLetter() {
    var newStr = stringFromPrompt.charAt(0).toUpperCase();
    for (var i = 1; i < stringFromPrompt.length; i++) {
        newStr += stringFromPrompt.charAt(i);
    }
    alert(newStr);
}

upperCaseFirstLetter();*/

/*
* Проверьте спам
* */

/*var stringFromPrompt = prompt('Ввести строку для проверки:');

function checkSpam() {
    var newStr = stringFromPrompt.toLowerCase();

    if (!(newStr.indexOf('viagra') == -1)) {
        alert('спам: viagra');
    } else if (!(newStr.indexOf('xxx') == -1)) {
        alert('спам: xxx');
    } else {
        alert('Спам не найден');
    }
}

checkSpam();*/

/*
* Усечение строки
* */

/*var stringFromPrompt = prompt('Введите строку:');

function truncate(str, maxLength) {
    if (stringFromPrompt.length >= 20) {
        alert(str.slice(0, maxLength - 3) + '...');
    } else {
        alert(stringFromPrompt);
    }
}

truncate(stringFromPrompt, 20);*/

/*
* Выделить число
* */

/*var stringFromPrompt = prompt('Введите строку:');

function extractCurrencyValue(str) {
    var currencyValue = Number(str.slice(1));
    alert(currencyValue);
}

extractCurrencyValue(stringFromPrompt);*/


/*
* Первый объект
* */

/*var user = {};
user.name = 'Вася';
user.surname = 'Петров';
user.name = 'Сергей';
delete user.name;*/

/*
* Определите, пуст ли объект
* */

/*function isEmpty(obj) {
    var count = 0;
    for (var propName in obj) {
        count++;
    }
    if (count == 0) {
        return 'Объект пуст';
    } else {
        return 'Объект имеет свойства';
    }
}

var schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) );
*/

/*
* Сумма свойств
* */

/*var salaries = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
};

//salaries.Дима = 500;

function salariesSum(obj) {
    var sum = 0;
    for (var propName in obj) {
        sum += obj[propName];
    }
    alert(sum);
}

salariesSum(salaries);*/

/*
* Свойство с наибольшим значением
* */

/*var salaries = {
    'Вася': 200,
    'Петя': 300,
    'Даша': 550
};

function objectPropertyMaxValue(obj) {
    if (isEmpty(obj)) {
        return alert('Нет сотрудников.');
    }
    var maxValue = 0;
    for (var propName in obj) {
        if (obj[propName] > maxValue) {
            maxValue = obj[propName];
            var maxValueProperty = propName;
        }
    }
    alert('Наибольшая зарплата у сотрудника: ' + maxValueProperty);
}

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

objectPropertyMaxValue(salaries);*/

/*
* Умножьте численные свойства на 2
* */

/*var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj) {
    for (var propName in obj) {
        if (isNumeric(obj[propName])) {
            obj[propName] *= 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);*/

/*
* Получить последний элемент массива
* */

/*function getRandomNumber() {
    return (Math.random() * 10).toFixed();
}

function createArray() {
    var arr = [],
        i;
    for (i = 0; i <= getRandomNumber(); i++) {
        arr.push(i + 1);
    }
    return arr;
}

function getArraysLastElement(arr) {
    return arr[arr.length - 1];
}

var myArray = createArray();
console.log(myArray);
console.log(getArraysLastElement(myArray));*/

/*
* Создание массива
* */

/*var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');*/

/*
* Получить случайное значение из массива
* */

/*var arr = ['Яблоко', 'Апельсин', 'Груша', 'Лимон'],
    max = arr.length - 1,
    min = 0,
    rand;

rand = min + Math.floor(Math.random() * (max + 1 - min));

function getRandomElementOfArray(arr) {
    return arr[rand];
}

alert(getRandomElementOfArray(arr));*/

/*
* Создайте калькулятор для введённых значений
* */

/*var numberFromPrompt,
    arrayForPromptNumbers = [];

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function getArrayFromPromptNumbers() {
    do {
        numberFromPrompt = prompt('Введите число:');
        if (isNumeric(numberFromPrompt)) {
            arrayForPromptNumbers.push(numberFromPrompt);
        }
    } while (isNumeric(numberFromPrompt) && !(numberFromPrompt == null));

    return arrayForPromptNumbers;
}

function getSumOfNumbers() {
    var sum = 0,
        i;

    for (i = 0; i < arrayForPromptNumbers.length; i++) {
        sum += Number(arrayForPromptNumbers[i]);
    }

    return sum;
}

console.log(getArrayFromPromptNumbers());
console.log(getSumOfNumbers());*/

/*
* Поиск в массиве
* */

var arr = ['test', 2, 1.5, false];

function findElementInArray(arr, value) {
    var i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }

    return -1;
}

console.log(findElementInArray(arr, 'test'));
console.log(findElementInArray(arr, 2));
console.log(findElementInArray(arr, 1.5));
console.log(findElementInArray(arr, 0));
