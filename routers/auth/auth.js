const express = require('express')
const router = express.Router()
const { createsignupuser, login } = require('../../controllers/auth/auth')

router.route('/register').post(createsignupuser)
router.route('/login').post(login)


module.exports = router