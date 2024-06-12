// const express = require('express');
import express from 'express';
const app = express();
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'
import connectToMongoDb from './db/connectToMongoDB.js';


dotenv.config();
const PORT = process.env.PORT || 9000;

app.use(express.json());

app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`server is running on port ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("Hello world");
})