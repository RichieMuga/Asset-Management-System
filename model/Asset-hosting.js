const mongoose= require('mongoose')
const assetCreationSchema = new mongoose.Schema({
    employeeNumber:{
        type:Number,
        require:[true,'Kindly provide employee ID']
    },
    assetName:{
        type:String,
         enum:{
            values:['Laptops,Desktops,Mouse,Keyboards,Ups,Monitors'],
            message:`${VALUES} is not supported`
        }
        },
    tagNumber:{
        any: mongoose.Mixed,
        require:[true,'Kindly enter a tag number']
        },
    warranty:{
        type:Boolean,
        default:[false]
        },
    location:{
        type:String,
        require:[true,'Kindly provide a city or specific location']
        },
    createdAt:{
        type:Date,
        default:Date.now()
        }
})

module.exports=mongoose.model('AssetCreation',assetCreationSchema)