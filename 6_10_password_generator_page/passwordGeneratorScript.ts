'use strict';
//
//
//

// Считываем кнопку сгенерировать
const btnPasswordGenerator: HTMLElement | null = document.getElementById(
  'btnPasswordGenerator'
);
// Считываем вывод пароля
const outputPassword: HTMLElement | null =
  document.getElementById('outputPassword');
// Считываем инпут диапазона
const inputRange: HTMLElement | null = document.getElementById('inputRange');
// Считываем элемент формы вывода длины пароля
const labelRangeNumber: HTMLElement | null =
  document.getElementById('labelRangeNumber');

/*если не добавить тип для this - ключевого слова 
в качестве первого параметра в функции, то выдаст ошибку

"this' implicitly has type 'any' because it does not 
have a type annotation".

поэтому добавляем в функции (this: any) в качестве первого параметра 
*/
// Функция устанавливает длину пароля
function setPasswordLength(this: any): void {
  if (labelRangeNumber !== null) {
    labelRangeNumber.innerHTML = this.value;
  }
}

// Функция возвращает случайное число
function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * max - min + 1) + min;
}

// Функция генерирует пароль
function generatePassword() {
  // в переменную result накапливаем результат в цикле
  let result = '';
  /*строка с случайными символами из которой с помощью 
    функции getRandom() в переменную result записывается пароль
    с указанным числом символов*/
  let str: string = `0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!"№;%:?*()_+`;

  /* Количество случайных символов, т.е. сколько случайных символов нам 
    нужно вывести, такое значение и задаем переменной numberOfCharacters*/

  if (labelRangeNumber !== null) {
    let numberOfCharacters: number = Number(labelRangeNumber.innerHTML);

    for (let i = 0; i < numberOfCharacters; i++) {
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
