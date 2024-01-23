// const str = "Hello";
// console.log(str.split(''));

// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];
// const reverseArr = names.join('');

// console.log(reverseArr);


// names.push('Yehor');
// console.log(names);
// names.pop();
// console.log(names);
// names.unshift('Marko');
// console.log(names);
// names.shift();
// console.log(names);

// const  slicedNames = names.slice(0,2)
// console.log(slicedNames);

// const arr1 = [5 , 2 , 6];
// const concArr = arr1.concat(names);

// console.log(concArr);

// const splicedName = names.splice(1 , 1)
// console.log(splicedName);

// console.log(names.splice(4, 0,  "Andrey", "Yehor"));
// console.log(names);

// console.log(names.splice(2, 1, "Yehor", "Andrey"));

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = friends.join(", ")
// console.log(string);

// const str = "JavaScript"

// let reverseStr = ""
// const strArr = str.split('')
// for (let character of strArr) {
//     if(character === character.toLowerCase()){
//         reverseStr += character.toUpperCase();
//     }else{
//         reverseStr += character.toLowerCase();
//     }
// }

// console.log(reverseStr);

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase("").split(" ").join("-");

// console.log(normalizedTitle);


const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const generalArr = array1.concat(array2);


let sum = 0;

for (let num of generalArr) {
    sum += num;
}

console.log(sum);



