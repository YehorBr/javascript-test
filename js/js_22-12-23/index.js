
// if (2 > 5) {
//     console.log("це правда");
// } else {
//     console.log("це не правда");
// }

// let totalPrice;
// const quantity = 0;
// const price = 100;

// if (quantity >= 2) {

//     totalPrice =  quantity * price;    

// } else {
    
//     alert('insufficiently');
// }


// const totalSpent = 2000;
// let payment = 500;
// let discount = 0 ;

// if (totalSpent > 100 && totalSpent < 1000) {
//     discount = 2;
//     payment -= payment * discount / 100;

//     alert(`Бронзовий партнер, знижка ${discount}% досплати: ${payment}`);
// }

// else if (totalSpent > 100 && totalSpent < 5000 ) {
//     discount = 5;
//     payment -= payment * discount / 100;

//     alert(`срібний  партнер, знижка ${discount}% досплати: ${payment}`);
// }

// else if (totalSpent > 5000 ) {
//     discount = 10;
//     payment -= payment * discount / 100;

//     alert(`золотий партнер, знижка ${discount}% досплати: ${payment}`);
// }

// else if (totalSpent < 100 ) {
//     alert("Ви не партнер");
// }



// 2. Додаткові завдання
// Що буде в консолі
// if ("0") {
//  console.log( 'Привіт' );
// }
// Використовуючи конструкцію if..else, напишіть код, що запитує: ‘Яка “офіційна” назва JavaScript?’ Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”
// Використовуючи if..else, напишіть код, що отримує число з інпуту і потім виводить повідомлення на екран:
// 1, якщо значення більше нуля,
// -1, якщо меньше нуля,
// 0, якщо дорівнює нулю.
// Перепишіть конструкцію if, використовуючи умовний оператор '?':
// let result;
// if (a + b < 4) {
//   result = 'Нижче';
// } else {
//   result = 'Вище';
// }
// 3. Творчі завдання
// напиши скрипт входження числа у відрізок зазначений в х1 та х2.
// до х1
// після х1
// від х1 до х2
// до х1 або після х2
// const x1 = 10;
// const x2 = 30;
// const number = 45;
// Напиши скрипт який перевіряє можливість відкрити чат з користувачем. Для цього користувач має бути:
// другом
// онлайн
// без режиму не турбувати
// const isOnline = false;
// const isFriend = true;
// const isDnd = false;
// Напиши скрипт перевірки підписки користувачапід час доступу до контенту. Єтри типи підпистки: free, pro та vip. Отримати доступ можуть тільки pro та vip.
// Напиши скрипт обробки покупки в магазині. 
//   1. Баланс користувача зберігається в змінній balance — отримати з інпуту
// Сумма покупки зберігається в змінній payment — отримати з інпуту
// Перед перевіркою вивести повідомлення на екран:
//   «Загальна вартість замовлення [число] кредитів. Перевіряємо кількість 
//   доступних коштів на рахунку»
// Якщо сума покупки не перевищує баланс:
// Відняти з балансу суму покупки
// Вивести повідомлення «На рахунку залишилося [число] кредитів»
// Якщо сума покупки перевищує баланс:
// Вивести повідомлення «На рахунку недостатньо коштів для проведення операції!»
// В кінці вивести повідомлення «Операція завершена»


// const question = prompt("Яка справжня назва js ? "); 

// if (question === "ECMAScript" ) {
//     console.log("Це правильно");
// }

// else {
//     console.log("Ви не знаєте? ECMAScript!");
// }

// const yourNumber = prompt("What's your number?")

// if ( yourNumber > 0){
//     alert(" 1 ");
// }

// else if (yourNumber < 0){
//     alert(" -1 ");
// }

// else if (yourNumber === 0 ){
//     alert(" 0 ");
// }

// const x1 = 10;
// const x2 = 30;
// const number = 45;

// if () {}