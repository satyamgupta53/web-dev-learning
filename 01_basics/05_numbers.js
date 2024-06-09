const score = new Number(100);
console.log(score); // [Number: 100]
console.log(score.toFixed(2)); // 100.00

const num1 = 1000000.9213;
console.log(num1.toPrecision(7)) // 1000001
console.log(num1.toLocaleString('en-IN')) // 10,00,000.921

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Math object
console.log(Math.PI); // 3.141592653589793
console.log(Math.round(4.7)); // 5
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.abs(-4.7)); // 4.7
console.log(Math.ceil(4.4)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

/* very useful */
console.log(Math.random()); // random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); // random number between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10

const max = 20, min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 10 and 20
