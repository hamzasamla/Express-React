

const express=require('express')
const app=express()
app.get('/',function(req,res)
{
    res.send('My First Express App')
})

app.listen(3000,()=>console.log("app running"))
