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

for (var i = 2; i <= 10; i++) {
	if (i % 2 == 0) {
		alert(i);
	}
}
