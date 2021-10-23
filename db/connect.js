const mongoose= require('mongoose')
const connectdb=(url)=>{
   return mongoose.connect(url,{
    useNewUrlParser: true,
   })
}
module.exports={connectdb}
//usecreateindex, usefindandmodify 