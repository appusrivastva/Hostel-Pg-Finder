import mongoose from 'mongoose'


const adminSchema=new mongoose.Schema(
    {
        admin_id:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        admin_password:{
            type:String,required:true
        }
    }
)

const AdminModel=mongoose.model("AdminDetail",adminSchema)
export default AdminModel;