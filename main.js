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

var userName = prompt('Кто пришёл?');

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
}
