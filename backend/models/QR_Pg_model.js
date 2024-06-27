import mongoose from "mongoose";
const qr_pg_schema=new mongoose.Schema({
    owner_id:{type:String,required:true},
    qr_code:{type:String}
})

const qr_pg_model=mongoose.model('QR_CODE_Pg',qr_pg_schema)
export default qr_pg_model;