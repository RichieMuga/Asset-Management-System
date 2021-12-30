const mongoose = require('mongoose')
const connectdb = (url) => {
   mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
}
module.exports = { connectdb }
//usecreateindex, usefindandmodify