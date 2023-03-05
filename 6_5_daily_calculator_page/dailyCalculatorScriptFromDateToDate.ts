'use strict';
//
//
//
// Считываем элемент input даты 'С которой рассчитать'
const dateInputOne: HTMLElement | null =
  document.getElementById('inputDateWith');
// Считываем элемент input даты 'До которой рассчитать'
const dateInputTwo: HTMLElement | null =
  document.getElementById('inputDateBefore');

// Считываем кнопку рассчитать
const buttonСalculate: HTMLElement | null =
  document.getElementById('btnСalculation');
// Считываем форму вывода строки
const formOutputs: HTMLElement | null = document.getElementById('formOutput');
// Считываем форму вывода картинок
const formOutputsImg: HTMLElement | null =
  document.getElementById('formOutputImg');
//
//
//
// После расчета, если выполняется условие, включается Активный класс
// Неактивный класс CSS (заглушка)
const closedClass: string = 'outputInactive';
// Активные классы CSS
// Если выполняется Условие №1
const requirementOne: string = 'form-control__requirementOne';
const openClassOne: string = 'outputActiveOne';
// Если выполняется Условие №2
const formControl: string = 'form-control';
const openClassTwo: string = 'outputActiveTwo';
const openClassTwoImg: string = 'outputActiveTwoImg';
// Если выполняется Условие №3
const openClassThree: string = 'outputActiveThree';
const openClassThreeImg: string = 'outputActiveThreeImg';
// Если выполняется Условие №4
const openClassFour: string = 'outputActiveFour';
//
//
/*Если функции, ничего не возвращают. В этом случае в качестве результата 
им указывают ключевое слово void. */
// Функция вычисляет разницу в днях между датами
function calculateTheDifferenceBetweenDates(): void {
  // Получим значение input даты 'С которой рассчитать'
  const dateInputOneValue = (<HTMLInputElement>(
    document.getElementById('inputDateWith')
  )).value;
  // Получим значение input даты 'До которой рассчитать'
  const dateInputTwoValue = (<HTMLInputElement>(
    document.getElementById('inputDateBefore')
  )).value;
  // Date.parse()Метод анализирует строковое представление даты
  // и возвращает количество миллисекунд с 1 января 1970 года.
  // В одном дне - 86400000мс
  // Преобразуем к дням и записываем в переменные
  let dateWith = Date.parse(dateInputOneValue) / 86400000;
  // Проверяем что приходит
  // console.log(dateWith);
  let dateBefore = Date.parse(dateInputTwoValue) / 86400000;
  // Проверяем что приходит
  // console.log(dateBefore);
  // Вычислим разницу дат
  let diff: number = dateBefore - dateWith;

  // Проверим входящие элементы на null
  if (formOutputsImg && formOutputs && dateInputOne && dateInputTwo !== null) {
    // Запишем условия
    // Условие №1
    if (isNaN(diff)) {
      formOutputs.setAttribute('class', openClassOne);
      dateInputOne.setAttribute('class', requirementOne);
      dateInputTwo.setAttribute('class', requirementOne);
      formOutputs.innerHTML = '↑ Заполните поля ввода ↑';
      // Условие №2
    } else if (diff < 0) {
      formOutputsImg.setAttribute('class', openClassTwoImg);
      formOutputs.setAttribute('class', openClassTwo);
      dateInputOne.setAttribute('class', formControl);
      dateInputTwo.setAttribute('class', formControl);
      // Math.abs()-Функция возвращает абсолютное значение числа(убераем знак минус).
      // Текст вывода результата на экран (количество дней)
      let numberOfDays: string = `Было ${Math.abs(diff)} дн. назад`;
      formOutputs.innerHTML = numberOfDays;
      // Условие №3
    } else if (diff > 0) {
      formOutputsImg.setAttribute('class', openClassThreeImg);
      formOutputs.setAttribute('class', openClassThree);
      dateInputOne.setAttribute('class', formControl);
      dateInputTwo.setAttribute('class', formControl);

      formOutputs.innerHTML = `Будет через ${Math.abs(diff)} дн.`;
      // Условие №4
    } else if (dateBefore === dateWith) {
      formOutputs.setAttribute('class', openClassFour);
      formOutputs.innerHTML = `Время для счастья – сейчас!`;
    }
  }
}
// Проверим входящие элементы на null
if (
  buttonСalculate &&
  formOutputs &&
  formOutputsImg &&
  dateInputOne &&
  dateInputTwo !== null
) {
  // Вешаем событие на кнопку
  buttonСalculate.addEventListener('click', calculateTheDifferenceBetweenDates);
  // Вешаем событие blur вызывается когда элемент теряет фокус.
  buttonСalculate.addEventListener('blur', function () {
    // setAttribute()Метод устанавливает новое значение для атрибута
    formOutputs.setAttribute('class', closedClass);
    formOutputsImg.setAttribute('class', closedClass);
    dateInputOne.setAttribute('class', formControl);
    dateInputTwo.setAttribute('class', formControl);
  });
}
