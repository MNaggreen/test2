/* 
Задания на работу с методами массивов
В этих заданиях мы с вами потренируемся работать с методами массивов.

Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках. Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

Задачи:

1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)

Пример:

getPositiveIncomeAmount(funds) => 13300

2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

Пример:

getTotalIncomeAmount(funds) => -500

Ответ с кодом этих задач можно найти тут: ссылка

Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

Но постарайтесь решить самостоятельно 🙂
*/

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    const sumOfPositives = data.filter((data) => data.amount > 0).reduce((sum, current) => sum + current.amount, 0);
    return sumOfPositives;
};
console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    const ifThereIsNegatives = data.some(data => data.amount < 0);
    /* console.log(ifThereIsNegatives); */
    if (ifThereIsNegatives) {
        const res = data.reduce((sum, current) => sum + current.amount, 0);
        return res;
    } else {
        return getPositiveIncomeAmount(data);
    }
};
console.log(getTotalIncomeAmount(funds));