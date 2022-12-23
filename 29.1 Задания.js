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



function getTimeFromMinutes(num) {
    let minute = 0;
    let res = '';
    let min = '';
    let hour = 0;
    let lastmin = 0;
    let ans = ''; 
    if (num < 0) {        
        return 'Ошибка, проверьте данные'; 
    } if (num < 60) {
        minute = num;
        res = minute.toString().split('.');        
        min = res[0];
        lastmin = parseInt(min.slice(1, 2)); 
        lastmin = parseInt(lastmin);
        
        
    } if (num > 60) {
        minute = num / 60;   
        res = minute.toString().split('.');  
        min = res[1].slice(0, 2);
        lastmin = parseInt(min.slice(1, 3));
        hour = parseInt(res[0]); 
        lastmin = parseInt(lastmin); 
        min = parseInt(min);   
    } if (min > 60) {
        min = min - 60;
        hour += 1;              
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
console.log(ans);
console.log(lastmin);
return ans;
}

console.log(getTimeFromMinutes(53)); 



