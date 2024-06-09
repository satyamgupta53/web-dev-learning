// singleton object means that there is only one instance of the object in the program, by default all objects are singleton objects
const symbol = Symbol('satyam');

const jsUser = {
    name: 'John',
    [symbol]: 'satyam',
    age: 30,
    "isAdmin": true,
    email: 'john123@gmail.com',
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(jsUser.name) // John
// console.log(jsUser['age']) // 30
// console.log(jsUser["isAdmin"]) // SyntaxError: Unexpected string for jsUser.isAdmin

// jsUser.email = "john456@gmail.com"
// Object.freeze(jsUser) // this will make the object immutable
// jsUser.email = "john123@microsoft.in"
// console.log(jsUser.email)

jsUser.greeting = function () {
    console.log(`Hello JS User ! named ${this.name} and email is ${this.email}`);
    return this;
}

console.log(jsUser.greeting()); // jsUser.greeting is not a function, returns a reference