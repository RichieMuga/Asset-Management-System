const { StatusCodes } = require('http-status-codes')
const CustomErrors = require('../errors')
const utils = require('../utils')

const authentication = async (req, res, next) => {
    const token = req.signedCookies.cookieYaKwanza
    console.log(token)

    if (!token) {
        throw new CustomErrors.BadRequestError('Invalid Authentication')
    }
    else {
        try {
            const payload = await utils.verifytoken(token)
            req.user = { role: payload.role, userId: payload.userId, username: payload.username }
            next()
        } catch (error) {
            throw new CustomErrors.BadRequestError('Invalid authentication')
        }
    }


}

module.exports = { authentication }