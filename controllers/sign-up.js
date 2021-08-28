createsignupuser=(req,res)=>{
    res.status(200).json({msg:'success',data:req.body})
}
module.exports={createsignupuser}