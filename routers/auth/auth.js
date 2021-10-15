const express=require('express')
const router=express.Router()
const {createsignupuser}=require('../../controllers/auth/auth')

router.route('/auth').post(createsignupuser)

module.exports=router