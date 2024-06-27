import mongoose from "mongoose";
const pgdetail_schema=new mongoose.Schema(
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
       pg_type:{
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

const pgdetail_Model=mongoose.model("PgDetails",pgdetail_schema)


export default pgdetail_Model;