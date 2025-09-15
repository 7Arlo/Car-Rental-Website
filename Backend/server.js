import express from "express"
import dotenv from "dotenv"
import { DB_Connect } from "./src/config/DB_Connect.js"







dotenv.config()

const app = express()


const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server Is Running On ${port}`)
    DB_Connect()
})