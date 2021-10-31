const CustomAPIError = require('../../errors/customError')
//import jsonwebtoken for using jwt to issue token from the server to send secret to the user
const jwt = require('jsonwebtoken')
require('dotenv').config()


const getsignup = (req, res) => {
  res.status(200).render('sign-up')
}

const createsignupuser = async (req, res) => {
  const { Firstname, Lastname, Email, password, confirmPassword, username } = req.body
  if (!Firstname || !Lastname || !Email || !password || !confirmPassword || !username) {
    throw new Error("please provide appropriate credentials", 400)
  }

  if (password === confirmPassword) {
    //in jwt token the smaller the payload the better the user experience
    let token = jwt.sign({ username, Email, Lastname }, process.env.JWT_SECRET, { expiresIn: '20d' });
    res.status(200).json({ msg: "success", token })
  }
  // throw new Error("password does not match")
}


module.exports = { createsignupuser, getsignup }