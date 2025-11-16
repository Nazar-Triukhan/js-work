// const user = {
//     name: 'Nazar',
//     age: 16,
// }

// // for (const i in user) {
// // // console.log(i);
// // console.log(user[i]);
// // }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// // Дано масив об’єктів
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];

// // Написати функція яка буде отримувати масив та ім’я друга якого потрібно знайти 

// function findFriendByName(arey,frindName){
//     for (let i = 0;i < arey.length;i++) {
//         if (arey[i].name === frindName) {
//             return 'знайшли дурга'
//         }   
//     }
//  return 'не знайшли'
// }
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));





// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];
// // Написати функцію яка буде повертати масив всіх імен друзів
// const getAllNames = arey => {
//     const frName= []
// for(let i = 0;i < arey.length; i++){
//     frName.push(arey[i].name)
// }
// return frName
// }
// console.log(getAllNames(friends));



const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];

// Написати функцію яка буде повертати масив імен друзів які онлайн
function getOnlineFriends (arey){
    const frOnline = []
    for (let i = 0; i < arey.length; i++) {
        if (arey[i].online) {
            frOnline.push(arey[i].name)
        }
    }
    return frOnline
}
console.log(getOnlineFriends(friends));