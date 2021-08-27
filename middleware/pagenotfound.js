//The error massage will be displayed if the page is not found
const pagenotfound=(req,res)=>{
    res.status(400).json({success:true,msg:'page not found'})
}
module.exports=pagenotfound