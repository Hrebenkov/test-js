function splitString(stringToSplit, separator) {
	var arrayOfStrings = stringToSplit.split(separator);
	console.log(arrayOfStrings);

  console.log('Оригинальная строка: "' + stringToSplit + '"');
  console.log('Разделитель: "' + separator + '"');
  console.log(
    "Массив содержит " +
      arrayOfStrings.length +
      " элементов: " +
      arrayOfStrings.join(" / "),
  );
}

// Строчка из «Бури» Шекспира. Перевод Михаила Донского.
var tempestString = "И как хорош@тот@новый мир, где есть такие люди!";
var monthString = "Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек";

var space = " ";
var comma = ",";
var stick = "@";

splitString(tempestString, space);
splitString(tempestString, stick);
splitString(monthString, comma);