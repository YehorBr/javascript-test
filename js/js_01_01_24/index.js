// const employees = 4;

// let totalSalary = 0;

// const minSalary = 500;
// const maxSalary = 5000


// for(let i = 1; i <= employees; i += 1){
//     const salary =Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(" salary: ", salary);    
    
//     totalSalary += salary
// }
// console.log(totalSalary);

// const min = 0;
// const max = 5; 
// let total = 0;

// for(let i = min; i <= max; i += 1){
//     if(i % 2 === 0){
//         total +=i
//     }
// }

// console.log(total);

for(let i = min; i <= max; i += 1){
    if(i % 2 !== 0){
        continue;
    }

    total += 1
}

console.log(total);