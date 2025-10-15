// // const arey = ['Nazar',7,true,[3,5,1,4,6],'обьєкт']
// const arey = [1,2,3,4,5,6,7,8,9,10000,20000];
// arey[0] = 'Nazik'
// // console.log(arey[0]);/


// // console.log(arey[arey.length - 1]);
// // arey.length = 20
// // console.log(arey);
// // for(let i = 0; i < arey.length; i++){
// //     console.log(arey[i]);
// // }


// for(const num of arey){
//     console.log(num);
// }

// for(let i = 0;i < arey.length; i++){
//     if ((arey[i] % 2) === 0) {
//         console.log(arey[i]);
//         break;
//     }
// }


// 5. Порахувати тільки додатні числа

// let numbers = [5, -3, 8, -11, 10];
// let sum = 0;
// for(let i = 0;i < numbers.length; i++){
//     if (numbers[i] < 0) {
//         continue      
//     }
//     sum += numbers[i]    
// }
//     console.log(sum);


//  const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
//  cart[cart.length - 1] = 60
// console.log(cart);


//порахувати суму всіх чисел
// const arr = [1,3,5,6,7 ,"12", 5, "34"];
// let sum = 0;
// for(let i = 0;i < arr.length; i++){
//     if(typeof arr[i]=== 'string'){
//         continue;
//     }
//     sum += arr[i]
// }
// console.log(sum);


// const art = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(art[2][1]);

// Напиши скрипт пошуку самого маленького числа в масиві,  при умові, що числа унікальні (не повторюються).
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
// for(let i = 0;i < numbers.length; i++){
//     if(smallestNumber > numbers[i]) {
//         smallestNumber = numbers[i]
//     }
//     console.log(smallestNumber);
// }

// const phoneNumbers = [
//   "(+380) 50 123 45 67",
//   "(+380) 67 111 22 33",
//   "(+380) 93 123 48 90",
//   "(+380) 99 100 20 30",
//   "(+380) 66 123 49 99",
//   " 73 123 45 55",
//   "(+380) 68 111 22 55",
//   "(+380) 95 123 43 21",
//   "(+380) 97 123 48 76",
//   " 63 123 47 65",
//   "(+380) 96 123 45 43",
//   "(+380) 98 123 42 10",
//   " 67 123 46 78",
//   "(+380) 91 234 56 78",
//   "(+380) 92 345 67 89"
// ];

// for(let i = 0;i < phoneNumbers.length; i++){
//     if(phoneNumbers[i].length < 19){
//         phoneNumbers[i] = phoneNumbers[i].padStart(19,'(+380)')   
//     }
// }
//     console.log(phoneNumbers);


// Напиши скрипт який рахує суму елементів двух масивів. Без методу concat()
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let sum = 0;
// for(let i = 0;i < array1.length; i++){
//   sum += array1[i]
// }
// for(let i = 0;i < array2.length; i++){
//   sum += array2[i]
// }
// console.log(sum);

const mixedArray = [
  42,
  "Hello",
  123,
  "World",
  7,
  "JavaScript",
  2025,
  "Ukraine",
  56,
  "Phone",
  999,
  "Array",
  18,
  "Code",
  77
];
let result = 0;
for(let i = 0;i < mixedArray.length; i++){
    if (typeof mixedArray[i] === 'string') {
        continue
    }
    result += mixedArray[i]
}
console.log(result);
