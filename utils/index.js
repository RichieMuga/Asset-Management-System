const { signtoken, verifytoken } = require('./jwt')
const { attachCookiesToRes } = require('./cookies')

module.exports = { attachCookiesToRes }