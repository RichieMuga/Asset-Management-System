
require('dotenv').config()
const express =require('express')
const app=express()
const port= 3000 || process.env.PORT_NUMBER
const pagenotfound=require('./middleware/pagenotfound')

//parse json
app.use(express.json())
//setting up public assets to access the html and css files
app.use(express.static('./public'))

//test server
app.get('/',(req,res)=>{
    res.status(200).json({msg:'success'})
})

//error message if page is not found
app.use(pagenotfound)

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})