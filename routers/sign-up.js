const express=require('express')
const router=express.Router()
const {createsignupuser,getsign_up_page}=require('../controllers/sign-up')

router.route('/signup').get(getsign_up_page).post(createsignupuser)

module.exports=router