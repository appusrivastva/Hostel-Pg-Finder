import express, { query }  from "express";
import { home,login,user_registration,profile,editprofile,querySearch,viewResponse,sendMsg,
    receiveMsg,viewhostelowner,viewHostel, viewRoom,bookhostel,viewoneRoom,
    getQR,getHostelBookingDetails,viewPg,viewpgowner,viewone_pgRoom,getPgBookingDetails,getpgQR,bookpg,viewpgRoom,addFeedback
    } from "../controllers/user_controller.js";
import payment_img from "../middleware/paymentpic_middleware.js";
import pgpayment_img from '../middleware/pg_paymentpic_middleware.js'



const user_route=express.Router()
user_route.get('/',home)
user_route.post('/login',login)
user_route.post('/register',user_registration)
user_route.get('/profile',profile)
user_route.post('/editprofile',editprofile)


// ask query
user_route.post('/querySearch',querySearch)
// view query by user
user_route.get('/viewResponse',viewResponse)

// message details post
user_route.post('/sendMsg',sendMsg)
// get
user_route.get('/receiveMsg',receiveMsg)

user_route.get('/viewhostelowner',viewhostelowner);
user_route.get('/viewhosteldetails',viewHostel);


user_route.get('/viewpgowner',viewpgowner);

user_route.get('/viewpgdetails',viewPg);

user_route.get('/viewoneRoom',viewoneRoom);

user_route.get('/viewonepgroom',viewone_pgRoom)
user_route.get('/viewRoomDetails',viewRoom);
user_route.get('/viewpgRoomDetails',viewpgRoom);


user_route.get('/viewoneRoom',viewoneRoom);

user_route.post('/bookhostel',payment_img,bookhostel)
user_route.post('/bookpg',pgpayment_img,bookpg)
user_route.get('/hostelbooking/:room_id/:user_id',getHostelBookingDetails);



user_route.post('/addFeedback',addFeedback)







user_route.get('/pgbooking/:pgroom_id/:user_id',getPgBookingDetails);
user_route.get('/getQR',getQR)
user_route.get('/getpgQR',getpgQR)
export default user_route
