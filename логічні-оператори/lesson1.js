// //  6 значень які в булевому значенні призводять до фолс 
// console.log(Boolean('')); // false
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(null)); // false
// let number ;
// console.log(Boolean(number)); // false


// логічний оператор and '&&': повертає якщо всі значенні призводяться до true повертає останнє значення 
// якщо десь знаходить false його і повертає 
// console.log(2 && 1); //1 - остання 
// console.log(2 && 1 && 0 && 'hello' && 22); //0 - false зупиняється  
// const input = prompt('your age:');
// console.log(input);
// const name = 'Nazar';
// const result = name && input && 'первірку пройшли';
// console.log(result);


// логічний оператор або or || повертає перше тру яке зустрів якщо всі значення фолсе повертає останій фолсе 
// console.log(0 || undefined); //20
// const name = prompt('name');
// const age = prompt('age');
// console.log(name || age);
// console.log(33 && 11 && 'nazar' || 23 ); //nazar


// логічний оператор не !  перетворює булове значння на протилеєне 
console.log(!Boolean(0)); // true
console.log(!Boolean(10)); // false
console.log();



