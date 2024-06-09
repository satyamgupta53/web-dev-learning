const User = new Object(); // constructor function used for singleton object
const user = {} // object literal used for non-singleton object

user.id = 12115007;
user.name = 'satyam';
user.email = 'satyam@gmail.com';
user.isAdmin = true;

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        firstName: "Some",
        lastName: "One"
    }
}

// console.log(regularUser['fullName']['firstName']); // Some

const obj1 = { 1: 'one', 2: 'two' };
const obj2 = { 3: 'three', 4: 'four' };
// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }

// handling data base values
const users = [
    { 
        id: 1, 
        name: 'satyam' 
    },
    { 
        id: 2, 
        name: 'rahul' 
    },
]

// console.log(users); // [ { id: 1, name: 'satyam' }, { id: 2, name: 'rahul' } ]
// console.log(Object.keys(regularUser)); // [ 'email', 'fullName' ]
// console.log(Object.values(regularUser)); // [ 'some@gmail.com', { firstName: 'Some', lastName: 'One' } ]
// console.log(Object.entries(regularUser)); // returns array of arrays
// console.log(regularUser.hasOwnProperty('email')); // true

// Destructuring objects & JSON api's
const course = {
    courseName: "JavaScript",
    duration: "3 months",
    instructor: "Satyam"
}

const {courseName: c, duration: d} = course;
console.log(c, d); // JavaScript 3 months

// api link : https://api.github.com/users/satyamgupta53