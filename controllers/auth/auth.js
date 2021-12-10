const { StatusCodes } = require('http-status-codes')
const { CustomAPIError, UnauthenticatedError, NotFoundError, BadRequestError, } = require('../../errors')
const User = require('../../model/user-credentials/userAccounts')
require('dotenv').config()


const login = async (req, res) => {
  const { Email, password } = req.body

  //if password or email or both havent been provided send bad request
  if (!Email || !password) {
    throw new BadRequestError('please provide valid email or password')
  }
  //parse through the database to find user email and email that is compatible
  //with the email's password if they are not then return to login page
  const user = await User.findOne({ Email, password })
  if (!user) {
    throw new BadRequestError('could not find email')
  }

  console.log(req.session)

  res.status(StatusCodes.OK).json({ status: "success", user })
}


const createsignupuser = async (req, res) => {
  const { Firstname, Lastname, Email, password, confirmPassword, username } = req.body
  if (!Firstname || !Lastname || !Email || !password || !confirmPassword || !username) {
    throw new UnauthenticatedError("please provide appropriate credentials")
  }

  if (password !== confirmPassword) {
    throw new BadRequestError('password does not match')
  }

  const person = await User.create({ ...req.body })

  return res.status(StatusCodes.CREATED).json({ status: 'success', user: person })
}

const logout = async (req, res) => {
  res.send('logout')
}




module.exports = { createsignupuser, login, logout }