const {Router} = require('express')
const router = Router()

const {addBook, getBooks} = require('../controllers/book')

// route to add book
router.post('/books/new', addBook)

// route to get all books
router.get('/books', getBooks)

module.exports = router
