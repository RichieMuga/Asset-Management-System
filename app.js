
require('dotenv').config()
const express =require('express')
const app=express()
const port= 3000 || process.env.PORT_NUMBER
const pagenotfound=require('./middleware/pagenotfound')
const signupNewUser= require('./routers/sign-up')

//parse json
app.use(express.json())
//setting up public assets to access the html and css files
app.use(express.static('./public'))
//parse incoming url trafic
app.use(express.urlencoded({extended:false}))

//post signup route
app.use('/signup/api/v1',signupNewUser)


//error message if page is not found
app.use(pagenotfound)

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})