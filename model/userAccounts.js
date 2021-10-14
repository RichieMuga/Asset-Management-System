const mongoose= require('mongoose')
const assetCreationSchema = new mongoose.Schema({
  
    firstname:{
        any: mongoose.Mixed,
        require:[true,'Kindly provide a firstname']
        },
    lastname:{
        any: mongoose.Mixed,
        require:[true,'Kindly enter a lastname']
        },
    username:{
        any: mongoose.Mixed,
        require:[true,'Kindly enter a username']
        },
    email:{
        type:String,
        require:[true,'Provide a valid email']
        },
    createdAt:{
        type:Date,
        default:Date.now()
        }
})

module.exports=mongoose.model('AssetCreation',assetCreationSchema)