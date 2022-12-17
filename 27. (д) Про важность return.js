"use strict";

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

/* promotion(convert(500, usdCurr)); */
/* convert(500, usdCurr);
convert(500, eurCurr); */
/* оба способа будут верные */

/* любой код после return Работать не будет */


function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();
/* 
0
1
2
3
*/
/* здесь ключевую роль играет return он работает как
break т.е. после него ничего выводиться даже наша
надпись Done */