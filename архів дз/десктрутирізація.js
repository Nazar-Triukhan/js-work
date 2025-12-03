// Використати деструктуризацію об’єктів у всіх завданнях з попередньої ДЗ
const user = {
    hobby: 'football',
    premium: true,
}
const {hobby: interesting,premium: many} = user
user.mood = 'happy'
user.hobby = 'skydiving'
user.premium = false
const k = Object.keys(user)
for(let i of k){
    console.log(i,user[i]); 
}

// Завдання 2
const userInf = {
    hobby: 'football',
    premium: true,
    mood: 'happy'
}
const {hobby,premium,mood} = userInf
const countProps = (obj) => {
const key = Object.keys(obj)
return key.length
}
console.log(countProps(userInf));
// Завдання 3
const obj = {
    vlad: 3,
    nazar: 111,
    sahon: 3,
    artem: 37,
    maks: 1,

}
const {vlad,nazar,sahon,artem,maks} = obj
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

// Завдання 4
const userMany = {
    vlad: 100,
    nazar: 150,
    sahon: 200,
    artem: 50,
    maks: 500,
}
const {vlad:vladUser,nazar:nazarUser,sahon:sahonUser,artem:artemUser,maks:maksUser} = userMany
const  countTotalSalary = (employees) => {
    
let sum = 0
for(const i in employees) {
    sum += employees[i]
}
return sum

}

console.log(countTotalSalary(userMany));


// Завдання 5
const nameUser = [{name: 'Nazar'},{name:'Vlad'},{name:'Sahon'}]
const [elem1,elem2,elem3] = nameUser
const key = Object.keys(nameUser[0])[0];

const getAllPropValues = (arr, prop) => {

    let userName = []
for(let i = 0;i < arr.length;i++){
    userName.push(arr[i][prop])
}
return userName

}
console.log(getAllPropValues(user,key));

// Завдання 6

const infoMany = [
    {name: 'Aple',many:20,skilki: 5},
    {name: 'Tort',many:200,skilki: 2},
    {name: 'Scitls',many:10,skilki: 10},
]
const [
    {name:name1,many:many1,skilki:skilki1},
    {name:name2,many:many2,skilki:skilki2},
    {name:name3,many:many3,skilki:skilki3}
] = infoMany
const calculateTotalPrice = (allProdcuts, productName) => {
    let sum = 0
for(let i = 0;i < allProdcuts.length;i++){
if (allProdcuts[i].name === productName) {
    sum += allProdcuts[i].many * allProdcuts[i].skilki
}
}
return sum
}
console.log(calculateTotalPrice(infoMany, 'Aple'));
console.log(calculateTotalPrice(infoMany, 'Tort'));
console.log(calculateTotalPrice(infoMany, 'Scitls'));











/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій

  transactions: [],
  id:1,
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {
    const transaction = {
            amount:amount,
            type:type,
            id:this.id
    }
    this.id += 1
    return transaction
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount
    const transaction =  this.createTransaction(amount,Transaction.DEPOSIT)
    this.transactions.push(transaction)
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if(amount > this.balance){
        console.log('зняття такої суми не можливо,недостатньо коштів');
        return
    }
    this.balance -= amount
    const transaction = this.createTransaction(amount,Transaction.WITHDRAW)
    this.transactions.push(transaction)
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for(let i = 0;i < this.transactions.length;i++){
        if(this.transactions[i].id === id ){
            return this.transactions[i]
        }
    }
    return null
  },

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0 
    for(let i = 0;i < this.transactions.length;i++){
        if(this.transactions[i].type === type ){
            total += this.transactions[i].amount
        }
    }
    return total
  },
};



account.deposit(1000)
account.deposit(5000)
account.withdraw(1000)
account.withdraw(1000)
account.withdraw(2000)
console.log(account.getBalance());
console.log(account.getTransactionDetails(4));
console.log(account.getTransactionTotal('withdraw'));
console.log(account);
