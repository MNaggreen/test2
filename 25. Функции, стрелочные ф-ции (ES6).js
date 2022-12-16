"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage("Hello World!");
/*  "Hello World!" */
console.log(num);
/* Выпаст ошибка т.к. это локальная переменная 
или 
же 10 так как переменная ба обьявлена до функции и изменена
или
20 если переменная обявленна до функции и в функции
будет две переменных локальная и глобальная*/

/* функциЯ идет всегда на уровень выше если не находит переменные в себе */
/* замыкание функции это сама функцияя и 
все внешнии переменные которые ей доступны*/

function calc(a, b) {
    return (a + b);
    /* после return вводить код бесполезно т.к.
    так как такой код функция даже читать не будет */
}

console.log(calc(4, 3));
console.log(calc(5, 7));
console.log(calc(8, 10));
/* суть функций оптимизация нашего процесса */


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);
/* во внешний мир на функция возвращает локальную переменную */

/* это было обявление функции которая уже есть как Var
т.е. функция может быть обявлена даже в конце страницы
 и будет использоваться 
позднее даже так если её вызывают до её объявления */

/* создание функции function expression её 
можно вызвать только после обявления */
const logger = function() {
    console.log("Hello");
};

logger();


/* стрелочная функция если много строк то так*/
const calcs = (a, b) => { 
    console.log('1');
    return a + b;
};
/* если одна стркоа то так */
const calcg = (a, b) =>  a + b;