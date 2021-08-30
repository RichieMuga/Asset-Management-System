require('dotenv').config()
const express =require('express')
const app=express()
const port= 3000 || process.env.PORT_NUMBER
const {connectdb}=require('./db/connect')
const pagenotfound=require('./middleware/pagenotfound')
const signupNewUser= require('./routers/sign-up')

//parse json
app.use(express.json())
//setting up public assets to access the html and css files
app.use(express.static('./public'))
//parse incoming url trafic
app.use(express.urlencoded({extended:false}))
//
app.set("view engine","pug")
app.get('/',(req,res)=>{
    res.render("sign-up")
})

//post signup route
app.use('/signup/api/v1',signupNewUser)

//get sign-up page
app.get('/sign-up',(req,res)=>{
    res.status(200).render('sign-up')
})

//error message if page is not found
app.use(pagenotfound)

//async function defining if connection to server is correct,
//then after db connection has been established, connect to server
const startserver= async()=>{
    try {
  await connectdb(process.env.URL_FOR_DB);
  app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})     
    } catch (error) {
        console.log(error)
    }
}
startserver()