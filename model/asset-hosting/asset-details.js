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
        required: [false, 'Kindly enter an assset type ']
    },
    TagNumber: {
        type: String,
        required: [true, 'Kindly enter a tag number'],
        unique: true
    },
    Warranty: {
        type: Boolean,
        default: false
    },
    AssetSn: {
        type: String,
        required: [true, 'Please provide serial number'],
        unique: true
    },
    EmployeeNumber: {
        type: String,
        required: [true, 'Please enter employee Id']
    },
    Model: {
        type: String,
    },
    Address: {
        type: String,
        required: [false, 'Please enter address']
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
},
    { timestamps: true }
)


module.exports = mongoose.model('AssetDetails', AssetDetailsSchema)