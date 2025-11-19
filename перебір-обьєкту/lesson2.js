// const a = {
//     a: 1,
//     b: 11,
//     c: 111,
// }
// const b = {
//     d: 2,
//     e: 22,
//     f: 222,
// }
// const c = {
//     ...a,
//     ...b
// }
// console.log(c);


// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
// const user = {
//     hobby: 'football',
//     premium: true,
// }
// user.mood = 'happy'
// user.hobby = 'skydiving'
// user.premium = false
// const k = Object.keys(user)
// for(let i of k){
//     console.log(i,user[i]);
    
// }

// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
// const user = {
//     hobby: 'football',
//     premium: true,
//     mood: 'happy'
// }
// const countProps = (obj) => {
// const key = Object.keys(obj)
// return key.length

// }
// console.log(countProps(user));
// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого 
// (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
const obj = {
    vlad: 3,
    nazar: 111,
    sahon: 3,
    artem: 37,
    maks: 1,

}
const findBestEmployee = (employees) => {
let bestname = ''
let maxtask = 0
const entry = Object.entries(employees)
for (const i of entry) {
    if(i[1] > maxtask){
        maxtask = i[1]
        bestname = i[0]
    }
}
return `best name: ${bestname} task: ${maxtask}`
}
console.log(findBestEmployee(obj));
