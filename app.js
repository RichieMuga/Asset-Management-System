require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const port = 5000 || process.env.PORT_NUMBER
const { connectdb } = require('./db/connect')
const errorhandlerMiddleware = require('./middleware/errorhandlerMiddleware')
const pagenotfound = require('./middleware/pagenotfound')
//custom routes
const auth = require('./routers/auth/auth')
const navigation = require('./routers/navigation/navigation')

//npm packages
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

//use packages
app.use(morgan('tiny'))
//parse json
app.use(express.json())
//parse cookie
app.use(cookieParser(process.env.JWT_SECRET))
//setting up public assets to access the html and css files
app.use(express.static(__dirname + '/public'))
//parse incoming url trafic
app.use(express.urlencoded({ extended: false }))

// server side rendering html pages in future using pug
app.set('view engine', 'ejs')

//routes
app.use('/', navigation)
app.use('/api/v1/auth', auth)


//error message if page is not found
app.use(pagenotfound)
//error message for handling any error that may occur
app.use(errorhandlerMiddleware)



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
