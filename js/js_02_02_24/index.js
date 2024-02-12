// let number = 5;
// const number2 = number;

// number = 25;
// console.log(number);
// console.log(number2);

// // console.log(number === number2);
// // console.log('Hello' === 'Hello');
// const arr1 = [];
// const arr3 = arr1;

// arr1.push(10)
// console.log(arr1);
// console.log(arr3);


// console.log(arr1 === arr3);
// console.log([1, 2, 3] === [1, 2, 3]);

// const a = function(){

// }

// const b = a

// console.log(a === b);









// const getUserName = function(name){
// console.log('Hello', name);
// }

// const logName = function(userName, cb){
//     cb(userName)
// }

// logName('Mary', getUserName)




// const fnA = function(){
//     function name() {}


// }

// const fnB = (name)=>{
//     console.log(`Hi, ${name}!`);
// }

// fnB('Yehor')



const logItems = (items)=>{

    for (let item of items) {
        console.log(item);
    }
}

logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);
