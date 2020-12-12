const {Router} = require('express')
const router = Router()

const {addAuthor, getAuthors, getAuthorByID} = require('../controllers/author')

// add author
router.post('/authors/new', addAuthor)

// get authors
router.get('/authors', getAuthors)

// get authors by id
router.get('/authors/authorId', getAuthorByID)

module.exports = router