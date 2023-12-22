// const str = "Рядок нормалізації букв"
// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());

// console.log(str.includes(''));

// console.log(str.startsWith(""));
// console.log(str.endsWith(""));

// console.log("  Yehor".trim().length);

// const userName = "Apple";
// console.log(userName.length);
// const test = userName.padEnd(6, "!");

// console.log(test);

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродаж';

// const string1 = 'Привіт, я Марк Цукерберг, це не спам, пропоную тобі мільйон!';
// const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
// const string3 = 'Рекламна кампанія #jsIsAwesome';

// console.log(string1.includes(blacklistedWord1));
// console.log(string2.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));
// console.log(string2.toLocaleLowerCase().includes(blacklistedWord2.toLocaleLowerCase()));
// console.log(string3.includes(blacklistedWord2));

// * Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .length, вивести в консоль кількість символів у рядку.
//  * Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .toUpperCase(), перетворити рядок у верхній регістр та вивести результат в консоль.
//  * Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .charAt(), вивести перший символ вашого імені в консоль.
//  * Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .indexOf(), знайти і вивести в консоль позицію, на якій знаходиться пробіл між ім'ям та прізвищем.
//  * Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .replace(), замінити першу літеру вашого імені на символ "@" та вивести результат в консоль.
//  * Створити змінну, яка містить рядок зі словом "JavaScript". Використовуючи метод .substring(), вивести підстроку, яка містить перші 4 символи слова "Java".

const name = "Yehor Brui";
// console.log(name.length);
// console.log(name.toUpperCase())
// console.log(name.charAt(0));
console.log(name.indexOf(" "));
// console.log(name.replace("Y", "@"));

// const text = "I am learning javascript";
// console.log(text.substring(13, 18));

// const notification = "Ваш баланс поповнено на 1";
// console.log(notification.length);
// console.log(notification.padEnd(26, "00"));



/**
 * Створити разом з учнями скрипт, який буде отримувати від користувача число (кількість хвилин) і буде виводити рядок в форматі часу як результат. Наприклад 80 виведе 01:20 450 - 07:30. Можете використати наступні формули
        const numberHours = отримане число / 60;
        const days = Math.floor(numberHours / 24);
        const hours = Math.floor(numberHours % 60);
        const modHours = String(hours).padStart(2, 0);
        const minutes = отримане число % 60;
        const modMinutes = String(minutes).padStart(2, 0); 
*/

const yourNumber = prompt("What's your number?");

const numberHours = yourNumber / 60;
console.log(numberHours)
const days = Math.floor(numberHours / 24);
console.log(days);
const hours = Math.floor(numberHours % 60);
console.log(hours);
const modHours = String(hours).padStart(2, 0);
console.log(modHours);

const yourNumber2 = prompt("What's your number?");

const minutes = yourNumber2 % 60;
console.log(minutes);
const modMinutes = String(minutes).padStart(2, 0);
console.log(modMinutes);























