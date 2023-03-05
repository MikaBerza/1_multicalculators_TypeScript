'use strict';
//
//
//
// Считываем элемент input для введения кол-ва дней
const inputYear = document.getElementById('inputYear');
// Считываем кнопку расчитать
const buttonСalculateYear = document.getElementById('btnСalculationYear');
// Считываем форму вывода строки
const formOutputsYear = document.getElementById('formOutputYear');
// После расчета, если выполняется условие, включается Активный класс
// Неактивный класс CSS (заглушка)
const closedClassYear = 'outputInactiveYear';
// Активные классы CSS
// Если выполняется Условие №1 и №2
const openClassYearYes = 'outputActiveYearYes';
const openClassYearNo = 'outputActiveYearNo';
// Если выполняются остальные условие
const requirementYear = 'form-control__requirementOne';
const openClassErrorYear = 'outputActiveOne';
// После срабатывания события событие blur
const formControlYear = 'form-control';
// Функция определяет високосный год
function defineALeapYear() {
    // Получим значение введенное в input
    const inputYearValue = (document.getElementById('inputYear')).value;
    let year = Number(inputYearValue);
    let receivedDate = new Date(year, 2, 0);
    // Проверим входящие элементы на null
    if (formOutputsYear && inputYear !== null) {
        // Запишем условие №1
        if (receivedDate.getDate() === 29 &&
            inputYearValue.length <= 4 &&
            inputYearValue.length !== 0) {
            formOutputsYear.setAttribute('class', openClassYearYes);
            formOutputsYear.innerHTML = `Високосный`;
            // Запишем условие №2
        }
        else if (receivedDate.getDate() !== 29 &&
            inputYearValue.length <= 4 &&
            inputYearValue.length !== 0) {
            formOutputsYear.setAttribute('class', openClassYearNo);
            formOutputsYear.innerHTML = `НЕвисокосный`;
            // Запишем условие №3
        }
        else if (inputYearValue.length > 4) {
            formOutputsYear.setAttribute('class', openClassErrorYear);
            inputYear.setAttribute('class', requirementYear);
            formOutputsYear.innerHTML = '↑ Число года введено некорректно ↑';
            // Остальные условия
        }
    }
}
// Проверим входящие элементы на null
if (buttonСalculateYear && formOutputsYear && inputYear !== null) {
    buttonСalculateYear.addEventListener('click', defineALeapYear);
    // Вешаем событие blur вызывается когда элемент теряет фокус.
    buttonСalculateYear.addEventListener('blur', function () {
        // setAttribute()Метод устанавливает новое значение для атрибута
        formOutputsYear.setAttribute('class', closedClassYear);
        inputYear.setAttribute('class', formControlYear);
        /*
        Сделал тип any для переменной, потому что при такой записи -
        const inputYear: HTMLElement | null = document.getElementById('inputYear');
        inputYear.placeholder = 'гггг';
        выдавал ошибку: Property 'placeholder' does not exist on type 'HTMLElement'.(2339)!
        выдавал ошибку: Свойство 'placeholder' не существует для типа 'HTMLElement'.(2339)!
        */
        const inputYearPlaceholder = document.getElementById('inputYear');
        inputYearPlaceholder.placeholder = 'гггг';
    });
}
