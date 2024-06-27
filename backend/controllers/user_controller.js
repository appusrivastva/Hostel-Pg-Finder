// import UserModel from "../models/user_model.js";
import UserRegModel from "../models/userReg_model.js";
import QueryModel from "../models/Query_model.js";
import message_model from "../models/message_model.js";
import hosteldetail_Model from "../models/HostelDeatils_model.js";
import OwnerRegModel from "../models/ownerReg_model.js";
import roomdetail_Model from "../models/roomDetails_model.js";
import hostelbook_Model from "../models/HostelBooking_model.js";
import qr_model from "../models/QR_model.js";
import pgdetail_Model from "../models/PgDetails_model.js";
import roomdetail_pg_Model from "../models/roomDetails_pg_model.js";
import pgbook_Model from "../models/pgBooking_model.js";
import qr_pg_model from "../models/QR_Pg_model.js";
import feedBack_Model from "../models/feedback_model.js";
export const home = (req, res) => {
  res.send("<h1>this is response from server to home page</h1>");
};

export const user_registration = async (req, res) => {
  try {
    const acc_info = req.body;
    console.log(acc_info);
    const { id, password, name, email, phone } = acc_info;

    const userDoc = new UserRegModel({
      user_id: id,
      user_password: password,
      user_name: name,
      user_email: email,
      user_number: phone,
    });

    await userDoc.save();
  } catch (err) {
    console.log(err.message);
  }
};

export const login = async (req, res) => {
  try {
    //  {}
    const acc_info = req.body;
    console.log(acc_info);
    const { id, password } = acc_info;

    const user_data = await UserRegModel.findOne({ user_id: id });

    console.log(user_data);

    if (user_data != null) {
      if (user_data.user_password == password) {
        // res.send("user found")

        res.send({ code: 200, message: "userhome", token: user_data.user_id });
      } else {
        res.send({ code: 404, message: "password error" });
      }
    } else {
      res.send("invalid credentials");
    }
  } catch (err) {
    console.log(err.message);
  }
};

// user profile view=> function
export const profile = async (req, res) => {
  try {
    const uid = req.query.user_id;

    console.log(`data received ${uid}`);
    const user_data = await UserRegModel.findOne({ user_id: uid });
    res.send(user_data);
  } catch (err) {
    console.log(err.message);
  }
};

// edit profile
export const editprofile = async (req, res) => {
  try {
    const user_data = req.body;
    const { user_id, name, email, phone } = user_data;
    // console.log(user_data)
    const updateDoc = {
      $set: {
        user_name: name,
        user_email: email,
        user_number: phone,
      },
    };
    const filter_condition = { user_id: user_id };
    const status = await UserRegModel.updateOne(filter_condition, updateDoc);
    // console.log(status)
    res.send(status);
  } catch (err) {
    console.log(err);
  }
};
// query details save
export const querySearch = async (req, res) => {
  try {
    const info = req.body;
    console.log(info);
    const { owner_id, user_id, question, answer } = info;

    const queryDoc = new QueryModel({
      owner_id: owner_id,
      user_id: user_id,
      question: question,
      answer: answer,
    });

    await queryDoc.save();
    res.send("Query added successfully");
  } catch (err) {
    console.log(err.message);
  }
};

// view Query and response

export const viewResponse = async (req, res) => {
  try {
    const user_id = req.query.user_id;
    const owner_id = req.query.owner_id;
    console.log("id received from front end" + user_id);
    const Data = await QueryModel.find({
      user_id: user_id,
      owner_id: owner_id,
    });
    res.send(Data);
  } catch (err) {
    console.log(err.message);
  }
};

export const sendMsg = async (req, res) => {
  try {
    const data = req.body;
    const { sid, rid, subject, msg } = data;

    const msgdetail = await message_model({
      sid: sid,
      rid: rid,
      subject: subject,
      msg: msg,
    });
    await msgdetail.save();
    res.send("message send succesfully");
  } catch (err) {
    console.log(err);
  }
};
export const receiveMsg = async (req, res) => {
  try {
    const rid = req.query.rid;
    console.log(rid);
    const re = await message_model.find({ rid: rid });
    console.log(re);
    console.log(`on server ${rid}`);
    if (re != null) {
      res.send(re);
    } else {
      res.send("no message yet");
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const viewhostelowner = async (req, res) => {
  try {
    const Data = await OwnerRegModel.find({ owner_type: "hostel" });
    if (Data != null) {
      res.send(Data);
    } else {
      res.send("no owner yet");
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const viewpgowner = async (req, res) => {
  try {
    const Data = await OwnerRegModel.find({ owner_type: "pg" });
    if (Data != null) {
      res.send(Data);
    } else {
      res.send("no owner yet");
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const viewHostel = async (req, res) => {
  try {
    const owner_id = req.query.owner_id;
    const re = await hosteldetail_Model.find({ owner_id: owner_id });
    console.log(`on server ${owner_id}`);
    console.log(re);
    res.send(re);
  } catch (err) {
    console.log(err.message);
  }
};
export const viewPg = async (req, res) => {
  try {
    const owner_id = req.query.owner_id;
    const re = await pgdetail_Model.find({ owner_id: owner_id });
    console.log(`on server ${owner_id}`);
    console.log(re);
    res.send(re);
  } catch (err) {
    console.log(err.message);
  }
};

export const viewRoom = async (req, res) => {
  try {
    const owner_id = req.query.owner_id;
    const hostel_id=req.query.hostel_id;
    const re = await roomdetail_Model.find({ owner_id: owner_id ,hostel_id:hostel_id});
    console.log(`on server ${owner_id}`);
    console.log(re);
    if (re != null) {
      res.send(re);
    } else {
      res.send("not yet");
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const viewpgRoom = async (req, res) => {
  try {
    const owner_id = req.query.owner_id;
    const pg_id = req.query.pg_id;
    const re = await roomdetail_pg_Model.find({ owner_id: owner_id,pg_id:pg_id });
    console.log(`on server ${owner_id}`);
    console.log(re);
    if (re != null) {
      res.send(re);
    } else {
      res.send("not yet");
    }
  } catch (err) {
    console.log(err.message);
  }
};
// making a fuction for view only one room data according to object id
export const viewoneRoom = async (req, res) => {
  const room_id = req.query.room_id;

  const re = await roomdetail_Model.findOne({ _id: room_id });
  console.log(re);
  if (re != null) {
    res.send(re);
  } else {
    res.send("not any details");
  }
};

// making a fuction for view only one room data according to object id
export const viewone_pgRoom = async (req, res) => {
  const room_id = req.query.room_id;

  const re = await roomdetail_pg_Model.findOne({ _id: room_id });
  console.log(re);
  if (re != null) {
    res.send(re);
  } else {
    res.send("not any details");
  }
};

// hostelbooking
export const bookhostel = async (req, res) => {
  try {
    const data = req.body;
    const { room_id, user_id, hostel_id, owner_id, status } = data;
    const payment_pic = req.file.filename;

    const bookdetail = await hostelbook_Model({
      owner_id: owner_id,
      hostel_id: hostel_id,
      user_id: user_id,
      room_id: room_id,
      payment_pic: payment_pic,
      status: status,
    });
    await bookdetail.save();
    res.send("message send succesfully");
  } catch (err) {
    console.log(err);
  }
};
// pgbooking
export const bookpg = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const { room_id, user_id, pg_id, owner_id, status } = data;
    const payment_pic = req.file.filename;
    const bookdetail = await pgbook_Model({
      owner_id: owner_id,
      pg_id: pg_id,
      user_id: user_id,
      pgroom_id: room_id,
      payment_pic: payment_pic,
      status: status,
    });
    await bookdetail.save();
    res.send("booking data has  saved");
  } catch (err) {
    console.log(err);
  }
};

export const getQR = async (req, res) => {
  const owner_id = req.query.owner_id;

  const re = await qr_model.findOne({ owner_id: owner_id });
  console.log(re);
  if (re != null) {
    res.send(re);
  } else {
    res.send("not any QR ");
  }
};
export const getpgQR = async (req, res) => {
  const owner_id = req.query.owner_id;
  console.log(owner_id);
  const re = await qr_pg_model.findOne({ owner_id: owner_id });
  console.log(re);
  if (re != null) {
    res.send(re);
  } else {
    res.send("not any QR ");
  }
};

// // booking status
// export const bookingStatus=async (req,res)=>{
//   try{
//

//      }else{
//       res.send("no booking yet")
//      }
//   }
//   catch(err){
//     console.log(err)
//   }
// }
export const getHostelBookingDetails = async (req, res) => {
  let room_id = req.params.room_id;
  let user_id=req.params.user_id
  const result = await hostelbook_Model.find({ room_id: room_id,user_id:user_id });

  if (result !== null && result.length !== 0) {
    return res.send(result[result.length - 1]);
  } else {
    return res.send({
      code: 404,
      message: "no booking details found for room with roomid " + room_id,
    });
  }
};

export const getPgBookingDetails = async (req, res) => {
  let room_id = req.params.pgroom_id;
  let user_id=req.params.user_id
  const result = await pgbook_Model.find({ pgroom_id: room_id,user_id:user_id });

  if (result !== null && result.length !== 0) {
    return res.send(result[result.length - 1]);
  } else {
    return res.send({
      code: 404,
      message: "no booking details found for room with roomid " + room_id,
    });
  }
};
export const addFeedback=async (req,res)=>{
  const feedbackData= req.body;
  console.log(feedbackData)


//   object destructuring
  const {name,email,remark,rating}=feedbackData 
  
  

  try{
   const FeedBackDoc=new feedBack_Model({name:name,email:email,remark:remark,rating:rating})
   await FeedBackDoc.save();

   res.send('thank you')
   
  }catch(err){
   console.log(err.message)

  }
}
