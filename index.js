import dotenv from 'dotenv';
import express from 'express';
import cors from "cors"
import mongoose from 'mongoose';
import router from './formRoutes.js';

// cloudinary.v2
dotenv.config()

const app=express();
app.use(express.json())


app.use(cors());
app.use('/formData',router)

app.use((err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message || "Something is wrong";
    return res.status(status).json({
        success:false,
        status,
        message
    })
})

const connectApp=()=>{
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.log("Database Connected")
    }).catch((error)=>{
        console.log(error);
        throw error;
    })
}

app.listen(800,()=>{
    console.log("Server Connected at port",800)
    connectApp()
})
