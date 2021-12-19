const mongoose = require('mongoose')

const AssetDetailsSchema = new mongoose.Schema({

    AssetName: {
        type: String,
        min: [2, 'This length is not accepted please try again'],
        required: [true, 'Kindly provide an asset name']
    },
    Type: {
        type: String,
        enum: ['monitor', 'keyboard', 'mouse', 'projector', 'laptop', 'desktop', 'printer', 'tv'],
        required: [true, 'Kindly enter an assset type ']
    },
    TagNumber: {
        type: String,
        required: [true, 'Kindly enter a tag number']
    },
    Warranty: {
        type: Boolean,
        default: false
    },
    AssetSn: {
        type: String,
        required: [true, 'Please provide serial number']
    },
    EmployeeNumber: {
        type: String,
        required: [true, 'Please enter employee Id']
    },
    Model: {
        type: String,
    },
    Address:{
        type:String,
        required:[true,'Please enter address']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('AssetDetails', AssetDetailsSchema)