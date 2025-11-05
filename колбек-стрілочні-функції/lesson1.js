// const add = (a,b) => a + b

// Напиши скрипт пошуку логіна
//  - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
//  - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';

// const loginsSpotlli = (arr,login) => {
// let mesage = `Користувач ${login} не знайдено`
// if (logins.includes('aj4xth3m4n')){
//      mesage = `Користувач ${login}  знайдено`
// }
// return mesage
// }
// console.log(loginsSpotlli(logins,loginToFind));





// Напиши функцию findSmallesNumber(numbers) пошуку самого маленького
//  числа в масиві, при умові, що числа унікальні (не повторюються).

// const findSmallesNumber = (numbers) => {
//     let smalNumber = numbers[0]
//     for (let i = 0;i < numbers.length;i++){
//         if (smalNumber > numbers[i]) {
//             smalNumber = numbers[i]
//         }
//     }
//     return smalNumber
// } 

// const findSmallesNumber = (numbers) => Math.nim(...numbers)
// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4