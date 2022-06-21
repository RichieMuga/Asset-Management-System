const jwt = require('jsonwebtoken')

const attachCookiesToRes = (res, user) => {
    const oneDay = 604800000// a week
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })

    res.cookie('cookieYaKwanza', token, { expires: new Date(Date.now() + oneDay), httpOnly: true, secure: process.env.NODE_ENV === "production", signed: true })
}

module.exports = { attachCookiesToRes }