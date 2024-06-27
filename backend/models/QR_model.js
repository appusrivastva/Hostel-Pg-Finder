import mongoose from "mongoose";
const qr_schema=new mongoose.Schema({
    owner_id:{type:String,required:true},
    qr_code:{type:String}
})

const qr_model=mongoose.model('QR_CODE_Hostel',qr_schema)
export default qr_model;