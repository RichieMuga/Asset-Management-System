const mongoose= require('mongoose')
const connectdb=(url)=>{
   return mongoose.connect(url,{
       useUnifiedTopology:true,
       useCreateIndex:true,
       useFindAndModify:false,
       useNewUrlParser:true
   })
}
module.exports=connectdb