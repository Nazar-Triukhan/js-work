// // const arey = ['Nazar',7,true,[3,5,1,4,6],'обьєкт']
const arey = [1,2,3,4,5,6,7,8,9,10000,20000];
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
const arr = [1,3,5,6,7 ,"12", 5, "34"];
let sum = 0;
for(let i = 0;i < arr.length; i++){
    if(typeof arr[i]=== 'string'){
        continue;
    }
    sum += arr[i]
}
console.log(sum);
