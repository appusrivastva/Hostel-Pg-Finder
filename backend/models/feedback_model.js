import mongoose from "mongoose";
const feedbackSchema=new mongoose.Schema(
    {
       name:{type:String,required:true},
       email:{type:String,required:true},
       remark:{type:String,required:true},
       rating:{type:Number,required:true}
    }
)

const feedBack_Model=mongoose.model("FeedBack",feedbackSchema)


export default feedBack_Model;