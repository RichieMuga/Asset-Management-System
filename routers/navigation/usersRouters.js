const { getSingleUser, updateUser, updateUserPassword, getAllUsers, showmeCurrentUser } = require('../../controllers/navigation/usersController')
const { authentication, authorizePermission } = require('../../middleware/authentication')
const express = require('express')
const router = express.Router()

// router.route('/onlineusers').get(showCurrentUsers)
router.route('/').get(authentication, authorizePermission('admin'), getAllUsers)
router.route('/updatepassword').patch(authentication, updateUserPassword)
router.route('/updateuser').patch(authentication, updateUser)
router.route('/showMe').get(authentication, showmeCurrentUser)


router.route('/:id').get(authentication, getSingleUser)


module.exports = router