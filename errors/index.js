const CustomAPIError = require('./customError')
const UnauthenticatedError = require('./unauthenticated')
const NotFoundError = require('./not-found')
const BadRequestError = require('./bad-request')
const UnauthorizedError = require('./unauthorizedError')

module.exports = {
    CustomAPIError,
    UnauthenticatedError,
    NotFoundError,
    BadRequestError,
    UnauthorizedError
}
