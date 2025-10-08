//Задача 1: Вивести числа від 1 до 5 (while)
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i += 1
    
// }
//Задача 3: Порахувати суму чисел від 1 до 10 (while)
// let i = 0;
// let sum = 0;
// while (i <11) {
//   sum += i
//   i += 1

// } 

//   console.log(sum);



// Задача 4: Ввести число більше 10 (do...while)
// let num;
// do {
// num = Number(prompt('Ведіть число більше 10').trim())
    
// } while (num <= 10){
//    console.log(num);
   
// };


//Задача: Запросити у користувача число більше 0 та зробити перевірку на не число
// let num;
// do {
//      num = Number(prompt('Ведіть число більше 0').trim())
// } while (num > 0 && isNaN(num)) {
//     console.log('good');
// }


// попросити у користувача ввести номер 
// телефону і якщо довжина номеру телефону 
// менша, або більша за 10, обробити помилки
let userNumber;
do {
    userNumber = prompt('Ведіть номер телефону')
} while (userNumber.length() < 10 || userNumber > 11);
