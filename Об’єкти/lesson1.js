// const name = 'Nazar'

// const qwerty = 'age'

// const obj = {
//     name,
//     lastName: 'Triukhan',
//     [qwerty]: 16,
//     isStudent: true,
//     friend: ['Vlad','Artem'],
//     'city Locatoin': 'Kriviy rog'
// }


// console.log(obj.age);


// // 1. Створити пустий об’єкт myArray. Додати в властивості name, age, city, occupation. Замінити на вибір значення властивостей.

// const myArray = {}
// myArray.name = 'Vlad'
// myArray.age = 17
// myArray.city = 'Kriviy Rog'
// myArray.occupation = 'programist'

// myArray.age = 100000000
// console.log(myArray);

//Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт
// з інформацією про власника.Додай йому наступні властивості:
//name - ім'я власника, значення "Henry";
//phone - телефон, значення "982-126-1588";
//email - пошта, значення "henry.carter@aptmail.com".

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: 'Henry',
        phone: '0960918608',
        email: 'henry.carter@aptmail.com'
    }
}