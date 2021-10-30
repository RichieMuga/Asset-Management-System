require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const port = 4000 || process.env.PORT_NUMBER
const { connectdb } = require('./db/connect')
const { CustomAPIError } = require('./errors/customError')
const pagenotfound = require('./middleware/pagenotfound')
//custom routes
const auth = require('./routers/auth/auth')

//parse json
app.use(express.json())
//setting up public assets to access the html and css files
// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'))
// app.use('/static', express.static(path.join(__dirname, 'public')))
//parse incoming url trafic
app.use(express.urlencoded({ extended: false }))

// server side rendering html pages in future using pug
app.set('view engine', 'ejs')

//routes

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/sign-up', (req, res) => {
    res.render('sign-up')
})

app.use('/api/v1', auth)

//error message if page is not found
app.use(pagenotfound)
//error message for handling any error that may occur
app.use(CustomAPIError)



//async function defining if connection to server is correct,
//then after db connection has been established, connect to server
const startserver = async () => {
    try {
        await connectdb(process.env.URL_FOR_DB);
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    }
    catch (error) {
        console.log(error)
    }
}
startserver()
