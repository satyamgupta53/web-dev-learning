let myDate = new Date();
console.log(myDate.toString()); // output: Thu Jul 01 2021 12:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // output: Thu Jul 01 2021
console.log(myDate.toLocaleString('default', {weekday: "long"})); // output: 7/1/2021, 12:00:00 AM
console.log(myDate.toLocaleDateString()); // output: 7/1/2021
console.log(myDate.toUTCString()); // output: Thu, 01 Jul 2021 07:00:00 GMT
console.log(myDate.toISOString()); // output: 2021-07-01T07:00:00.000Z

let myDate2 = new Date(2023, 0, 12, 10, 30, 15, 0);
let myDate3 = new Date("2023-01-12T14:30:15");
console.log(myDate2.toLocaleString());
console.log(myDate3.toLocaleString());

let myDate4 = Date.now(); // current timestamp
console.log(myDate4);
console.log(Math.floor(myDate4 / 1000 / 60 / 60 / 24 / 365)) // gives the age in years

let myDate5 = new Date();
console.log(myDate5.getMonth() + 1); // output: 6
console.log(myDate5.getDate()); // output: 1
console.log(myDate5.getHours()); // output: 12
console.log(myDate5.getMinutes()); // output: 0
console.log(myDate5.getSeconds()); // output: 0
