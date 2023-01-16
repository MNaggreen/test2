'use strict';
const box = document.getElementById('box'),
      btns = document.getElementByTagName('button'),
      circles = document.getElementByClassName('circle'),
      hearts = document.quarySelectorAll('.heart'),
      oneHeart = document.quarySelector('.heart');
console.dir(box);
/* div#box.box мы полочим объект со своими свойствами
например свойство style(объект) у которого очень много свойств  */
box.style.backgroundColor = 'blue';
/* изменит наш цвет фона */
box.style.width = '500px';
/* изменим ширину */
btns[1].style.borderRadius = '10'
/*делаем закругление */
/* circles.style.backgroundColor = 'red'; ЭТО НЕПРАВИЛЬНО
ОРАЩАТЬСЯ К ПСЕВДО МАССИВУ НЕЛЬЗЯ!*/
circles[0].style.backgroundColor = 'red';
/* так можно */
box.style.cssText = 'background-color: blue; width: 500px';
/*  передаем сразу несколько стилей по одному id*/
const num = 500;
box.style.cssText = `background-color: blue; width: ${num}px'`;
/* можно переменную подставлять в строку */



for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}
/* перебираем элементы и назначаем им стиль поочереди всем */
/* но циклы используються редко смотри ниже */
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});
/* делаем тоже самое что и выше */



/* Теперь перейдим к непосредственно созданию элемента(по тегу)*/
const div = document.createElement('div');
/* на странице index.html данный тег не появиться
только здесь он будет храниться */
const text = document.createTextNode('Тут был я');
/* этот метод помогает добавить текст на страницу
используется редко */
div.classList.add('black');
/* добавляем класс к нашему новому только созданному элементу */



/* Далее мы разберем современные методы добавления на страницу */