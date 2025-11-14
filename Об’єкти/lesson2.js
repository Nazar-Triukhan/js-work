// const userInfo = {
//     name: 'Nazar',
//     firstName: 'Triukhan',
//     age: 16,
//     getName(){
//         return this.name
//     },
//     removeName(newName){
//         return this.name = newName
//     }
// }



// console.log(userInfo.removeName('Vlad'));


// Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, 
// який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.

// const person = {
//     name: 'Nazar',
//     age: 16,
//     gender: 'male',
//     getInfo(){
//         return `name: ${this.name}, age: ${this.age}, gender: ${this.gender}`
//     },

//     setName(){
//         const newName = prompt('input name')
//         return this.name = newName
//     }
// }
// console.log(person.setName());
// console.log(person);



// Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.

// const book = {
//     title: 'Майстер і Маргарита',
//     author: 'Михайло Булгаков',
//     year: 1967,
//     genre: 'роман',
//     updateBook(newTitle,newAuthor,newYear,newGenre){
//         this.title = newTitle
//         this.author = newAuthor
//         this.year = newYear
//         this.genre = newGenre
//     }
// }

// // book.updateBook('Apple','Nazar',1991,'vlad')

// console.log(book);



// // Створіть об'єкт "restaurant" з властивостями 
// // "name", "cuisine", "address" та "rating". Додайте до об'єкту метод, який дозволить змінювати значення властивостей "address" та "rating"



// Створіть об'єкт "restaurant" з властивостями "name", "cuisine", "address" та "rating". 
// Додайте до об'єкту метод, який дозволить змінювати значення властивостей "address" та "rating", зробіть перевірку на змінення рейтингу, рейтинг у межах від 0 до 5.

// const restaurant = {
//   name: "La Piazza",
//   cuisine: "італійська",
//   address: "вул. Смаколиків, 12, м. Київ",
//   rating: 4.7,
//   upDateRestoran(newAdres,newRating){
//     this.address = newAdres
//     if (newRating >= 0 && newRating <= 5) {
//         this.rating = newRating
//     }
//   }
// }
// restaurant.upDateRestoran('kriviy Rig',1)

// console.log(restaurant);


const car = {
    brand: "bmw",
    model: "m3",
    year: 2015,
    color: "black",
    updateCar(){
        const newBrand = prompt('brand:')
        const newModel = prompt('model:')
        const newYear = prompt('year:')
        const newColor = prompt('color:')
        if (newBrand) {
          this.brand = newBrand
        }
        if (newModel) {
        this.model = newModel
        }
        if (newYear) {
        this.year = newYear
        }
        if (newColor) {
        this.color = newColor
        }
    }
}
car.updateCar()
console.log(car);



