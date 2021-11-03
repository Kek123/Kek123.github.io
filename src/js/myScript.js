"use strict"

let arrType = [
	["Сайт-визитка","Лэндинг","Интернет-магазин","Копоративный сайт", "Игровой портал"],
	["Динамический дизайн", "Обычный дизайн", "Уникальный дизайн"],
	["Адаптивный", "Неадаптивный"]
];

let arrCalc = [
	[
		[500,5],[700,7],[2000,10],[2231,14],[5000,20]
	],
	[
		[900,2],[300,1],[4000,5]
	],
	[
		[5000,5],[200,2]
	]
]

let indexTypeSite = prompt("Выберите тип сайта, написав нужную цифру: 0 - Сайт-визитка, 1 - Лэндинг, 2 - Интернет-магазин, 3 - Копоративный сайт, 4 - Игровой портал");
let indexTypeDesign = prompt("Выберите тип дизайна, написав нужную цифру: 0 - Динамический дизайн, 1 - Обычный дизайн, 2 - Уникальный дизайн");
let indexTypeAdapt = prompt("Выберите тип адаптивности: 0 - Адаптивный, 1 - Неадаптивный");
let price = 0;
let date = 0 ;

CalcPriceDate(indexTypeSite,indexTypeDesign,indexTypeAdapt);

function CalcPriceDate(indexTypeSite,indexTypeDesign,indexTypeAdapt){
	price = arrCalc[0][indexTypeSite][0] + arrCalc[1][indexTypeDesign][0] + arrCalc[2][indexTypeAdapt][0];
	date = arrCalc[0][indexTypeSite][1] + arrCalc[1][indexTypeDesign][1] + arrCalc[2][indexTypeAdapt][1];
}



alert("Цена сайта: " + price + ". Время выполнения: " + date + " (Время указано в днях)");

