import mongoose from "mongoose";
const pgbook_schema=new mongoose.Schema(
    {
      owner_id:{type:String,required:true},
      pg_id:{type:mongoose.Schema.Types.ObjectId,ref:'pgDetails',required:true},
       user_id:{type:String,required:true},
       pgroom_id:{type:mongoose.Schema.Types.ObjectId,ref:'pgroomDetails',required:true},
       payment_pic:{type:String},
       status:{type:String}
    
    }
)

const pgbook_Model=mongoose.model("Pgbooking",pgbook_schema)


export default pgbook_Model;
