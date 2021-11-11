const sessions = require('client-sessions')
require('dotenv').config()
const createSession = (sessions({
    cookieName: 'session',
    secret: process.env.SECRET,
    duration: 30 * 70 * 80
}))
module.exports = createSession