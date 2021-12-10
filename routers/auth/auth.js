const express = require('express')
const router = express.Router()
const { createsignupuser, login, logout } = require('../../controllers/auth/auth')

router.route('/register').post(createsignupuser)
router.route('/login').post(login)
router.route('/logout').get(logout)


module.exports = router