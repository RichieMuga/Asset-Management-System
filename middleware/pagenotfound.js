//The error massage will be displayed if the page is not found
const { StatusCodes } = require('http-status-codes')
const pagenotfound = (req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({ success: true, msg: 'page not found' })
}
module.exports = pagenotfound