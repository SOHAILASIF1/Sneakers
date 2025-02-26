import express from 'express'
import dotenv from 'dotenv'
import DBConnection from './database/db.js'
import userRouter from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'

import cors from 'cors'
const app=express()
dotenv.config({})
DBConnection()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow cookies
  }));
  app.use(cookieParser())
  app.use("/api/user",userRouter)
const PORT=process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`Server runnning at ${PORT}`);
})