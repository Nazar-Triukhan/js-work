// function calculator (colback, a, b){
//     return colback(a, b)
// }

// function add(a, b){
//     return `${a} + ${b} = ${a + b}`
// }

// function minus(a, b){
//     return `${a} - ${b} = ${a - b}`
// }

// function multiplay(a, b){
//     return `${a} * ${b} = ${a * b}`
// }

// function delay(a, b){
//     return `${a} / ${b} = ${a / b}`
// }

// console.log(calculator(add,22,28));


// function fuunctionProcesingArey(array, callback) {
//     return callback(array);
// }

// let str = ['karolina', 'nazar', 'vlad', 'artem', 'sah'];

// function smallTextArey(array) {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i].length < min.length) {
//             min = array[i];
//         }
//     }
//     return min;
// }

// console.log(fuunctionProcesingArey(str, smallTextArey));



// Напишіть функцію, 
// яка повертає новий масив, в якому всі елементи 
// масиву помножені на задане число, з використанням колбек-функції

function trnsformArey (colback,arey,number){
    return colback(arey,number)
}

const  numbers = [1,2,3,6,3,5]
const delimitr = 2

function delimitrAllNuber (arrey,num){
    const newNumbers = []
    for(let i = 0;i < arrey.length;i++){
        newNumbers.push(arrey[i] * num)
    }
    return newNumbers
}

console.log(trnsformArey(delimitrAllNuber,numbers,delimitr));
