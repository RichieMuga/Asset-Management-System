const express = require('express')
const router = express.Router()
const { createsignupuser, login } = require('../../controllers/auth/auth')

router.route('/auth').post(createsignupuser, login)

module.exports = router