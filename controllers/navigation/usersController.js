const { StatusCodes } = require('http-status-codes')
const CustomErrors = require('../../errors')
const User = require('../../model/user-credentials/userAccounts')
const utils = require('../../utils')
require('dotenv').config()

const getSingleUser = async (req, res) => {
    const { id: userId } = req.params
    // const { role } = req.user
    const user = await User.findOne({ _id: userId }).select('-password')
    if (!user) {
        throw new CustomErrors.BadRequestError(`User with Id ${userId} cannot be found`)
    }
    //from utility folder, functions to check the permissions and if they belong to the same company
    utils
        .checkCompany(req.user.company, user.company)
        .checkPermissions(req.user, user._id)

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
const updateUser = async (req, res) => {
    const { Firstname, Lastname, username, Email } = req.body
    const { userId } = req.user
    if (!Firstname || !Lastname || !username || !Email) {
        throw new res.status(StatusCodes.NOT_MODIFIED).json({ msg: "nothing changed" })
    }
    const user = await User.findOneAndUpdate({ _id: userId }, { Firstname, Lastname, username, Email }, { new: true, runValidators: true })
    let newUserToken = { role: user.role, userId: user._id, username: user.username }
    utils.attachCookiesToRes(res, newUserToken)
    res.status(StatusCodes.OK).json({ user })
}
const getAllUsers = async (req, res) => {
    const users = await User.find({ role: 'user' }).select('-password')
    utils.checkCompany(req.user.company, users.company)
    res.status(StatusCodes.OK).json({ users })
}
const showmeCurrentUser = async (req, res) => {
    const { Firstname, Lastname } = req.user
    res.status(StatusCodes.OK).json({ user: { Firstname, Lastname } })
}

module.exports = { getSingleUser, updateUser, updateUserPassword, getAllUsers, showmeCurrentUser }