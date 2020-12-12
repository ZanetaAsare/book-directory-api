const {Router} = require('express')
const router = Router()

const {addBook} = require('../controllers/book')

// route to add book
router.post('/api/book/new', addBook)

module.exports = router