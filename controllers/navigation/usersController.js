const { StatusCodes } = require('http-status-codes')
const { get } = require('mongoose')
const CustomErrors = require('../../errors')
const User = require('../../model/user-credentials/userAccounts')
const cookiesutils = require('../../utils')
require('dotenv').config()

const showCurrentUsers = (req, res) => {
    res.send('all current users')
}
const getSingleUser = (req, res) => {
    res.send('single user')
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