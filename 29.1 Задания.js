function calculateVolumeAndArea(intg) {
    if (intg > 0) {
    const volume = (intg * intg) * intg;
    const scuare = (intg * intg) * 6;
    console.log(`Объем куба: ${volume}, площадь всей поверхности: ${scuare}`);
    } else {
        console.log('При вычислении произошла ошибка')
    }
}

calculateVolumeAndArea(5) ;
/* Объем куба: 125, площадь всей поверхности: 150 */



function getCoupeNumber(intp) {
    const wagon = [0, 1, 5, 9, 13, 17, 21, 25, 29, 33, 37];
    const num = intp;
    let ans = 0;
    if (typeof(num) === "string" || Number.isInteger(num) === false) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
    } else if (num > 0 && num < 37) {
        for (let i = 0; i < wagon.length + 1; i++) {
            if (wagon[i] <= num && wagon[i+1] > num) {
                ans = i; 
                console.log(ans);      
            }
        }       
    } else {
        console.log("Таких мест в вагоне не существует");
    }
}
getCoupeNumber(30.8);


console.log(Number.isInteger(3.4));


/* (*) Продвинутые задания на использование функций
В этих задачах мы уже усложним работу с функциями. Они необязательны и тут можно попробовать свои силы.

Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

Задачи:

1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

Примеры:

calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно: */

/* Функция принимает только целое число от 1 до 36.

Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

"Ошибка. Проверьте правильность введенного номера места"

Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

Пример:

getCoupeNumber(33)  => 9

getCoupeNumber(7)  => 2

getCoupeNumber(300)  => "Таких мест в вагоне не существует"

getCoupeNumber(0)  => "Таких мест в вагоне не существует"

getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. Конечно, там будет куда больше условий, но смысл остается таким же.

Ответ с кодом этих задач можно найти тут: ссылка

Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

Но постарайтесь решить самостоятельно 🙂 */



// Место для первой задачи
function calculateVolumeAndArea(intg) {
    if (intg > 0 && Number.isInteger(intg)) {
    const volume = (intg * intg) * intg;
    const scuare = (intg * intg) * 6;
    return `Объем куба: ${volume}, площадь всей поверхности: ${scuare}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}
    
    



// Место для второй задачи
function getCoupeNumber(intp) {
    const wagon = [0, 1, 5, 9, 13, 17, 21, 25, 29, 33, 37];
    const num = intp;
    let ans = 0;
    if (typeof(num) === "string" || Number.isInteger(num) === false || num < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (num > 0 && num < 37) {
        for (let i = 0; i < wagon.length + 1; i++) {
         if (wagon[i] <= num && wagon[i+1] > num) {
                ans = i; 
                return ans;
         }
         }
    } else {
        return "Таких мест в вагоне не существует";
    }
}



function afterDecimal(num) {
    if (Number.isInteger(num)) {
      return 0;
    }
    const ans = num.toString().split('.')[1];
    /* создаемсписок из мичла и переделывем его в строку */
    return parseInt(ans);
}

console.log(typeof(afterDecimal(1.123)));


let a = '53';
console.log(a.slice(1, 2));

let inf = 50.1;
let res = inf.toString()
console.log(res);





/* В этих задачах мы уже усложним работу с функциями. Они необязательны и тут можно попробовать свои силы.

Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

Задачи:

1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0

У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)

Ответ с кодом этих задач можно найти тут: ссылка

Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

Но постарайтесь решить самостоятельно 🙂

 */
function getTimeFromMinutes(num) {
    let minute = 0;
    let minuteFloor;
    /* let res = ''; */
    let inf = num;
    let res = inf.toString().split('.');    
    let min = '';
    let hour = 0;
    let lastmin = 0;
    let ans = ''; 
    if (num < 0 || res.length > 1) {        
        return 'Ошибка, проверьте данные'; 
    } if (num <= 60) {
        if (num > 0) {
            minute = num;
            res = minute.toString().split('.');        
            min = res[0];
            lastmin = parseInt(min.slice(1, 2)); 
            lastmin = parseInt(lastmin); 
            min = parseInt(min); 
        } else {
            min = 0;
            lastmin = 0;
        }               
    } if (num > 60) {
        minute = num / 60; 
        if (minute.toString().length === 2) {
            hour = minute;
            min = 0;
            lastmin = 0;                        
        } else {
            minuteFloor =  minute - Math.floor(minute);
            res = minute.toString().split('.');  
            min = res[1].slice(0, 2);        
            hour = parseInt(res[0]); 
            lastmin = parseInt(lastmin); 
            min = parseInt(min);  
            min = minuteFloor * 60;
            min = min.toString();
            lastmin = parseInt(min.slice(1, 3));
            min = parseInt(min);
        }        
    } if (min > 60) {
        min = min - 60;
        hour += 1;
    } if (min === 60) {
        min = 0;
        hour += 1;
    } if (min < 60) {
        min = min; 
    } if (hour === 0) {
        ans = `Это ${hour} часов `;                        
    } if (hour === 1) {
        ans = `Это ${hour} час `;        
    } if (hour > 1 && hour < 5) {
        ans = `Это ${hour} часа `;        
    } if (hour > 5 || hour === 0) {
        ans = `Это ${hour} часов `;        
    } if (lastmin === 1) {        
        ans += `и ${min} минута`;        
    } if (lastmin > 1 && lastmin < 5) {        
        ans += `и ${min} минуты`;        
    } if (lastmin > 5 || lastmin === 0) {        
        ans += `и ${min} минут`;          
}
return ans;
}

console.log(getTimeFromMinutes(50.1));

console.log(Math.floor(2,5));

function findMaxNumber(...args) {    
    const ans = [...args];
    const res = [];
     
    if (ans.length < 4) {
        return 0;
    } 
    let count = 4;
    for (let i = 0; i <= ans.length-1; i++) { 
        res[i] = Math.round(ans[i]);  
        if (typeof(ans[i]) === 'string') {           
            --count;            
        }                  
    }
    if (count >= 4) {
        return Math.max(...ans); 
    } else {
        return 0;
    }    
}

console.log( findMaxNumber(1, 5, 6.6, '10', '11'));
console.log(Number.isInteger(6.6));





function fib(num) {
 let res = '0 1';
 let fib = [0, 1];
 let inf = num;
 let check = inf.toString().split('.');    
 if ( num === 0 || typeof(num) === 'string' || check.length > 1) {
    return '';
 }
 if (num  === 1) {
    return '0';
 }
 for (let i = 2; i <= num-1; i++) {
        
        fib[i] = fib[i-2] + fib[i-1];
        res += ' ' + fib[i].toString();
    }
    console.log(typeof(res));

return res;
}

console.log(fib(1.1));