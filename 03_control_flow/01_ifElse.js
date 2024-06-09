// switch statements
// let day = 2; // Tuesday
// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     default:
//         console.log('Invalid day');
// }

// falsy values : false, 0, -0, 0n, "", null, undefined, NaN
// truthy values : true, 1, -1, "0", "false", [], {}, function(){}

const arr = []
if(arr.length !== 0) console.log('Full array');

const obj = {}
if(Object.keys(obj).length !== 0) console.log('Full object');

// Nullish coalescing operator (??)
let val1;
val1 = 5 ?? 10; // if left side is null or undefined, then right side value is assigned
val2 = null ?? 20; // 20
// console.log(val1);

// Ternary operator used to assign value based on condition ? true : false
let age = 20;
let type = age >= 18 ? 'Adult' : 'Child';
console.log(type);