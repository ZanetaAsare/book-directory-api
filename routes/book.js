const {Router} = require('express')
const router = Router()

const {addBook, getBooks, getBookByID} = require('../controllers/book')

// route to add book
router.post('/books/new', addBook)

// route to get all books
router.get('/books', getBooks)

// get book by ID
router.get('/books/:bookId', getBookByID)

module.exports = router
