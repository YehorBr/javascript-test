// const calculateTotalPrice = function (... args){
//     // const args = Array.from(arguments)
//     console.log(args);

//     let total = 0;

//     for(let arg of args){
//         total += arg
//     }

//     return total;   
// }

// calculateTotalPrice();


// const result = calculateTotalPrice(1, 2, 3);
// console.log(result);
 
// calculateTotalPrice(5, 10, 15, 20); 
// calculateTotalPrice(100, 200, 300)

/*
     * Напиши функцію filterNumbers(array [, number1, ...]) яка:
     * - першим аргументом приймає масив чисел
     * - після першого аргумента може бути довільна кількість інших аргументів які будуть числами,
     * - Функція повина повернути новий масив, в якому будуть тільки ті аргументи, починаючи з другого,
     *   для яких є аналог в оригінальному масив.
     */


    const filterNumbers = function(array, ...args){
        console.log(args);

        let equalNumbers = [];
        for(let arg of args){{
            const isEqual  = array.includes(number);
            if(isEqual){
                equalNumbers.push(number);
            }
        }

        return equalNumbers;
        }
    }

    console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
    console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
    console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]