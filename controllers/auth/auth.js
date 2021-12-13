const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
const { CustomAPIError, UnauthenticatedError, NotFoundError, BadRequestError, } = require('../../errors')
const User = require('../../model/user-credentials/userAccounts')
const cookiesutils = require('../../utils')
require('dotenv').config()


const login = async (req, res) => {
  const { Email, password } = req.body

  //if password or email or both havent been provided send bad request
  if (!Email || !password) {
    throw new UnauthenticatedError('invalid credentials')
  }
  //parse through the database to find user email and email that is compatible
  //with the email's password if they are not then return to login page
  const user = await User.findOne({ Email })

  if (!user) {
    throw new BadRequestError("email doesn't exist")
  }
  const passwordismatch = await user.comparePassword(password);
  if (!passwordismatch) {
    throw new BadRequestError('invalid password')
  }
  const usernameAndEmail = { username: user.username, Email: user.Email }

  const tokenUser = { createdAt: user.createdAt, userId: user._id }

  cookiesutils.attachCookiesToRes(res, tokenUser)

  res.status(StatusCodes.OK).json({ status: "success", user: usernameAndEmail })
}


const createsignupuser = async (req, res) => {
  const { Firstname, Lastname, Email, password, confirmPassword, username } = req.body
  if (!Firstname || !Lastname || !Email || !password || !confirmPassword || !username) {
    throw new UnauthenticatedError("please provide appropriate credentials")
  }

  if (password !== confirmPassword) {
    throw new BadRequestError('password does not match')
  }
  // to check if the email is in use, but in this project we will use the mongoose schema instead
  // const emailAlreadyExists = await User.findOne({ Email })
  // if (emailAlreadyExists) {
  //   throw new BadRequestError('email already exists')
  // }
  const person = await User.create({ Firstname, Lastname, Email, password, confirmPassword, username })
  const usernameAndEmail = { username, Email }
  const tokenUser = { role: person.role, userId: person._id, Firstname: person.Firstname }

  // const token = await jwt.sign(tokenUser, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })

  // const token = jwts.signtoken({ payload: tokenUser }) to create jwt token

  // const oneDay = 86400

  // res.cookie('cookieYaKwanza', token, { expires: new Date(Date.now() + oneDay), httpOnly: true })

  cookiesutils.attachCookiesToRes(res, tokenUser)

  return res.status(StatusCodes.CREATED).json({ status: 'success', user: usernameAndEmail })
}

const logout = async (req, res) => {
  res.cookie('cookieYaKwanza', 'logged out', { expires: new Date(Date.now()), httpOnly: true, })
  res.status(StatusCodes.ACCEPTED).json({ msg: 'user logged out' })
}




module.exports = { createsignupuser, login, logout }