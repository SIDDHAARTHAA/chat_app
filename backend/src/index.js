import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config();
import authRoute from './routes/auth.route.js'
import messageRoute from './routes/message.route.js'
import { connectDB } from './lib/db.js';
const PORT = process.env.PORT;
const app = express();
//use this middleware inorder to receive body content when 
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:"http:localhost:5173",
    credentials:true
}))


app.use("/api/auth",authRoute)
app.use("/api/message",messageRoute)

app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
    connectDB()
})  