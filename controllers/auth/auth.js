const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
const { CustomAPIError, UnauthenticatedError, NotFoundError, BadRequestError, } = require('../../errors')
const User = require('../../model/user-credentials/userAccounts')
const cookiesutils = require('../../utils')
require('dotenv').config()


const login = async (req, res) => {
  const { email, password } = req.body

  //if password or email or both havent been provided send bad request
  if (!email || !password) {
    throw new UnauthenticatedError('invalid credentials')
  }
  //parse through the database to find user email and email that is compatible
  //with the email's password if they are not then return to login page
  const user = await User.findOne({ email })

  if (!user) {
    throw new BadRequestError("email doesn't exist")
  }
  const passwordismatch = await user.comparePassword(password);
  if (!passwordismatch) {
    throw new BadRequestError('invalid password')
  }
  // const usernameAndEmail = { username: user.username, Email: user.Email }

  const tokenUser = { role: user.role, userId: user._id, company: user.company, name: user.name, employeeId: user.employeeId }


  cookiesutils.attachCookiesToRes(res, tokenUser)

  res.status(StatusCodes.OK).json({ status: "success", user: tokenUser })
}


const createsignupuser = async (req, res) => {
  const { name, email, password, confirmPassword, role, company, employeeId } = req.body
  if (!name || !email || !password || !confirmPassword || !company || !employeeId) {
    throw new UnauthenticatedError("please provide appropriate credentials")
  }

  if (password !== confirmPassword) {
    throw new BadRequestError('password does not match')
  }
  const userAlreadyHasAccount = await User.findOne({ email })
  if (userAlreadyHasAccount) {
    throw new BadRequestError('Email already in use')
  }
  // to check if the email is in use, but in this project we will use the mongoose schema instead
  // const emailAlreadyExists = await User.findOne({ Email })
  // if (emailAlreadyExists) {
  //   throw new BadRequestError('email already exists')
  // }
  const person = await User.create({ name, email, password, confirmPassword, role, company, employeeId })
  // const usernameAndEmail = { username, Email }
  const tokenUser = { role: person.role, userId: person._id, name: person.name, employeeId: person.employeeId, company: person.company }

  // const token = await jwt.sign(tokenUser, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })

  // const token = jwts.signtoken({ payload: tokenUser }) to create jwt token

  // const oneDay = 86400

  // res.cookie('cookieYaKwanza', token, { expires: new Date(Date.now() + oneDay), httpOnly: true })

  cookiesutils.attachCookiesToRes(res, tokenUser)

  return res.status(StatusCodes.CREATED).json({ status: 'success', user: tokenUser })
}

const logout = async (req, res) => {
  res.cookie('cookieYaKwanza', 'logged out', { expires: new Date(Date.now()), httpOnly: true, })
  res.status(StatusCodes.ACCEPTED).json({ msg: 'user logged out' })
}




module.exports = { createsignupuser, login, logout }