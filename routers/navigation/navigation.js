const express = require('express')
const router = express.Router()
const { getHomepage, pricing, tutorial, contacts, legal, dashboard, aboutPage } = require('../../controllers/navigation/navigation')
router.route('/').get(getHomepage)
router.route('/pricing').get(pricing)
router.route('/contacts').get(contacts)
router.route('/tutorial').get(tutorial)
router.route('/dashboard').get(dashboard)
router.route('/about').get(aboutPage)
router.route('/legal').get(legal)

module.exports = router