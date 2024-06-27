import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import Home from './components/Home';

import Contact from './components/Contact';
import Layout from './components/Layout';
// import Owner from './components/owner/Owner';
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'

// admin navigation importing
import AdminLogin from './components/Admin/AdminLogin';

import AdminHome from './components/Admin/AdminHome';
import AllFeedback from './components/Admin/AllFeedback';
import AllContact from './components/Admin/AllContact';

// user navigation importing
import UserRegistration from './components/User/UserRegistration';


import UserLogin from './components/User/UserLogin';

import UserHome from './components/User/UserHome';

import AddQR from './components/owner/AddQR';
import Check_pg_payment from './components/owner/Check_pg_payment';
import Feedback from './components/User/Feedback';

// import Owner_login from './components/owner/Owner_login';

// owner login importing
import Owner_Registration from './components/owner/Owner_Registration';

import OwnerLogin from './components/owner/OwnerLogin';
import OwnerHeader from './components/owner/OwnerHeader'
import OwnerContact from './components/owner/OwnerContact'
import Owner_Home from './components/owner/Owner_Home'
import OwnerFeedback from './components/owner/OwnerFeedback'
import UserEditProfile from './components/User/UserEditProfile';
import OwnerEditProfile from './components/owner/OwnerEditProfile'
import OwnerHostel from './components/owner/OwnerHostel';
import OwnerPg from './components/owner/OwnerPg';
import ViewHostel from './components/owner/ViewHostel';
import ViewPg from './components/owner/ViewPg';
import HostelOwner from './components/HostelOwner';
import Pgowner from './components/Pgowner';
import HostelOwner_deatils from './components/HostelOwner_deatils';
import SearchHostel from './components/SearchHostel';
import AskQuery from './components/User/AskQuery';

import Hostel from './components/User/Hostel';
import Pg from './components/User/Pg'
import Pending from './components/owner/Pending';
import Answer from './components/owner/Answer'
import Inbox from './components/owner/Inbox';
import Compose from './components/owner/Compose';
import User_Compose from './components/User/User_Compose'
import User_Inbox from './components/User/User_Inbox'
import ViewResponse from './components/User/ViewResponse';
import RoomeDetails from './components/owner/RoomeDetails';



import User_HostelOwner_details from './components/User/User_HostelOwner_details';
import View_RoomDetails from './components/User/View_RoomDetails';
import HostelBooking from './components/User/HostelBooking';
import CheckPayment from './components/owner/CheckPayment';
import AllHostelOwner from './components/Admin/AllHostelOwner';
import AllPgOwner from './components/Admin/AllPgOwner';
import AllUser from './components/Admin/AllUser';
// import AdminLayout from './components/Admin/AdminLayout';
import User_PgOwner_deatils from './components/User/User_PgOwner_deatils';
import AddQR_Pg from './components/owner/AddQR_Pg';

import View_PgRoomDetails from './components/User/View_PgRoomDetails';


import PgBooking from './components/User/PgBooking';

import Pg_RoomDetails from './components/owner/Pg_RoomDetails'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>

    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
       
        <Route path ="/about" element={<About/>}/>


      <Route path ="/contact" element={<Contact/>}/>
    
      <Route path='/admin_login' element={<AdminLogin/>}/>
      <Route path='/Registration' element={<UserRegistration/>}/>
      <Route path ="/owner" element={<Owner_Registration/>}/>
    <Route path='/owner_login' element={<OwnerLogin/>}/>
    <Route path='/user_login' element={<UserLogin/>}/>
    <Route path='/hostelowner' element={<HostelOwner/>}/>

    <Route path='/pgowner' element={<Pgowner/>}/>

    <Route path='/searchHostel' element={<SearchHostel/>}/>
   
    
    
     
      
      
      
      
    

    </Route>
    {/* admin navigation */}
    <Route>
      <Route path ="/adminhome" element={<AdminHome/>}/>
      <Route path ="/allfeedback" element={<AllFeedback/>}/>
      <Route path ="/allcontact" element={<AllContact/>}/>
      <Route path ="/allhostelowner" element={<AllHostelOwner/>}/>
      <Route path ="/allpgowner" element={<AllPgOwner/>}/>
      <Route path="/alluser" element={<AllUser/>}/>

    </Route>

  {/* user navigation */}
    <Route>
      <Route path ="/userhome" element={<UserHome/>}/>
     
      <Route path ="/editprofile" element={<UserEditProfile/>}/>
      <Route path='/askq/:value' element={<AskQuery/>}/>
      <Route path='/viewQ/:value' element={<ViewResponse/>}/>
      <Route path='/click/:value' element={<User_HostelOwner_details/>}/>
      <Route path='/click_pg/:value' element={<User_PgOwner_deatils/>}/>
      <Route path='/tap/:value/:hostel_id' element={<View_RoomDetails/>}/>
   
      <Route path='/book/:value' element={<HostelBooking/>}/>
      <Route path='/book_pg/:value' element={<PgBooking/>}/>
      <Route path='/tap_pg/:value/:pg_id' element={<View_PgRoomDetails/>}/>
      <Route path ="/feedback" element={<Feedback/>}/>

      <Route path='/hostel' element={<Hostel />}/>

    <Route path='/pg' element={<Pg/>}/>
    <Route path='/compose' element={<User_Compose/>}/>
  <Route path='/inbox' element={<User_Inbox/>}/>


    </Route>
    {/* owner navigation */}

    <Route>
      <Route path ="/ownerhome" element={<Owner_Home/>}/>
      <Route path ="/ownerfeedback" element={<OwnerFeedback/>}/>
      <Route path ="/ownercontact" element={<OwnerContact/>}/>
      <Route path ="/editownerprofile" element={<OwnerEditProfile/>}/>
      <Route path ="/addhostel" element={<OwnerHostel/>}/>
      <Route path='/addPg' element={<OwnerPg/>}/>
      <Route path ="/viewhostel" element={<ViewHostel/>}/>
      <Route path='/viewPg' element={<ViewPg/>}/>
  <Route path='/answer' element={<Answer/>}/>
  <Route path='/pending' element={<Pending/>}/>
  <Route path='/compose_owner' element={<Compose/>}/>
  <Route path='/inbox_owner' element={<Inbox/>}/>
  <Route path='/addQR' element={<AddQR/>}/>
  <Route path='/addQR_pg' element={<AddQR_Pg/>}/>
  
  <Route path='/bookingconfirm' element={<CheckPayment/>}/>
  <Route path='/pgbookingconfirm' element={<Check_pg_payment/>}/>
  
  <Route path='/pg_obj_id/:value' element={<Pg_RoomDetails/>} />
  <Route path='/obj_id/:value' element={<RoomeDetails/>} />

    </Route>
    </>

  )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
    {/* <Owner/> */}
    {/* <Owner_login/> */}
    </>
 
);
