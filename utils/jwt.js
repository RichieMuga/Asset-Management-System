const jwt = require('jsonwebtoken')
// const CustomErrors = require('../errors/index')

// const signtoken = ({ payload }) => {
//     const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
//     return token
// }

const verifytoken = (token) => {
    // try {
    return jwt.verify(token, process.env.JWT_SECRET)
    // } catch (error) {
    //     CustomErrors.BadRequestError('could not verify token')
    // }
}

module.exports = { verifytoken }