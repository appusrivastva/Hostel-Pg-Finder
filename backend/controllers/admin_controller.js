import AdminModel from "../models/admin_model.js";
import feedBack_Model from '../models/feedback_model.js'
import contact_Model from '../models/contact_model.js'
 import UserRegModel from '../models/userReg_model.js'
import OwnerModel from'../models/ownerReg_model.js'

export const home=(req,res)=>{
    res.send("<h1>this is response from server to home page</h1>")
}



export const login=async(req,res)=>{
 






    try{

        const acc_info=req.body;
        console.log(acc_info)
        const {id,password}=acc_info;

        const admin_data=await AdminModel.findOne({admin_id:id})
        console.log(admin_data)

      if(admin_data!=null){
        if(admin_data.admin_password==password){
            // res.send("admin found")

            res.send({code:200,message:"adminhome",token:admin_data.admin_id})
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


// allfeedback function
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


// view all user

export const alluser=async (req,res)=>{

  try{
    const users=await UserRegModel.find()
    if(users!=null){
      res.send(users)
    }
    else{
      res.send("no user registered")
    }
  }
  catch(err){
    console.log(err)
  }

}

export const allhostelowner=async (req,res)=>{

  try{
    const owner=await OwnerModel.find({owner_type:"hostel"})
    if(owner!=null){
      res.send(owner)
    }
    else{
      res.send("no user registered")
    }
  }
  catch(err){
    console.log(err)
  }

}

export const allpgowner=async (req,res)=>{

  try{
    const owner=await OwnerModel.find({owner_type:'pg'})
    if(owner!=null){
      res.send(owner)
    }
    else{
      res.send("no user registered")
    }
  }
  catch(err){
    console.log(err)
  }

}