/*
// for loop
for (let i = 0; i < 10; i++) {
    const element = i
    if(i % 2 === 0) continue
    if(i === 5) break
    // console.log(element)
} // 1 3

// while loop
let i = 0
while(i <= 10) {
    if(i % 2 === 0) continue
    // console.log(`Value of i is ${i}`)
    i++
} // 1 3 5 7 9

// do while loop
let j = 0
do {
    if(j % 2 === 0) continue
    // console.log(`Value of j is ${j}`)
    j++
}
while(j <= 10) // 1 3 5 7 9
*/

/*
// looping on the arrays
const arr = [1, 2, 3, 4, 5]

// for of loop
for (const ele of arr) {
    console.log(ele);
}

// for in loop
for (const index in arr) {
    console.log(index);
}
*/

// maps and sets
const map = new Map()
map.set('name', 'John')
map.set('age', 30)
map.set('occupation', 'developer')

for (const [key, value] of map) {
    console.log(`Key is ${key} and value is ${value}`)
}

/*
const set = new Set()

set.add(1)
set.add(2)
set.add(3)

for (const ele of set) {
    console.log(ele)
}
*/

// objects are not iterable through for of loop
const obj = {
    name: 'John',
    age: 30,
    occupation: 'developer'
}

for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        const value = obj[key]
        console.log(`Key is ${key} and value is ${value}`)
    }
}

// for each loop
const arr = ["python", "javascript", "java", "c++", "ruby", "go"]
// arr.forEach(
//     function (item) {
//         console.log(item)
// }) // callback function doesnot return anything, does not has function name

arr.forEach((item, index, arr) => {
    console.log(`Index is ${index} and item is ${item}`)
})