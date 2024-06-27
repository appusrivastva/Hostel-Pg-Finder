import mongoose from "mongoose";
const hosteldetail_schema=new mongoose.Schema(
    {
      owner_id:{type:String,required:true},
       name:{type:String,required:true},
       email:{type:String,required:true},
       phone:{type:Number,required:true},
       city:{
        type:String,required:true
    },
       address:{
        type:String,required:true
    },
       hostel_type:{
        type:String,required:true
    }
,
  facilities:{
    
    type:String
  },
  pic:{
    type:String
  }
    }
)

const hosteldetail_Model=mongoose.model("HostelDetails",hosteldetail_schema)


export default hosteldetail_Model;