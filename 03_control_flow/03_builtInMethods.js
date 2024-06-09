const nums = [10, 13, 15, 18, 20, 25]

const newNums = nums.filter((num) => num % 2 === 0) // [10, 18, 20] those who satisfy the condition

const books = [
    { title: 'Book1', author: 'Author1', price: 100, pages: 200, rating: 4.5, edition: 1 },
    { title: 'Book2', author: 'Author2', price: 200, pages: 300, rating: 4.0, edition: 2 },
    { title: 'Book3', author: 'Author3', price: 300, pages: 400, rating: 4.2, edition: 3 },
    { title: 'Book4', author: 'Author4', price: 400, pages: 500, rating: 4.8, edition: 4 },
    { title: 'Book5', author: 'Author5', price: 500, pages: 600, rating: 4.3, edition: 5 },
    { title: 'Book6', author: 'Author6', price: 600, pages: 700, rating: 4.7, edition: 6 },
    { title: 'Book7', author: 'Author7', price: 700, pages: 800, rating: 4.1, edition: 7 },
    { title: 'Book8', author: 'Author8', price: 800, pages: 900, rating: 4.6, edition: 8 },
    { title: 'Book9', author: 'Author9', price: 900, pages: 1000, rating: 4.4, edition: 9 },
    { title: 'Book10', author: 'Author10', price: 1000, pages: 1100, rating: 4.9, edition: 10 }
]

// filter books with price less than 500
const cheapBooks = books.filter((book) => book.price < 500)
// console.log(cheapBooks)

// filter books with rating greater than 4.5
const goodBooks = books.filter((book) => book.rating > 4.5)
// console.log(goodBooks)

// map books to their titles
const bookTitles = books.map((book) => book.title)
// console.log(bookTitles)

// reduce to get total price of all books
const totalPrice = books.reduce((acc, curr) => acc + curr.price, 0)
console.log(totalPrice)
