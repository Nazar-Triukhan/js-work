// Завдання 1. Лічильник подій 

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

function countItems (array, condition){
let count = 0;
for (const i of array) {
    if(condition(i)){
        count += 1
    }
}
return count;
}

const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));



// Завдання 2: Калькулятор з операціями 

const calculate = (a, b, operation) => {
    return operation(a,b)
}

const add = (a,b) =>{
    return `${a} + ${b} = ${a + b}`
}
const subtract = (a,b) => {
    return `${a} - ${b} = ${a - b}`
}
const multiply = (a,b) => {
    return `${a} * ${b} = ${a * b}`
}
const divide = (a,b) => {
    if(a === 0 || b === 0){
        return `erorr`
    }
    return `${a} / ${b} = ${a / b}`
}


console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку


// Завдання 3: Генератор повідомлень 

function repeatMessage(times, messageCreator){
return messageCreator(times)
}

function messageCreator (times){
    for (let i = 0; i < times; i++) {  
        console.log(`hello ${i}`);
    }
}
console.log(repeatMessage(3,messageCreator));


