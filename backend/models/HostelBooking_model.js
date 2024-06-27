import mongoose from "mongoose";
const hostelbook_schema=new mongoose.Schema(
    {
      owner_id:{type:String,required:true},
      hostel_id:{type:mongoose.Schema.Types.ObjectId,ref:'HostelDetails',required:true},
       user_id:{type:String,required:true},
       room_id:{type:mongoose.Schema.Types.ObjectId,ref:'roomDetails',required:true},
       payment_pic:{type:String},
       status:{type:String}
    
    }
)

const hostelbook_Model=mongoose.model("Hostelbooking",hostelbook_schema)


export default hostelbook_Model;
