import mongoose from "mongoose";

const room_detail_pgSchema=new mongoose.Schema(
    {
       owner_id:{type:String,required:true},
       pg_id:{type:mongoose.Schema.Types.ObjectId,ref:'PgDetails',required:true},
       room_type:{type:String,required:true},
       room_seater:{type:String,required:true},
       facilities:{type:String,required:true},
       charge:{type:String,required:true}
    }
)
const roomdetail_pg_Model=mongoose.model("Pg_roomdetail",room_detail_pgSchema)
export default roomdetail_pg_Model