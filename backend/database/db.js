import mongoose from 'mongoose';
import dotenv from 'dotenv'


const db_url=process.dotenv.DB_URL || "";

const connect_db=async ()=>{
    
    try{
        const connect_obj=await mongoose.connect(`${db_url}`)
        console.log(`connection established with mongo db`)

    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}
export default connect_db
