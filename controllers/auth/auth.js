const CustomAPIError = require('../../errors/customError')
//import jsonwebtoken for using jwt to issue token from the server to send secret to the user
const jwt = require('jsonwebtoken')
require('dotenv').config()


const login = async (req, res) => {
  res.status(200).json({ msg: 'logged in' })
}

const createsignupuser = async (req, res) => {
  const { Firstname, Lastname, Email, password, confirmPassword, username } = req.body
  if (!Firstname || !Lastname || !Email || !password || !confirmPassword || !username) {
    throw new Error("please provide appropriate credentials", 400)
  }

  if (password !== confirmPassword) {
    throw new Error('password does not match')
  }

  res.status(200).render('login')
}




module.exports = { createsignupuser, login }