const {Router} = require('express')
const router = Router()

const {addAuthor, getAuthors} = require('../controllers/author')

// add author
router.post('/authors/new', addAuthor)

// get authors
router.get('/authors', getAuthors)

module.exports = router