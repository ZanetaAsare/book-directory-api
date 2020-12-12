const {Router} = require('express')
const router = Router()

const {addAuthor, getAuthors, getAuthorByID, deleteAuthor} = require('../controllers/author')

// add author
router.post('/authors/new', addAuthor)

// get authors
router.get('/authors', getAuthors)

// get authors by id
router.get('/authors/authorId', getAuthorByID)

// delete author
router.delete('/authors/authorId/delete', deleteAuthor)

module.exports = router