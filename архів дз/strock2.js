const result= 5 + 5 + '5';
console.log(typeof(result));

const email = 'tryuhann@gmail.com';
const emailGood = email.includes('@');
console.log(emailGood);
console.log(email.length);

const start = 'My';
const center = 'name';
const end = 'is';
const fullName = `${start} ${center} ${end} Victor`;
console.log(fullName);

const userName = prompt('Ведть свій нік');
const payment = prompt('Суму яку хочете пожертвовать');
console.log(alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`));
