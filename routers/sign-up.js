const express=require('express')
const router=express.Router()
const {createsignupuser}=require('../controllers/sign-up')

router.route('/').post(createsignupuser)

module.exports=router