const {Router} = require('express')
const router = Router()

const {addAuthor} = require('../controllers/author')

// add author
router.post('/authors/new', addAuthor)

module.exports = router