require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const port = 3000 || process.env.PORT_NUMBER
const { connectdb } = require('./db/connect')
const { CustomAPIError } = require('./errors/customError')
const pagenotfound = require('./middleware/pagenotfound')
//custom routes
const auth = require('./routers/auth/auth')

//parse json
app.use(express.json())
//setting up public assets to access the html and css files
app.use(express.static(__dirname + '/public'))
// app.use('/static', express.static(path.join(__dirname, 'public')))
//parse incoming url trafic
app.use(express.urlencoded({ extended: false }))

// server side rendering html pages in future using pug

//routes
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
// require('dotenv').config()
// require('express-async-errors')

// const express = require('express')
// const app = express()
// // const mainRouter = require('./routes/main')

// const notFoundMiddleware = require('./middleware/pagenotfound')
// // const errorHandlerMiddleware = require('./middleware/error-handler')

// // middleware
// app.use(express.static('./public'))
// app.use(express.json())

// // app.use('/api/v1/', mainRouter)

// // app.use(notFoundMiddleware)
// // app.use(errorHandlerMiddleware)

// const port = process.env.PORT || 3000

// const start = async () => {
//   try {
//     app.listen(port, console.log(`Server is listening on port ${port}...`))
//   } catch (error) {
//     console.log(error)
//   }
// }
// start()