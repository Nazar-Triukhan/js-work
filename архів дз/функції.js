// 1
function logItems(array) {
    for(let i = 0;i < array.length; i++){
      console.log(`${i + 1} - ${array[i]}`);
    }
    return
}
console.log(logItems(['Mango', 'Poly', 'Ajax']));



// 2
function calculateEngravingPrice(message, pricePerWord){
    const messaSpl = message.split(' ')
    console.log(messaSpl.length * pricePerWord);
    return
}
console.log(calculateEngravingPrice('jfghjk ghjkl hjkl;' , 5));


// 3
function findLongestWord(string){
    const stringSpl = string.split(' ')
    let bigStr = stringSpl[0]
for(let i = 0;i < stringSpl.length;i++){
 if (stringSpl[i].length > bigStr.length) {
    bigStr = stringSpl[i]
 }
}
return bigStr
}
console.log(findLongestWord('tyuio dfghjkl fffffffffffffffffffg qwertyuilmnbvcx'));

// 4
function formatString(string) {
    if (string.length <= 40) {
        return string
    }else{
        const obriz = string.slice(0,40) + '...'
        return obriz
    }
    
}
console.log(formatString('sdfg sdfg sdfg sdfg sdfg sdf gsdf sg tgt rcdc btbrvdfbg bdbdfbdv fghnbgfvd aergfhgnbfvadwdaedfhnhb '));
//  5

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. 
// Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція
//  повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message){
    const toLowerMessage = message.toLowerCase()
    const trueMessage = toLowerMessage.includes('spam') || toLowerMessage.includes('sale')
    return trueMessage
}
console.log(checkForSpam('fghjkl; fghjkl fghjkl spam'));

// 6

function totalInputUsers(array){
let numbers = []
let total = 0
while (true) {
    const input = prompt('ведіть число:')

    if (input == '') {
        continue;
    }

    if (input === null) {
        break;
    }
    numbers.push(Number(input))
}
for (let i = 0;i < numbers.length; i++) {
    total += numbers[i]
}
console.log(`Загальна сума чисел дорівнює ${total}`);
}
totalInputUsers()


// 7 
const nameUser = prompt('Ведіть логін:').trim();
const logins = ['Mango', 'Poly', 'Ajax'];
function isLoginValid(login){
   if(login.length >= 4 && login.length <= 16){
    return true;
   } else { return false;}
}

const numberName = isLoginValid(nameUser)

function isLoginUnique(login, logins){
    for(let i = 0;i < logins.length; i++){
        if(login === logins[i]){
            return false;
        } 

    }
            return true
}

const niceName = isLoginUnique(nameUser,logins)

console.log('isLoginValid:', numberName);
console.log('isLoginUnique:', niceName);

function addLogin(allLogins, login){
   if(numberName === false){
     alert('Помилка! Логін повинен бути від 4 до 16 символів')
   }if (niceName === false) {
     alert('Такий логін уже використовується!')
   } else {
    logins.push(nameUser)
    alert('Логін успішно доданий!')
   }
}
console.log(addLogin(nameUser,logins));
console.log(logins);
