import mongoose from 'mongoose'
const msgSchema=new mongoose.Schema({
   


    sid:{
        type:String,required:true
    },
    rid:{
        type:String,required:true
    },
    subject:{
        type:String,required:true
    },
    msg:{
        type:String,required:true
    }
}
)

const message_model=mongoose.model('Messagedetail',msgSchema);
export default message_model