const express = require('express')
const router = express.Router()
const { getHomepage, pricing, tutorial, contacts, legal, dashboard, aboutPage, getsignup, login } = require('../../controllers/navigation/navigation')
router.route('/').get(getHomepage)
router.route('/pricing').get(pricing)
router.route('/contacts').get(contacts)
router.route('/tutorial').get(tutorial)
router.route('/dashboard').get(dashboard)
router.route('/about').get(aboutPage)
router.route('/legal').get(legal)
router.route('/sign-up').get(getsignup)
router.route('/login').get(login)

module.exports = router