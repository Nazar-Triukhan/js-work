// let number = '7';
// const numberAgent =  number.padStart(3 , '0');
// console.log(numberAgent);  
// const numberUser = '0960918608';
// const formatingNumber = numberUser.padStart(15 , '+(38)');
// console.log(formatingNumber);
// const lastName = 'griukhan';
// const corectName = lastName.replace(lastName[0], 'T');
// console.log(corectName);
// const languluge = 'JavaScript'
// const rezalt = languluge.substring(0,4);
// console.log(rezalt);
// const lorem = languluge.slice(4,10)
// console.log(lorem);

// Створити змінну, яка містить рядок з вашим ім'ям. 
// Використовуючи метод .toUpperCase(), перетворити рядок
//  у верхній регістр та вивести результат в консоль.

// const name = 'Nazar'
// const nameUper = name.toUpperCase()
// console.log(nameUper);
// Створи програму яка буде обрізати повідомлення 
// від лишніх пропусків з обох сторін.
// const text = prompt('name pleas').trim();
// console.log(text);


const nameOll = 'Nazar Triukhan'
const nameIndex = nameOll.indexOf(' ')
console.log(nameIndex);


// Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. 
// Використовуючи метод .indexOf(), знайти і вивести в 
// консоль позицію, на якій знаходиться пробіл між ім'ям та прізвищем.




// Створити разом з учнями скрипт, який буде отримувати від користувача число 
// (кількість хвилин) і буде виводити рядок в форматі часу як результат.
//  Наприклад 80 виведе 01:20 450 - 07:30. Можете використати наступні формули

const totalMinut = Number(prompt('how minuts'));
  const numberHours = totalMinut/ 60;
  const days = Math.floor(numberHours / 24);
  const hours = Math.floor(numberHours % 60);
  const modHours = String(hours).padStart(2, 0);
  const minutes = отримане число % 60;
  const modMinutes = String(minutes).padStart(2, 0);
  console.log(hours);
  