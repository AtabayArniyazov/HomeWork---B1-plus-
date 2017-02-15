"use strict";

var year = Number(prompt("Напишите год"));

while((isNaN(year)) === true || !year) {
	year = Number(prompt("Напишите год корректно!"));
}

function getCentury(argument) {
	return Math.ceil(argument / 100);
}

alert(year + " год - " + getCentury(year) + " век.");