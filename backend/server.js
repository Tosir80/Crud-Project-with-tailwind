
const app=require('./app')
const dotenv =require("dotenv")
const connectDatabase=require('./db/Database')

//unhandle uncaught Exception 
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`) 
    console.log(`Shutting down the server for Handling uncaught Exception `)
})

//config 
dotenv.config({
    path:"config/.env"
})

//connect database 
connectDatabase()


const PORT= process.env.PORT || 5000

// create server 
const server =app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${PORT}`)
})

//Unhandle Promise rejection

process.on("unhandledRejection",(err)=>{
    console.log(`Shutting down server for ${err.message}`)
    console.log(`Shutting down server due to unhandle promise Rejection`)
    server.close(()=>{
        process.exit(1)
    })
})