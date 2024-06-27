import mongoose from "mongoose";

const room_detailSchema=new mongoose.Schema(
    {
       owner_id:{type:String,required:true},
       hostel_id:{type:mongoose.Schema.Types.ObjectId,ref:'HostelDetils',required:true},
       room_type:{type:String,required:true},
       room_seater:{type:String,required:true},
       facilities:{type:String,required:true},
       charge:{type:String,required:true}
    }
)
const roomdetail_Model=mongoose.model("Hostel_roomdetails",room_detailSchema)
export default roomdetail_Model;