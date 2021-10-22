let test = [8, 9, 'text', 8, 0, 0, 1, 1, 0, 8, NaN];

function checkArr() {
let Even = 0;
let Odd = 0;
let Zero = 0;
let Other = 0;
test.forEach(function (value){
    if (value === 0){
Zero++;
    }else if (typeof value !== 'number' || !value) {
Other++;
    } else {
if (value % 2 === 0){
Even++;
} else {
Odd++;
}}})
console.log(`В вашем массиве:
Количество нечетных чисел = ${Odd};
Количество четных чисел = ${Even};
Количество нулей = ${Zero};
Количество других данных = ${Other}`)
}

checkArr(test);