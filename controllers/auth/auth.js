const CustomAPIError = require('../../errors/customError')
const User = require('../../model/user-credentials/userAccounts')
require('dotenv').config()


const login = async (req, res) => {
  const { Email, password } = req.body
  // User.findOne({ Email }, (err, user) => {
  //   if (!user || password !== user.password) {
  //     return res.render('login', { error: "incorrect username or passowrd" })
  //   }
  // })
  if (!Email || !password) {
    throw new CustomAPIError('please provide email or password', 400)
  }
  const user = await User.findOne({ Email })
  if (!user) {
    throw new CustomAPIError('invalid credentials', 400)
  }
  console.log(req.session)
  // if (!Email) {
  //   throw new Error("enter a valid email or password")
  // }

  console.log(user)
  res.json({ success: 'okey' })
}


const createsignupuser = async (req, res) => {
  console.log(req.body)
  const { Firstname, Lastname, Email, password, confirmPassword, username } = req.body
  if (!Firstname || !Lastname || !Email || !password || !confirmPassword || !username) {
    throw new Error("please provide appropriate credentials", 400)
  }

  if (password !== confirmPassword) {
    throw new Error('password does not match')
  }

  const person = await User.create(req.body)

  return res.redirect('/login')
}




module.exports = { createsignupuser, login }