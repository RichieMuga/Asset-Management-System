const CustomAPIError = require('../../errors/customError')
require('dotenv').config()

const dashboard = (req, res) => {

    if (!(req.session && req.session.userId)) {
        return res.redirect('/login')
    }

    User.findById(req.sessions.userId, (err, user) => {
        if (err) {
            console.log(err)
        }
        if (!user) {
            return res.redirect('login')
        }

        res.render('dashboard')
    })
}
