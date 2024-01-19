// const yourNumber = prompt("What's your number?");

// if (yourNumber > 0 ){
//     alert("1");
// }
// else if (yourNumber < 0 ){
//     alert("-1");
// }
// else if (yourNumber === 0 ){
//     alert("0");
// }

// const x1 = 10;
// const x2 = 30;
// const num = 15;

// if (num < x1) {
//     console.log("до х1");
// }
// else if (num > x1) {
//     console.log("після х1");
// }
// else if (num > x1 && num < x2) {
//     console.log("від х1 до х2");
// }
// else if (num < x1 || num > x2) {
//     console.log("до х1 або після х2");
// }


// const result = a + b < 4 ? 'Нижче': 'Вище';

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isFriend && isOnline && !isDnd

// console.log(canOpenChat);

const option = "кур'єр"
let message

switch (option) {
    case "самовивіз":
        message = "Ви зможете забрати товар завтра з 12:00 в нашому офісі"
        break;
    case "кур'єр":
        message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00"
        break;    
    case "пошта":
        message = "Посилка буде відправлена сьогодні"
        break;  
    default:
        message = "Вам передзвонить"
        break;
}

console.log(message);