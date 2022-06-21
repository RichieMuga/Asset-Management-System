const CustomErrors = require('../errors')
const utils = require('../utils')

const authentication = async (req, res, next) => {
    const token = req.signedCookies.cookieYaKwanza

    if (!token) {
        throw new CustomErrors.BadRequestError('Invalid Authentication')
    }
    else {
        try {
            const payload = await utils.verifytoken(token)
            req.user = { role: payload.role, userId: payload.userId, name: payload.name, company: payload.company, employeeId: payload.employeeId }
            next()
        } catch (error) {
            throw new CustomErrors.BadRequestError('Invalid authentication')
        }
    }
}

const authorizePermission = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new CustomErrors.UnauthorizedError('Cannot access page unauthorized permission')
        }
        next()
    }
}


module.exports = { authentication, authorizePermission }