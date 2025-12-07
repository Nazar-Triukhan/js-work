// const numbers = [2,5,7,44,33,12,56,77,81]
// // arrey.reduce((acc,item)=>{},0)

// const sum = numbers.reduce((acc,item) => {
//     return acc + item
// },0)
// console.log(sum);


// const students = [
//   { name: "Anna", age: 20, gender: "female", grade: 85 },
//   { name: "Ivan", age: 22, gender: "male", grade: 90 },
//   { name: "Olena", age: 19, gender: "female", grade: 78 },
//   { name: "Petro", age: 21, gender: "male", grade: 92 },
// ];
// const total = students.reduce((acc,item) => acc + item.grade,0)
// console.log(total);


// // порахувати загальну кількість балів

//рахуємо загальну вартість товарів в корзині

// const cart = [
//   { label: "apple", price: 100, quantity: 2, },
//   { label: "banana", price: 70, quantity: 3, },
//   { label: "lemons", price: 50, quantity: 5, },
// ];

// const total = cart.reduce((acc,{price,quantity}) => acc + price * quantity,0)
// console.log(total);

//отримати масив усіх tags
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const areyTags = tweets.reduce((acc,{tags}) => {
//     acc.push(...tags)
//     return acc
// },[])
// console.log(areyTags);

// const areyTags2 = tweets.map(({tags}) => tags)

// const areyTags3 = tweets.flatMap(({tags}) => tags)

// const uniksTeg = tweets.filter(areyTags3)

