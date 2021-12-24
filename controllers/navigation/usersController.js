const { StatusCodes } = require('http-status-codes')
const CustomErrors = require('../../errors')
const { findOne, findOneAndUpdate } = require('../../model/user-credentials/userAccounts')
const User = require('../../model/user-credentials/userAccounts')
const cookiesutils = require('../../utils')
require('dotenv').config()

const getSingleUser = async (req, res) => {
    const { id: userId } = req.params
    const user = await User.findOne({ _id: userId }).select('-password')
    if (!user) {
        throw new CustomErrors.BadRequestError(`User with Id ${userId} cannot be found`)
    }
    res.status(StatusCodes.OK).json({ user })
}
const updateUserPassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body
    if (!oldPassword && newPassword) {
        throw new CustomErrors.UnauthenticatedError('Invalid credentials')
    }

    const { userId } = req.user
    const user = await User.findOneAndUpdate({ userId })

    const isPassword = await user.comparePassword(oldPassword)

    if (!isPassword) {
        throw new CustomErrors.UnauthenticatedError('please provide matching password')
    }

    user.password = newPassword

    await user.save()

    res.status(StatusCodes.OK).json({ msg: "password updated" })
}
const updateUser = (req, res) => {
    res.send('update user')
}
const getAllUsers = async (req, res) => {
    const users = await User.find({ role: 'user' }).select('-password')
    res.status(StatusCodes.OK).json({ users })
}
const showmeCurrentUser = async (req, res) => {
    const { Firstname, Lastname } = req.user
    res.status(StatusCodes.OK).json({ user: { Firstname, Lastname } })
}

module.exports = { getSingleUser, updateUser, updateUserPassword, getAllUsers, showmeCurrentUser }