import mongoose from 'mongoose'


const QuerySchema=new mongoose.Schema(
    {
 
       owner_id:{
        type:String,
        required:true
       },
       user_id:{
        type:String,
        required:true,
        
    },
       question:{
        type:String,required:true
       },
       answer:{
        type:String
       }
        
    }
)



const QueryModel=mongoose.model("QueryDetails",QuerySchema)
export default QueryModel;