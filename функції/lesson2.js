// function add(a,b){
//     return a + b
// }

// console.log(add(1,2));

// function dodatok (...args){
//     // const args = Array().from(arguments)
//     // console.log(args);
//     let total = 0
//     for(let i = 0;i < args.length; i++){
//        total += args[i]
//     }
//     return total
// }
// console.log(dodatok(12,8));

// 4. Напиши функцію myAverageScore ,
//  яка у якості аргументу отримує масив з оцінками, 
//  і виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:
// function myAverageScore(arey){
//     let sum = 0
//     let categorias = ''
//     for(let i = 0;i < arey.length;i++){
//       sum += arey[i]
//     }
//     sum = sum / arey.length
//     if (sum >= 91 && sum <= 100) {
//         categorias = 'Myaverage score: A'
//     }else if (sum >= 81 && sum <= 90 ){
//          categorias = 'My average score: B'
//     }else if (sum >= 71 && sum <= 80 ){
//          categorias = 'My average score: C'
//     }else if (sum <= 70){
//         categorias = 'My average score: B'
//     }
// return categorias
// }
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));