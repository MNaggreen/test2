for  (let i = 0; i < 3; i++) {
    console.log(i, i);
    for  (let j = 0; j < 3; j++) {
        console.log(j);
    }
}
/* 
0  i
0
1
2

1 i
0
1
2

2 i 
0
1
2 */

let result = '';
const len = 7;
for  (let i = 1; i < len; i++) {
    for  (let j = 0; j < i; j++) {
        result += '*';        
    }
    result += '\n';
}
console.log(result);
/* 
*
**
***
****
*****
******
 */




for  (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for  (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for  (let k = 0; k < 3; k++) {
            console.log(`Third level: ${k}`);
        }
    }
}
/* 
First level: 0
Second level: 0
Third level: 0
Third level: 1
Third level: 2
Second level: 1
Third level: 0
Third level: 1
Third level: 2
Second level: 2
Third level: 0
Third level: 1
Third level: 2
First level: 1
Second level: 0
Third level: 0
Third level: 1
Third level: 2
Second level: 1
Third level: 0
Third level: 1
Third level: 2
Second level: 2
Third level: 0
Third level: 1
Third level: 2
First level: 2
Second level: 0
Third level: 0
Third level: 1
Third level: 2
Second level: 1
Third level: 0
Third level: 1
Third level: 2
Second level: 2
Third level: 0
Third level: 1
Third level: 2
*/




first: for  (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for  (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for  (let k = 0; k < 5; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}
/* first это метка */
/* каждый раз когда 3 цикл стоит как 2
мы пропускаем 2 и переходим сразу к первому циклу */
/* 
First level: 0
Second level: 0
Third level: 0
Third level: 1
First level: 1
Second level: 0
Third level: 0
Third level: 1
First level: 2
Second level: 0
Third level: 0
Third level: 1 
*/






first: for  (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for  (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for  (let k = 0; k < 5; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}
/* break полностью прерывает цикл */
/* 
First level: 0
Second level: 0
Third level: 0
Third level: 1 
*/



for (let i = 5; i <= 10; i++ ){
    console.log(i);}
