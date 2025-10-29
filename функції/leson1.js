// // function declaration
// function mesage (text) {
//     return`hello world ${text}`;
    
// }
// console.log( mesage('Nazik'));
// console.log( mesage('Art'));

// function sum (num1,num2 ){
//     return num1 + num2
// }
// console.log(sum(2,3));
// console.log(sum(2));


// function expretion
// const areyLenght = function (arr){
//     return arr.length
// }
// console.log(areyLenght([1,2,3,4,5,6,7,8,9]));
// console.log(areyLenght(['Nazar','Mykola','Sasha','Vlad']));


// function addet (a = 1,b = 1,c = 1){
//     return a + b + c

// }
// console.log(addet(2,7));

// Напиши функцію яка повертає найбільше число в масиві:

//  У цій функції ми проходимо по масиву чисел та знаходимо найбільше число. Його повертаємо як результат функції.

// let array = [1, 3, 2, 5, 4];
// function maxNum (a){
//     let max = a[0]
//     for(const num of a){
//         if (num > max){
//             max = num
//         } {
            
//         }
//     }
//     return max
// }
// console.log(maxNum(array));



// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому   вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець 
// рядка три крапки '...', після чого повертає   укорочену версію.
function formatString(string) {
    if (string.length <= 40) {
        return string
    }else{
        const obriz = string.slice(0,40) + '...'
        return obriz
        
    }
    
}
console.log(formatString('sdfg sdfg sdfg sdfg sdfg sdf gsdf sg tgt rcdc btbrvdfbg bdbdfbdv fghnbgfvd aergfhgnbfvadwdaedfhnhb '));
console.log(formatString('sdfg rvdfbg bdbdfbdv fghnbgfvd aergfhgnbfvadwdaedfhnhb '));
console.log(formatString('sdfg sdfg sdf'));

