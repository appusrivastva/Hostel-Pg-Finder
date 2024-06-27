import mongoose from "mongoose";

const contactSchema=new mongoose.Schema(
    {
       name:{type:String,required:true},
       email:{type:String,required:true},
       phone:{type:Number,required:true},
       query:{type:String,required:true}
    }
)
const contact_Model=mongoose.model("Contacts",contactSchema)
export default contact_Model;