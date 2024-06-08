const accountId = 12115007
let accountEmail = "satyamgupta@gmail.com" // modified var to avoid scope problem
var accountPassword = "12345678" // creates a scope problem
accountCity = "Jaipur" // not recommended

/* Prefer not to use var for assignment due to issue in block scope & functional scope*/
// accountId = 10283923 // not allowed for constant

let accountState;
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])