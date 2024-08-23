import express from 'express';
import { FormController } from './FormController.js';
import multer from "multer"
import path from 'path';

const storage=multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'uploads')
    },
    filename:(req ,file, cb)=>{
        cb(null, file.fieldname +"_"+Date.now()
        + path.extname(file.originalname)
        )
    }
})

const upload=multer({
    storage:storage
})

const router=express.Router();

router.post('/data',upload.any(),FormController)


export default router;