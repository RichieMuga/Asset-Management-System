const { getSingleUser, showCurrentUsers, updateUser, updateUserPassword, getAllUsers } = require('../../controllers/navigation/usersController')
const { authentication } = require('../../middleware/authentication')
const express = require('express')
const router = express.Router()

router.route('/onlineusers').get(showCurrentUsers)
router.route('/').get(authentication, getAllUsers)
router.route('/updatepassword').patch(updateUserPassword)
router.route('/updateuser').patch(updateUser)

router.route('/:id').get(getSingleUser)


module.exports = router