'use strict';
//
//
//
// Считываем кнопку сгенерировать
var btnPasswordGenerator = document.getElementById('btnPasswordGenerator');
// Считываем вывод пароля
var outputPassword = document.getElementById('outputPassword');
// Считываем инпут диапазона
var inputRange = document.getElementById('inputRange');
// Считываем элемент формы вывода длины пароля
var labelRangeNumber = document.getElementById('labelRangeNumber');
/*если не добавить тип для this - ключевого слова
в качестве первого параметра в функции, то выдаст ошибку

"this' implicitly has type 'any' because it does not
have a type annotation".

поэтому добавляем в функции (this: any) в качестве первого параметра
*/
// Функция устанавливает длину пароля
function setPasswordLength() {
    if (labelRangeNumber !== null) {
        labelRangeNumber.innerHTML = this.value;
    }
}
// Функция возвращает случайное число
function getRandom(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
}
// Функция генерирует пароль
function generatePassword() {
    // в переменную result накапливаем результат в цикле
    var result = '';
    /*строка с случайными символами из которой с помощью
      функции getRandom() в переменную result записывается пароль
      с указанным числом символов*/
    var str = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!\"\u2116;%:?*()_+";
    /* Количество случайных символов, т.е. сколько случайных символов нам
      нужно вывести, такое значение и задаем переменной numberOfCharacters*/
    if (labelRangeNumber !== null) {
        var numberOfCharacters = Number(labelRangeNumber.innerHTML);
        for (var i = 0; i < numberOfCharacters; i++) {
            result += str[getRandom(0, str.length - 1)];
            // Проверяем
            // console.log(result, i);
        }
    }
    // Выводим результат на экран
    if (outputPassword !== null) {
        outputPassword.innerHTML = result;
    }
}
/*
Метод addEventListener - добавляет обработчик события к указанному элементу и
запустить выполнение программы при совершении заданного действия
*/
if (inputRange !== null && btnPasswordGenerator !== null) {
    inputRange.addEventListener('input', setPasswordLength);
    btnPasswordGenerator.addEventListener('click', generatePassword);
}
