const express=require('express')
const router=express.Router()
const {createsignupuser}=require('../../controllers/auth/auth')

router.route('/signup').post(createsignupuser)

module.exports=router