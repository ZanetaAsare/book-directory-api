const {Router} = require('express')
const router = Router()

const {signup, login, logout} = require('../controllers/admin')

// admin signup route
router.post('/api/admin/new', signup)

// admin login
router.post('/api/admin/login', login)

module.exports = router