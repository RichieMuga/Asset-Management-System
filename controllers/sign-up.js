const CustomAPIError=require('../errors/customError')
const createsignupuser=async(req,res)=>{
    try {
    await res.status(200).json({msg:'success',data:req.body})    
    } catch (error) {
    console.log(error) 
    }
   
}
const getsign_up_page=async(req,res)=>{
    try {
    await res.status(200).json({msg:'success,get request for signup page'})        
    } catch (error) {
    console.log(error)  
    }
}
module.exports={createsignupuser,getsign_up_page}