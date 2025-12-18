// 🚗 ЗАДАЧА: Клас Машина і Клас Електромобіль
// Уявімо, що ми створюємо програму для автосалону. Є звичайні машини, а є спеціальні — електромобілі. Всі вони мають марку (назву) і колір, але електромобілі ще мають рівень заряду батареї.

// ✅ ВИМОГИ
// Створити клас Car, який має:

// публічні властивості brand (марка) і color

// метод describe() — який описує машину: "Це [brand] кольору [color]"

// Створити клас ElectricCar, який наслідує Car і додає:

// приватну властивість #batteryLevel

// геттер і сеттер для batteryLevel

// метод charge() — який додає заряд

// Клас звичайної машини



// class Car {
//     constructor(brand,color){
//         this.brand = brand;
//         this.color = color;
//     }
//     describe(){
//         console.log(`Це ${this.brand} кольору ${this.color}`);
//     } 
// }

// class ElectricCar extends Car { //extends - це наслфдування класу 
// #batteryLevel = 0 //#- синтаксис приватної зміною ,# вона обовязково поивна бути перед конструктором оголошується 

// constructor(brand,color,batteryLevel){
//     super(brand,color) //super це є виклик батьківського конструктора 
//     this.#batteryLevel = batteryLevel
// }
// get batteryLevel(){
//     return this.#batteryLevel
// } // отримати значення 
// set batteryLevel(newLevel){
//     if(newLevel > 100){
//         console.log('зарядка більше 100 неможливо');
        
//     }else return this.#batteryLevel = newLevel

// } // змінити значкння
// charge(percentage){
//     this.batteryLevel = this.#batteryLevel + percentage;
//     console.log(`${this.brand } заряджено до ${this.batteryLevel} %`);
// }
// }

// const bmw = new Car('BMW','red')
// const tesla = new ElectricCar('tesla','red',22)
// console.log(bmw);
// bmw.describe()
// tesla.charge(262)
// console.log(tesla);











//2

class User{
    constructor({name,age,followers}){
        this.name = name;
        this.age = age;
        this.followers = followers
    }
    getInfo(){
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}


const mango = new User({
 name: 'Mango',
 age: 2,
 followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
 name: 'Poly',
 age: 3,
 followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers

//3


// Завдання 3
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. 
// При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.
// Додай методи класу:


class Storage{
    constructor(items){
        this.items = items
    }
    getItems(){
        return this.items
    }
    addItem(item){
        this.items.push(item)
    }
    removeItem(item){
        const tovar = this.items.indexOf(item)
        if (tovar !== -1) {
            this.items.splice(tovar,1)
        }
        
    }
}

// getItems() — повертає масив поточних товарів
// addItem(item) — отримує новий товар і додає його до поточних
// removeItem(item) — отримує товар і, якщо він є, видаляє його з поточних


const storage = new Storage([
 'Нанітоіди',
 'Пролонгер',
 'Залізні жупи',
 'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]



// // Завдання 4
// // Напиши клас StringBuilder. На вхід він отримує один параметр — рядок, який записує у властивість _value.
// // Додай класу наступний функціонал:

// // Геттер value — повертає поточне значення поля _value
// // Метод append(str) — отримує параметр str (рядок) і додає його в кінець _value
// // Метод  — отримує параметр str (рядок) і додає його на початок _value
// // Метод pad(str) — отримує параметр str (рядок) і додає його на початок і в кінець _value


class StringBuilder{
    constructor(value){
        this._value = value
    }
    get value(){
        return this._value
    }
    append(str){
        this._value += str
    }
    prepend(str){
        this._value = str + this._value
    }
    pad(str){
        this._value = str + this._value + str
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='


// Завдання 5
// Напиши клас Car із зазначеними властивостями і методами.

class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }

  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}


const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000