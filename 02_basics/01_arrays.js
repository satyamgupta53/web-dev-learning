const arr = [1, 2, 3, 4, 5];
console.log(`[${arr}] , ${arr.length}`);

/*
push() - adds an element to the end of the array
pop() - removes the last element from the array
shift() - removes the first element from the array
unshift() - adds an element to the beginning of the array
splice() - removes or replaces elements from the array // arr.splice(1, 2, 6, 7) removes 2 ele starting from index 1 & adds 6 & 7
slice() - returns a copy of the array // arr.slice(1, 3) returns [2, 3]
concat() - concatenates two arrays
indexOf() - returns the first index of the element
lastIndexOf() - returns the last index of the element
includes() - returns true if the element is present
find() - returns the first element that satisfies the condition
forEach() - iterates through the array
*/

console.log(arr.join(" ")); // 1 2 3 4 5

let arr2 = new Array(1, 2, 3, 4, 5, 6);
console.log("A ", arr2);
arr2.splice(1, 3);
console.log("B ", arr2);

console.log("C ", [... arr2, ... [1, 2, 3]]); // spread operator

// flat - flattens the array
let arr3 = [1, 2, [3, 4, [5, 6]]];
console.log("D ", arr3.flat(1)); // [1, 2, 3, 4, [5, 6]]

// array functions
let arr4 = [1, 2, 3, 4, 5];
console.log(Array.isArray("arr4")); // true
console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']
console.log(Array.of(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]