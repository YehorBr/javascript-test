// // * Працюємо з колекцією товарів в кошику:
// // * - getItems()
// // * - add(product)
// // * - remove(productName)
// // * - clear()
// // * - countTotalPrice()
// // * - increaseQuantity(productName)
// // * - decreaseQuantity(productName)
// // *
// // * { name: '🍎', price: 50 }
// // * { name: '🍇', price: 70 }
// // * { name: '🍋', price: 60 }
// // * { name: '🍓', price: 110 }
// // */

// const cart = {
//     items: [
//     ],
//     getItems() { console.log(this.items);},
//     add(product) {
//         const newProduct = {
//             ...product,
//             quantity: 1,
//         }
//         for (const item of this.items){
//             if(item.name === product.name){
//                 item.quantity += 1

//                 return
//             }
//         }
//         this.items.push(newProduct)
//     },
//     remove(productName) {
//         let index;
//         for (const item of this.items) {
//             if(item === productName){
//                 index = this.items.indexOf(item)

//                 this.items.splice(index, 1)
//             }
//         }
//         return this.items
//     },
//     clear() {},
//     countTotalPrice() {},
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
//     };

//     cart.add({ name: '🍎', price: 50 })
//     cart.add({ name: '🍇', price: 70 })
//     cart.add({ name: '🍋', price: 60 })
//     cart.add({ name: '🍓', price: 110 })

// // const a = [10, 20];
// // const b = [40, 50];
// // const c = [...a, ...b]
// // console.log(c);
// console.log(
// Object.keys({a: 5, b:10 }));


// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     features: ['power windows', 'rear camera', 'navigation'],
//     safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true
//     }
//     }

// const {make, model, year, features, safety: {airbags, antilock_brakes, stability_control}} = car;
// // const {airbags, antilock_brakes, stability_control} = safety;
// console.log(model, antilock_brakes);


// const person = {
//     name: 'Nelli',
//     surname: 'Laroy',
//     age: 25
//     };
    
    // const personInfo = function ({name, surname, age}){
    //     // const {name, surname, age} = a
    //     return `Мене звати ${name} ${surname} і мені ${age} років`
    // }

//     console.log(personInfo(person));

// const student = {
//     name: 'Bruce',
//     surname: 'Lee',
//     grades: [4, 5, 3]
//     };

//  const calculateAverageGrade = function({name, surname, grades}){
//     let avgGrade = 0;

//     for (const grade of grades) {
//         avgGrade += grade   
//     }
    

//     return `Середній бал ${name} ${surname}:  ${avgGrade / grades.length}`
//  }
 
//  console.log(calculateAverageGrade(student));


// const items = [
//     { name: 'Футболка', price: 250, quantity: 2 },
//     { name: 'Джинси', price: 800, quantity: 1 },
//     { name: 'Кросівки', price: 1200, quantity: 1 }
//     ];

//     const calculateTotalCost = function (products){
//         let totalCost = 0;

//         for (const product of products) {
//           totalCost += product.price * product.quantity
//         }

//         return totalCost
//     }

//     console.log(calculateTotalCost(items));



// Задача 4

// Напишіть функцію, яка отримує об'єкт зі списком електронних адрес (поле "emails") та використовує деструктуризацію для повернення першої адреси в цьому списку.
// const person = {
// name: 'John',
// emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
// };

// console.log(getFirstEmail(person)); // 'john@gmail.com'

// const person = {
//     name: 'John',
//     emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
//     };


//   const getFirstEmail = function({emails: [firstEmail] }){
//     return firstEmail
//   }  

//   console.log(getFirstEmail(person)); // 'john@gmail.com'