import mongoose from "mongoose";

const FormSchema=new mongoose.Schema({
    name:String,
    text:String,
    image:String
},{timestamps:true})

export default mongoose.model("form",FormSchema)