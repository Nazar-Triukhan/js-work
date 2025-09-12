const celsius = 1000;
const fahrenheit = celsius * 9/5 + 32;
console.log(fahrenheit);

const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(`В місяці днів: ${daysInMonth} годин: ${hoursInMonth} хвилин: ${minutesInMonth}`);

let health = 100;
let energy = 100;
console.log(`На разі в гравця здоровя: ${health -10} ,а також енергія зменшилась томущо ви не поїли банан ,енергія:${energy - 37}`);

const totalPrice = 100;
const discount = 0.1;
const discountedPrice = totalPrice - (totalPrice * discount);
console.log(discountedPrice);

const floatNumber = 12.78
const roundedDown = Math.floor(floatNumber)
console.log(roundedDown);


const floatString = '45.67';
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

const intString = '123';
const parsedInt = parseInt(intString);
console.log(parsedInt);

const number = 100;
const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);


const integer = 42;
const stringNumber = '256';
const convertedInt = parseInt(stringNumber);
console.log(convertedInt);
const convertedString = integer.toString();
console.log(convertedString);