const result = function addTwoNumbers(num1, num2) { // this is an expressions
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Invalid input';
    }
    let result = num1 + num2;
    return result;
}

const isLogged = function loginUserMessage(username = undefined) {
    if(!username.trim()) return false;
    console.log(`Welcome ${username}`);
    return true;
}

// console.log(isLogged('John')); // Welcome John

function calculatePrice(... args) { // taking multiple arguments, ignore the rest body for now
    return args.reduce((acc, curr) => acc + curr, 0)
}

// console.log(calculatePrice(10, 20, 30, 40, 50)); // 150

function one() {
    const username = "hitesh";
    function two() {
        const website = "youtube";
        console.log(username);
    }
    two()
    console.log(website); // ReferenceError: website is not defined
}

// -------------------------------- Interesting --------------------------------

// greet()
function greet() {
    console.log('Hello World');
} // this runs before the function declaration

// greets()
const greets = function greeting () {
    console.log('Hello World');
} // this will throw an error, because it is an expression

// this keyword importance
username = {
    name: 'Satyam',
    password: '1233',
    login: function() {
        console.log(`${this.name} has successfully logged in !`)
    }
}

// username.login() // Satyam has successfully logged in !
// username.name = 'Hitesh'
// username.login() // Hitesh has successfully logged in !

// console.log(this) // this will refer to the global object {} , in browser it will refer to window object as it is global object

function chai() {
    let name = 'english'
    console.log(this.name) // undefined as it is not defined in the global object
    console.log(this) 
    /*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: value],
  navigator: [Getter],
  crypto: [Getter],
  username: { name: 'Satyam', password: '1233', login: [Function: login] }
}
    */
}

// arrow function
const chai1 = () => {
    let mail = 'satyam@outlook.com'
    console.log(this)
}

// chai1() // {} as it is not defined in the global object

const add = (a, b) => a + b // one liner function
// console.log(add(100, 200)); 
