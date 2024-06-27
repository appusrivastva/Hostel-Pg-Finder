import express  from "express";
import { home,owner_registration,login,allcontact,allfeedback ,profile,editprofile, 
    addHostel, viewHostel, viewHostelOwner, addPg,viewPgOwner,viewPg,viewHostels,viewquery,answerquery,
    sendMsg,
    receiveMsg,
    addroom_details,
    addQR,addpg_rooms,
    checkPayment,
    confirmBooking,viewPgs,checkpgPayment,confirmpgBooking,
    addQR_pg} from "../controllers/owner_controller.js";
import upload_img from "../middleware/hostelDeatils_middlewae.js";
import load_img from "../middleware/pgDetails_middleware.js";
import upload_QR from "../middleware/add_QR_middleware.js";
import upload_QR_pg from "../middleware/add_QR_pg_middleware.js";



const owner_route=express.Router()
owner_route.get('/',home)
owner_route.post('/register',owner_registration)
owner_route.post('/login',login)



owner_route.get('/allfeedback',allfeedback)

owner_route.get('/allcontact',allcontact)

owner_route.get('/profile',profile)
owner_route.post('/hostelDetail',upload_img,addHostel)
owner_route.post('/pgDetail',load_img,addPg)



owner_route.get('/viewhostel',viewHostel)
owner_route.get('/viewpg',viewPg)

owner_route.post('/editprofile',editprofile)


// all owner name view by user
owner_route.get('/viewHostelOwner',viewHostelOwner);
owner_route.get('/viewpgOwner',viewPgOwner);
owner_route.get('/viewquery',viewquery)
owner_route.post('/answerquery',answerquery)

// message details post
owner_route.post('/sendMsg',sendMsg)
// get
owner_route.get('/receiveMsg',receiveMsg)

// all accomodation (hostel)details of a single owner shown
owner_route.get('/viewHosteldetails/:param',viewHostels);


// all accomodation (pg)details of a single owner shown
owner_route.get('/viewPgdetails/:param',viewPgs);





owner_route.post('/roomdetails',addroom_details)

owner_route.post('/pgroomdetails',addpg_rooms)


owner_route.post('/addQR',upload_QR,addQR)
owner_route.post('/addQR_pg',upload_QR_pg,addQR_pg)


owner_route.get('/checkpayment',checkPayment)
owner_route.post('/confirmbook',confirmBooking)

owner_route.get('/checkpgpayment',checkpgPayment)
owner_route.post('/confirmpgbook',confirmpgBooking)
export default owner_route
