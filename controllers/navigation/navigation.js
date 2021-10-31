const getHomepage = (req, res) => {
    res.status(200).render('index')
}


const aboutPage = (req, res) => {
    res.status(200).render('about')
}

const dashboard = (req, res) => {
    res.status(200).render('dashboard')
}

const legal = (req, res) => {
    res.status(200).render('legal')
}

const contacts = (req, res) => {
    res.status(200).render('contacts')
}

const pricing = (req, res) => {
    res.status(200).render('pricing')
}

const tutorial = (req, res) => {
    res.status(200).render('tutorial')
}

module.exports = { getHomepage, pricing, tutorial, contacts, legal, dashboard, aboutPage }

