// for(let i = 1; i<=5; i+=1){
//     console.log(i);
// }

// let num = 1;
// while(num <= 5){

//     console.log(num);
//     num+=1;
// }

// let number = 1;
// do{
//     console.log(number);
//     number +=1   
// } while(number <= 5)

// const min = 1;
// const max = 10; 

// for(let i = max; i >= min; i-=1){
//     if(i === 6){
//         break
//     }
//     console.log(i);
// }

// const min = 1;
// const max = 12;

// for(let i = min; i <= max; i+=1){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// let age = 0;

// while(age <= 18){
    
//     console.log(age);
//     age += 1
// }

let number;

for(let i = 100; i < number; i = i){
    number = Number(prompt("Write your number which more then 100"));
    if(number > 100){
        console.log("your number more then 100");
        break
    }
    else{
        console.log("write your number again");
    }
}