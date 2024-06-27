import mongoose from 'mongoose'


const userSchema=new mongoose.Schema(
    {
       user_id:{
            type:String,
            required:true,
            
            trim:true
        },
       user_password:{
            type:String,required:true
        },
        
       user_name:{
            type:String,required:true
        },
       user_email:{
            type:String,required:true
        },
       user_number:{
            type:Number,required:true
        }
        
    }
)



const UserRegModel=mongoose.model("UserRegistration",userSchema)
export default UserRegModel;