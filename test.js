// Завдання 1:

// Створи функцію sayHello(name), яка виводить “Привіт, {name}!”
// Потім створи функцію processUser(name, action), яка приймає ім’я і функцію, і викликає її.

// 🔹 Приклад:

// processUser("Назар", sayHello);
function processUser(name, action) {
return action(name)
}
function sayHello(name){
    console.log(`Привіт, ${name}!`);
}

console.log(processUser('Nazar',sayHello));
