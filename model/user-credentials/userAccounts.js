const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        min: [2, 'This length is not accepted please try again'],
        max: 50,
        required: [true, 'Kindly enter a lastname']
    },
    email: {
        type: String,
        required: [true, 'please provide email'],
        validate: {
            validator: validator.isEmail,
            message: "please provide valid email"
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    company: {
        type: String,
        required: [true, "Please enter company name"]
    },
    employeeId: {
        type: String,
        required: [true, 'Please enter employee Id']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hashSync(this.password, salt);
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
    const ispassword = await bcrypt.compareSync(candidatePassword, this.password);
    return ispassword;
};


module.exports = mongoose.model('User', UserSchema)