const CustomAPIError=require('../errors/customError')


const createsignupuser=async(req,res)=>{
    const{Firstname,Lastname,Email,password,confirmPassword}=req.body
    if(!Firstname||!Lastname||!Email||!password||!confirmPassword){
      throw new Error("please provide appropriate credentials",400)
    }
   await res.status(200).json({msg:'success',data:req.body})       
}
const getsign_up_page=async(req,res)=>{
    try {
    await res.status(200).json({msg:'success,get request for signup page'})        
    } catch (error) {
    console.log(error)  
    }
}
module.exports={createsignupuser,getsign_up_page}