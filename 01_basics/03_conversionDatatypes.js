let score = "33abc"
console.log(typeof score); // string
console.log(typeof (score)); // string

let convertedScore = Number(score)
console.log(typeof convertedScore, convertedScore); // takes as Not in Number (NaN)

/*
true => 1
numeric string => number
alphanumeric string => NaN
number => number
null => 0
undefined => NaN
*/

let isLoggedIn = null
let booleanLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanLoggedIn, booleanLoggedIn) // boolean false

/*
1 => true, 0 => false
non-empty string => true
empty string => false
number => true
undefined => false
null => false
*/

let number = undefined
let stringFromNumber = String(number)
console.log(typeof stringFromNumber, stringFromNumber); // string undefined

// string function converts every data type in a string type

let str1 = "Hello"
let str2 = " World !"
let str3 = str1 + str2
console.log(typeof str3); // string

console.log("1" + 2 + 2); // 122 String consideration
console.log(1 + 2 + "2"); // 32 Number then string

// === is called strict check as also check value & data types
// avoid comparisions involving null & undefined

// Primitive - call by value, (String, Number, Boolean, Null, Undefined, Symbol, BigInt), changes occurs in copy of value not in original
// Non-Primitive - call by references, (Array, Object, Functions)
// Dynamically typed - JavaScript, Statically typed - TypeScript

const symbol1 = Symbol('1234')
const symbol2 = Symbol('1234')
console.log(symbol1 === symbol2); // false