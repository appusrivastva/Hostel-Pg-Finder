import mongoose from 'mongoose'


const ownerSchema=new mongoose.Schema(
    {
        owner_id:{
            type:String,
            required:true,
            trim:true
        },
        owner_pass:{
            type:String,required:true
        },
        
        owner_name:{
            type:String,required:true
        },
        owner_email:{
            type:String,required:true
        },
        owner_number:{
            type:Number,required:true
        },owner_city:{
            type:String,required:true
        },
        owner_address:{
            type:String,required:true
        },
        owner_gender:{
            type:String,required:true
        },
   
        owner_type:{
            type:String,required:true
        }
        
    }
)



const OwnerModel=mongoose.model("OwnerRegistration",ownerSchema)
export default OwnerModel;