const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    Firstname: {
        type: String,
        min: [2, 'This length is not accepted please try again'],
        max: 50,
        required: [true, 'Kindly provide a firstname']
    },
    Lastname: {
        type: String,
        min: [2, 'This length is not accepted please try again'],
        max: 50,
        required: [true, 'Kindly enter a lastname']
    },
    username: {
        type: String,
        required: [true, 'Kindly enter a username']
    },
    Email: {
        type: String,
        required: [true, 'Please provide an email'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', UserSchema)