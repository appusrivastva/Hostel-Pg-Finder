import OwnerRegModel from "../models/ownerReg_model.js";
// import OwnerLoginModel from "../models/ownerLogin_model.js";
import contact_Model  from '../models/contact_model.js'
import feedBack_Model from '../models/feedback_model.js'
import hosteldetail_Model from '../models/HostelDeatils_model.js'
import pgdetail_Model from "../models/PgDetails_model.js";
import QueryModel from "../models/Query_model.js";
import message_model from "../models/message_model.js";
import roomdetail_Model from "../models/roomDetails_model.js";

import qr_model from "../models/QR_model.js";
import hostelbook_Model from "../models/HostelBooking_model.js";
import qr_pg_model from '../models/QR_Pg_model.js'
import roomdetail_pg_Model from '../models/roomDetails_pg_model.js'
import pgbook_Model from "../models/pgBooking_model.js";
// import message_model from '../models/message_model.js'
export const home=(req,res)=>{
    res.send("<h1>response page</h1>")
}




export const owner_registration=async(req,res)=>{
    

    try{

        const acc_info=req.body;
        console.log(acc_info)
        const {id,password,name,email,phone,city,address,gender,owner_type}=acc_info;
       

        const OwnerDoc=new OwnerRegModel({owner_id:id,owner_pass:password,owner_name:name,owner_email:email,owner_number:phone,owner_city:city,owner_address:address,owner_gender:gender,owner_type:owner_type});
        
        await OwnerDoc.save();
    }
    catch(err){
        console.log(err.message)
    }
}


// owner login 


export const login=async(req,res)=>{
 






    try{

        const acc_info=req.body;
        console.log(acc_info)
        const {id,password}=acc_info;

        const owner_data=await OwnerRegModel.findOne({owner_id:id})
        console.log(owner_data)

      if(owner_data!=null){
        if(owner_data.owner_pass==password){
            // res.send("admin found")

            res.send({code:200,message:"ownerhome",token:owner_data.owner_id})
        }
        else{
            res.send({code:404,message:"password error"})
        }
      }
      else{
        res.send("invalid credentials")
      }



    }
    catch(err){
        console.log(err.message)
    }
}

export const allfeedback=async (req,res)=>{
    try{
      const feedbackData=await feedBack_Model.find()
      if(feedbackData!=null){
        res.send(feedbackData)
      }
      else{
      res.send("no feedback yet")
      }
    }
    catch(err){
      console.log(err.message)
    }
  }
  // allcontact
  export const allcontact=async (req,res)=>{
    try{
      const contactData=await contact_Model.find()
      if(contactData!=null){
        res.send(contactData)
      }
      else{
      res.send("no feedback yet")
      }
    }
    catch(err){
      console.log(err.message)
    }
  }

  // user profile view=> function 
export const profile=async (req,res)=>{
  try{
    
    const oid=req.query.owner_id

    console.log(`data received ${oid}`)
    const owner_data=await OwnerRegModel.findOne({owner_id:oid})
    res.send(owner_data)
  }catch(err){
    console.log(err.message)
  }
}

// edit profile
export const editprofile=async (req,res)=>{
  try{
    const owner_data=req.body
    const {owner_id,name,email,phone,owner_type}=owner_data
    console.log(owner_data)
    const updateDoc={
      $set:{
        owner_name:name,
        owner_email:email,
        owner_number:phone,
        owner_type:owner_type
      }
    };
    const filter_condition={owner_id:owner_id}
    const status=await OwnerRegModel.updateOne(filter_condition,updateDoc)
    console.log(status)
    res.send(status)


  }catch(err){

    console.log(err);
  }
}


export const addHostel=async(req,res)=>{
    

  try{

      const info=req.body;
      console.log(info)
      const {owner_id,name,email,phone,city,address,hostel_type,facilities}=info;
      const pic=req.file.filename;

     

      const hostelDetails=new hosteldetail_Model({owner_id:owner_id,
        name:name,email:email,phone:phone,city:city,address:address,hostel_type:hostel_type,facilities:facilities,pic:pic});
      
      await hostelDetails.save();
      res.send("hostel details added successfully")
  }
  catch(err){
      console.log(err.message)
  }
}

// add pg 
export const addPg=async(req,res)=>{
    

  try{

      const info=req.body;
      console.log(info)
      const {owner_id,name,email,phone,city,address,pg_type,facilities}=info;
      const pic=req.file.filename;

     

      const pgDetails=new pgdetail_Model({owner_id:owner_id,name:name,email:email,phone:phone,city:city,
        address:address,pg_type:pg_type,facilities:facilities,pic:pic});
      
      await pgDetails.save();
      res.send("pg details added successfully")
  }
  catch(err){
      console.log(err.message)
  }
}

// view hostel details

export const viewHostel=async(req,res)=>{
   


  try{
    
    const owner_id=req.query.owner_id;
    const Data=await hosteldetail_Model.find({owner_id:owner_id})
    res.send(Data);

    

  }catch(err){
    console.log(err.message)
  }
}


export const viewPg=async(req,res)=>{
   


  try{
    
    const owner_id=req.query.owner_id;
    const Data=await pgdetail_Model.find({owner_id:owner_id})
    res.send(Data);

    

  }catch(err){
    console.log(err.message)
  }}


  export const viewPgs=async (req,res)=>{
    try{
  
      const owner_id=req.params.param
      const re=await pgdetail_Model.find({owner_id:owner_id})
      console.log(`on server ${owner_id}`)
      console.log(re)
      res.send(re)
  
    }
    catch(err){
      console.log(err.message)
    }
  }

// view all hostelOwner


export const viewHostelOwner=async (req,res)=>{
  try{



    const Data=await OwnerRegModel.find({owner_type:'hostel'})
      if(Data!=null){
        res.send(Data)
      }
      else{
      res.send("no owner yet")
      }
  }
  catch(err){
    console.log(err.message)
  }
}



export const viewPgOwner=async (req,res)=>{
  try{



    const Data=await OwnerRegModel.find({owner_type:'pg'})
      if(Data!=null){
        res.send(Data)
      }
      else{
      res.send("no owner yet")
      }
  }
  catch(err){
    console.log(err.message)
  }
}

export const viewHostels=async (req,res)=>{
  try{

    const owner_id=req.params.param
    const re=await hosteldetail_Model.find({owner_id:owner_id})
    console.log(`on server ${owner_id}`)
    console.log(re)
    res.send(re)

  }
  catch(err){
    console.log(err.message)
  }
}

export const viewquery=async(req,res)=>{
  try{
    const owner_id=req.query.owner_id
    console.log("id received from front end"+owner_id);
    const Data=await QueryModel.find({owner_id:owner_id})
   res.send(Data)
  }
  catch(err){
    console.log(err.message)
  }

}

// answer query
export const answerquery=async (req,res)=>{
  try{
    const data=req.body
    const {_id,answer}=data
    console.log(data)
    const updateDoc={
      $set:{
        answer:answer
       
      }
    };
    const filter_condition={_id:_id}
    const status=await QueryModel.updateOne(filter_condition,updateDoc)
    console.log(status)
    res.send(status)


  }catch(err){

    console.log(err);
  }
}
// messgae send by owner to any registered
export const sendMsg=async (req,res)=>{
  try{

    const data=req.body
    const {sid,rid,subject,msg}=data

    const msgdetail=await message_model({sid:sid,rid:rid,subject:subject,msg:msg})
    await msgdetail.save();
    res.send("message send succesfully")

  }catch(err){
    console.log(err)
  } 
}
// messge receive by owner to any registered 
export const receiveMsg=async (req,res)=>{
  try{

    const rid=req.query.rid
    console.log(rid);
    const re=await message_model.find({rid:rid})
    console.log(re)
    console.log(`on server ${rid}`)
    if(re!=null){
      res.send(re)
    }
    else{
    res.send("no message yet")
    }

  }
  catch(err){
    console.log(err.message)
  }
}

// room details 
export const addroom_details=async(req,res)=>{
    

  try{

      const info=req.body;
      console.log(info)
      const {owner_id,
      hostel_id,
      setRoomType,
      setSeater,
      charges,
      facilities}=info;
    

     

      const roomdetail=new roomdetail_Model({owner_id:owner_id,
        hostel_id:hostel_id,room_type:setRoomType,
        room_seater:setSeater,facilities:facilities,charge:charges
      });
      
      await roomdetail.save();
      res.send("room details added successfully")
  }
  catch(err){
      console.log(err.message)
  }
}

// add rooms in pg
export const addpg_rooms=async(req,res)=>{
    

  try{

      const info=req.body;
      console.log(info)
      const {owner_id,
      pg_id,
      setRoomType,
      setSeater,
      charges,
      facilities}=info;
    

     

      const roomdetail=new roomdetail_pg_Model({owner_id:owner_id,
        pg_id:pg_id,room_type:setRoomType,
        room_seater:setSeater,facilities:facilities,charge:charges
      });
      
      await roomdetail.save();
      res.send("room details added successfully")
  }
  catch(err){
      console.log(err.message)
  }
}
export const addQR=async (req,res)=>{


  try{
    const info=req.body;
    const {owner_id}=info;
    const qrcode=req.file.filename;
    const data=await qr_model({owner_id:owner_id,qr_code:qrcode})
    await data.save()
    res.send("add qr code successfully")

  }
  catch(err){
    console.log(err)
  }

}
export const addQR_pg=async (req,res)=>{


  try{
    const info=req.body;
    const {owner_id}=info;
    const qrcode=req.file.filename;
    const data=await qr_pg_model({owner_id:owner_id,qr_code:qrcode})
    await data.save()
    res.send("add qr code successfully")

  }
  catch(err){
    console.log(err)
  }

}

// checking payment details
export const  checkPayment=async (req,res)=>{
  try{
    
    const owner_id=req.query.owner_id
    console.log(owner_id)
   const payemntDetails=await hostelbook_Model.find({owner_id:owner_id})
   console.log(payemntDetails)
   if(payemntDetails!=null){
    res.send(payemntDetails)
   }
   else{
    res.send("no payment yet")
   }
  }
  catch(err){
    console.log("error");

  }
}
export const  checkpgPayment=async (req,res)=>{
  try{
    const owner_id=req.query.owner_id
   const payemntDetails=await pgbook_Model.find({owner_id:owner_id})
   console.log(payemntDetails)
   if(payemntDetails!=null){
    res.send(payemntDetails)
   }
   else{
    res.send("no payment yet")
   }
  }
  catch(err){
    console.log("error");

  }
}

// confirm booking by viewing payment pic and update status :pending to confirm
export const confirmBooking=async (req,res)=>{
  try{
  

    const data=req.body;
    const {_id,status}=data
    

    const updateDoc={
      $set:{
     status:status
       
      }
    };
    const filter_condition={_id:_id}
    const update=await hostelbook_Model.updateOne(filter_condition,updateDoc)
    console.log(update)
    res.send(update)
  
  }catch(err){
    console.log(err)
  }
}
export const confirmpgBooking=async (req,res)=>{
  try{
  

    const data=req.body;
    const {_id,status}=data
    

    const updateDoc={
      $set:{
     status:status
       
      }
    };
    const filter_condition={_id:_id}
    const update=await pgbook_Model.updateOne(filter_condition,updateDoc)
    console.log(update)
    res.send(update)
  
  }catch(err){
    console.log(err)
  }
}