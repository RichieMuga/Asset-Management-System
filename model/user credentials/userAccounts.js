const mongoose = require('mongoose')
const UserCreationSchema = new mongoose.Schema({

    firstname: {
        any: mongoose.Mixed,
        minlength: 3,
        maxlength: 50,
        require: [true, 'Kindly provide a firstname']
    },
    lastname: {
        any: mongoose.Mixed,
        minlength: 3,
        maxlength: 50,
        require: [true, 'Kindly enter a lastname']
    },
    username: {
        any: mongoose.Mixed,
        minlength: 3,
        maxlength: 50,
        require: [true, 'Kindly enter a username']
    },
    email: {
        type: String,
        require: [true, 'Please provide an email'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email'],
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('UserCreationSchema', UserCreationSchema)