// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const numberList = [1,2,3];
numberList[1] = 10;
console.log(numberList);

// Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const stringList = ['Nazar','Vlad','Artem'];
stringList[3] = 'Sahon';
console.log(stringList);


// Створити скрипт який поверне суму всіх чисел в масиві.

const numberItems = [1,2,3,4,5,6,7,8,9];
let sum = 0;
for(let i = 0;i < numberItems.length; i++){
    sum += numberItems[i];
}
    console.log(sum);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const listNum = [1,2,3,4,5];
for(let i = 0;i < listNum.length; i++){
    console.log(listNum[i]);
    
}

// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const srtList = ['nazar' , 'dddddd', '1234' , '123456' , '12345679']
for(let i = 0; i < srtList.length; i++){
    if(srtList[i].length > 5){
    console.log(srtList[i]);
    }
}

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const maxNumberList = [1,2,3,6,3,55,2,5,13,5];
let maxNumber = 0;
for(let i = 0;i < maxNumberList.length; i++){
    if(maxNumber < maxNumberList[i]){
        maxNumber = maxNumberList[i]
    }
}
console.log(maxNumber);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const numItems = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < numItems.length; i++){
    if((numItems[i] % 2) === 0){
        console.log(numItems[i]);
    }
}

