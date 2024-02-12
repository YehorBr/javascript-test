// const fnA = function (a = 10, b = 15){

//     return a + b
// }

// console.log(fnA());

// console.log(fnB());

// function fnB(){
//     return 20;
// }

// const calculateTotalPrice = function(items){
//     let sum = 0;

//     for (let item of items) {
//         sum += item;
//     }

//     return sum;
// }

// console.log(calculateTotalPrice([1, 2, 3])); 
// console.log(calculateTotalPrice([5, 10, 15, 20])); 
// console.log(calculateTotalPrice([100, 200, 300]));

// const logItems = function(items){

//     for (let item of items) {
//         console.log(item);
//     }
// }

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);

// * Напиши скрипт пошуку логіна
// * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
// * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
// */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const loginToFind = 'aj4xth3m4n';

// const findLogin = function(logins, loginToFind){
//     for (let login of logins) {
//         if(login === loginToFind){
//             console.log(`Користувач ${loginToFind} знайдено.`);
//         }else{
//             console.log(`Користувач ${loginToFind} не знайдено`);
//         }
//     }
// }


// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

// let reverseStr = ""
// const strArr = str.split('')
// for (let character of strArr) {
//     if(character === character.toLowerCase()){
//         reverseStr += character.toUpperCase();
//     }else{
//         reverseStr += character.toLowerCase();
//     }
// }

const changeCase = function(word){
    let reverseStr = "";
    for (let character of word){
        if(character === character.toLowerCase()){
            reverseStr += character.toUpperCase();
        }else{
            reverseStr += character.toLowerCase();
        }
    }
    return reverseStr;
}


console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX