const express = require('express')
const router = express.Router()
const { createsignupuser, getsignup } = require('../../controllers/auth/auth')

router.route('/auth').post(createsignupuser)
router.route('/sign-up').get(getsignup)

module.exports = router