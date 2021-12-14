const { StatusCodes } = require('http-status-codes')
const CustomErrors = require('../../errors')
const { findOne } = require('../../model/user-credentials/userAccounts')
const User = require('../../model/user-credentials/userAccounts')
const cookiesutils = require('../../utils')
require('dotenv').config()

const showCurrentUsers = (req, res) => {
    res.send('all current users')
}
const getSingleUser = async (req, res) => {
    const { id: userId } = req.params
    const user = await User.findOne({ _id: userId }).select('-password')
    if (!user) {
        throw new CustomErrors.BadRequestError(`User with Id ${userId} cannot be found`)
    }
    res.status(StatusCodes.OK).json({ user })
}
const updateUserPassword = (req, res) => {
    res.send('update password')
}
const updateUser = (req, res) => {
    res.send('update user')
}
const getAllUsers = async (req, res) => {
    const users = await User.find({ role: 'user' }).select('-password')
    res.status(StatusCodes.OK).json({ users })
}

module.exports = { getSingleUser, updateUser, updateUserPassword, showCurrentUsers, getAllUsers }