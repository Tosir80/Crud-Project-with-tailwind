const express=require("express")
const app=express()
const jwt= require('jsonwebtoken')
const cookieParser= require('cookie-parser')
const router = require("./routes/user")
const cors =require('cors')

//this is method to get data and cookie from frontend

app.use(express.json()) 
app.use(express.urlencoded({extended:false})) ;
app.use(cookieParser())
app.use(cors())



//Route import 
app.use('/api/v1/',router)
 

//add error handling middleware

module.exports =app