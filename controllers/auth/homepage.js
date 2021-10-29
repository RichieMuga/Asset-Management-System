const getHomepage = (req, res) => {
    res.status(200).render('index')
}
module.exports = { getHomepage }