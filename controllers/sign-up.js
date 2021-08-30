const createsignupuser=(req,res)=>{
    res.status(200).json({msg:'success',data:req.body})
}
// const getsign_up_page=(req,res)=>{
//     res.status(200).json({msg:'success'})
// }
module.exports={createsignupuser}