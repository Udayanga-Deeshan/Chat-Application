// const express = require('express');
import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.js'
import messageRoutes from './routes/message.route.js'
import connectToMongoDb from './db/connectToMongoDB.js';


dotenv.config();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);


app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`server is running on port ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("Hello world");
})