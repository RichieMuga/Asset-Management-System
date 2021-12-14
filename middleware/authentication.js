const { StatusCodes } = require('http-status-codes')
const CustomErrors = require('../errors')

const authentication = (req, res, next) => {
    const token = req.signedCookies.cookieYaKwanza

    if (!token) {
        console.log('cookie not present')
    }
    else {
        console.log('present cookie')
    }

    next()
}

module.exports = { authentication }