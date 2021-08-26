require('dotenv').config()
const express= require('express')
const app= express()
const port= 3000 || process.env.PROVIDED_PORT

app.get('/',(req,res)=>{
    res.send('ohayo gosaimasu')
})

app.listen(port,()=>{
    console.log('server is listening')
})