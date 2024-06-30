import React, { useState,useEffect } from 'react';


import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

import {useParams,useNavigate} from 'react-router-dom'

import Footer from '../../components/Footer'
import OwnerHeader from './OwnerHeader'

function Inbox() {
  const [profile, setProfile] = useState({});
  let URL="https://hostel-pg-finder.onrender.com/owner/receiveMsg"
 
  const navigate=useNavigate()

  const [inbox,setInbox]=useState([])
  const P_URL = "https://hostel-pg-finder.onrender.com/owner/profile";
  useEffect(() => {
    const fetchData = async (e) => {
      const token_data = localStorage.getItem("token_key");
      console.log(`token data is ${token_data}`);

      if (!token_data) {
        navigate("/owner_login");
      } else {
        const params = {
          owner_id: token_data,
        };
        try {
          const resp = await axios.get(P_URL, {params});
          console.log(resp)

          setProfile(resp.data);
        } catch (err) {
          console.log(err.message);
        }
      }
    };
    fetchData();
  },[]);
 


  
  useEffect(() => {
    const fetchData = async (e) => {
      const token_data = localStorage.getItem("token_key");
      console.log(`token data is ${token_data}`);
      const params={
        rid:token_data
      }
      try {
      
        const resp = await axios.get(URL,{params});
        console.log(resp);

        setInbox(resp.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [profile]);

 

  return (
    <>
    <OwnerHeader owner_type={profile.owner_type}/>
    <div style={{  background: "#6a11cb",

      /* Chrome 10-25, Safari 5.1-6 */
      background:" -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))",
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      background: "linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))"}}>
    <MDBTable>
      <MDBTableHead dark>
        <tr>
       
          <th scope='col'>#</th>
          <th scope='col'>Sender_Id</th>
          <th scope='col'>Subject</th>
          <th scope='col'>Message</th>
       
     
        </tr>
      </MDBTableHead>
      <MDBTableBody>

      {inbox.map((e, key = 0) => {
        return(
          <tr>
        
            <td>{++key}</td>
            <td>{e.sid}</td>
            <td>{e.subject}</td>
            
            <td>{e.msg}</td>
      
          </tr>
        )
            
                
                 
          
          })
          }
      
      </MDBTableBody>
    </MDBTable>
    </div>

 
    <Footer/>
    </>
  );
}

export default Inbox;