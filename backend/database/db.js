import mongoose from 'mongoose';
const db_url=
"mongodb+srv://appuwork11:Appux%402015@accomodationfinder.uhrrr6o.mongodb.net/hostel_db"


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