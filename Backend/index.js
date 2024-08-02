const express = require('express')
require("dotenv") .config();
const app = express()
const port = process.env.PORT || 5000;
const db = require('./mongoose')

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.get('/', (req,res)=>{
    res.send("hello world")
})


if(process.env.NODE_ENV == "production"){
    app.use(express.static("build"))
}

app.use(express.json())
app.use('/api',require('./CreateUser'))
app.use('/api',require('./DisplayData'))
app.listen(port,()=>{
    console.log("listening to the port")
})