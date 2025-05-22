import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'

dotenv.config();
import authRoute from './routes/auth.route.js'
import { connectDB } from './lib/db.js';
const PORT = process.env.PORT;

const app = express();
//use this middleware inorder to receive body content when 
app.use(express.json());
app.use(cookieParser())


app.use("/api/auth",authRoute)

app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
    connectDB()
})