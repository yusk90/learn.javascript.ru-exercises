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

var languageName = prompt('Каково «официальное» название JavaScript?');
if (languageName == 'EcmaScript') {
	alert('Верно!');
} else {
	alert('Не знаете? «EcmaScript»!');
}
