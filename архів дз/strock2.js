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

// const userOld = prompt('how old are you:').trim();
// const userName = prompt('your name:').trim();
// if(userOld !== '' && userName !== ''){
//     console.log('Обидва поля заповнені');
// }else{
//         console.log('Не всі поля заповнені');
// }

// const userNumber1 = Number(prompt("number 1"));
// const userNumber2 = Number(prompt("number 2"));
// if((userNumber1 + userNumber2) > 10){
//     console.log('Сума більша за 10'); 
// }else{
//     console.log('Сума менша або дорівнює 10'); 
// }

// const javaUser = prompt('напишіть JavaScript').trim().toLowerCase();
// if('javascript' === javaUser){
//     console.log('Текст містить слово JavaScript');
// }else{
//     console.log('Текст не містить слово JavaScript');
// }

// const numberUser = Number(prompt('Number:'))
// if(numberUser>=10 && numberUser<=20){
//     console.log('Число входить в діапазон від 10 до 20');
// }else{
//     console.log('Число не входить в діапазон від 10 до 20');
// }

// const userNameInput = prompt('Ведіть імя:').trim();
// const userEmailInput = prompt('Ведіть емайл:').trim();
// const userPasswordInput = prompt('Ведіть пароль:').trim();
// if(userNameInput.length > 3 && userEmailInput.includes('@') && userEmailInput.includes('.') && userPasswordInput.length > 6){
// console.log('Перенаправлення на іншу сторінку');
// }else{
//     console.log('Помилка: неправильне заповнення');
    
// }