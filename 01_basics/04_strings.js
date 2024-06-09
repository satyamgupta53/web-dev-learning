const name1 = "satyam gupta  "
const repoCount = 20

// console.log(name + repoCount); not used now
console.log(`My name is ${name1} and I have ${repoCount} repositories.`) // template literals
console.log(typeof repoCount.toString()); // string

const email = new String('satyam@gupta.com');
console.log(email.__proto__.length); // prototype of string has 0 length

// String methods
console.log(name1.length); // 13
console.log(name1.toUpperCase()); // SATYAM GUPTA {original string is not changed}
console.log(name1.toLowerCase()); // satyam gupta {original string is not changed}
console.log(name1.charAt(0)); // s {index starts from 0}
console.log(name1.indexOf('g')); // 7 {first occurence}
console.log(name1.lastIndexOf('a')); // 11 {last occurence}
console.log(name1.startsWith('satyam')); // true {case sensitive}  
console.log(name1.endsWith('gupta')); // false {case sensitive}
console.log(name1.includes('yam')); // true {case sensitive}
console.log(name1.substring(1, -1)); // atyam (negative values are not allowed)
console.log(name1.slice(1, -1)); // atyam (same as substring) as negative values are allowed
console.log(name1.split(' ')); // [ 'satyam', 'gupta' ] {splits the string into array}
console.log(name1.replace('satyam', 'satyam gupta')); // satyam gupta gupta 
console.log(name1.trim()); // satyam gupta (removes extra spaces)
console.log(name1.repeat(3)); // satyam gupta  satyam gupta  satyam gupta 