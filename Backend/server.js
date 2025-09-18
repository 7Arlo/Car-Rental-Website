import express from "express"
import dotenv from "dotenv"
import { DB_Connect } from "./src/config/DB_Connect.js"
import { router } from "./src/routes/index.js"








dotenv.config()

const app = express()

app.use(express.json())

//Mount all routes under the base path `/api/v1/`  
app.use("/api/v1/",router)

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Server Is Running On ${port}`)
    DB_Connect()
})