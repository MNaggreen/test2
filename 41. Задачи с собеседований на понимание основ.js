/* Какое будет выведено значение: let x = 5; alert( x++ ); ? 
Ответ 5 потому что инкремент стоит после пятерки
Если бы инкремент стоял пере пятеркой ++5 то код бы выдал 6 */

/* Чему равно такое выражение: [ ] + false - null + true ?
Ответ NaN так как из строки мы попытальст вычесть null === число
              но
пустой массив при складывании превращается в стркоу
если бы здесь не было num */

/* Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
Ответ 2 */

/* Чему равна сумма [ ] + 1 + 2?
Ответ '12' Так как мы слева направо прибавляем! */

/* Чему равно 2 && 1 && null && 0 && undefined ?
Ответ null первое ложное значение всегда
последнее правдивое смотри задачу внизу*/

/* Есть ли разница между выражениями? !!( a && b ) и (a && b)?
Ответ true 2 да (!! возвращают булиново значение) */

/* Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
Ответ 3 обязытельно нужно смотреть приоритет операторов
так как тут 2 и 3 сравниваються сначала а потом только 3 и 4*/

/* a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
Ответ нет так как два массива это как два разных ящика
если бы сравнивалось именно содержимое то тогда да  */

/* Что выведет этот код: alert( console.log(+"Infinity")); ?
Ответ Infinity(по умолчанию число которое можно сравнивать
    с другими числами) причем с типом данных number 
если же будет просто строка +'heeee'
то код выдаст NaN*/

/* Верно ли сравнение: "Ёжик" > "яблоко"?
Ответ false по юникоду 
Ё 401 я 451 */

/* Чему равно 0 || "" || 2 || undefined || true || falsе ?
Ответ 2  || запинается на правде */


/* console.log(+'Infinity'); */