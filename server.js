

const express=require('express')
const app=express()
app.get('/',(req,res)=>res.send("hello world"));
app.get('/html',(req,res)=>res.send("First Express"));
app.get('/json',(req,res)=>res.send({
    name:"hello",
    key:1,
}));

app.listen(3000,()=>console.log("app running"))
