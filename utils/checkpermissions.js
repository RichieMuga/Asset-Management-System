const CustomErrors = require('../errors')
const checkPermissions = (requestUser, resourceId) => {
    // console.log(requestUser)
    // console.log(resourceId)
    // console.log(typeof resourceId)
    if (requestUser.role === 'admin') return
    if (requestUser.userId === resourceId.toString()) return
    throw new CustomErrors.UnauthorizedError('Not authorized to access this route')
}
const checkCompany = (requestUserCompany, resourceCompany) => {
    if (requestUserCompany === resourceCompany) return
    throw new CustomErrors.UnauthorizedError('Not authorized to access this route')
}

module.exports = { checkPermissions, checkCompany }