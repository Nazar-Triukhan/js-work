// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". 
// Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", 
// який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() 
// щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 

const bankAccount = {
    ownerName: 'PUMB',
    accountNumber: 1111222233334444,
    balance: 0,
    deposit(sum){
        this.balance += sum
        return this.balance
    },
    withdraw(sum){
        this.balance -= sum
        return this.balance
    }
}

const plusDeposit = confirm('Хочете поповнти рахунок?')
if (plusDeposit) {
    const sum = Number(prompt('Яку суму:'))
    bankAccount.deposit(sum)
    alert(`У вас на балансі ${bankAccount.balance}`);
    
}else{
    const sum = Number(prompt('Яку суму зняти:'))
    bankAccount.withdraw(sum)
        alert(`У вас на балансі ${bankAccount.balance}`);
}


console.log(bankAccount);


// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". 
// Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів 
// Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру 
// потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
    temperature: 0,
    humidity: 1,
    windSpeed: 20,
    whatTemperature(gradus){
        if (gradus <= 0) {
            return true
        } else{
            return false
        }
    },
    isTemperature(gradus){
        if (this.whatTemperature(gradus)) {
            alert('температура нижче 0 градусів Цельсія')
        } else alert('температура вища 0 градусів Цельсія')
    }
}
const isTmperature = Number(prompt('Яка в вас температура:').trim())
weather.isTemperature(isTmperature)
console.log(weather);


// Створіть об’єкт "user", який буде мати властивості "name", "email", "password".
//  Додайте метод "login", який буде перевіряти правильність введеного email та password. 
const user = {
    name: 'Nazar',
    email: 'truyhann@gmail.com',
    password: 'Nazar2009',
    login(email,password){
        if (email === this.email && password === this.password) {
            alert('Все ведено правильно')
        } else alert('Ведено не правильно')
    }
}
const goodEmail = prompt('Ведіть емаіл').trim()
const goodPassword = prompt('Ведіть пароль').trim()
user.login(goodEmail,goodPassword)




// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод,
//  який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 
const movie = {
    title: 'Titanik',
    director: 'qwerty',
    year: 2010,
    rating: 9,
    whatRating(){
        if (this.rating > 8) {
            return true
        } else return false
    }
}
console.log(movie.whatRating())
console.log(movie);
