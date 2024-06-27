import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

import {useParams} from 'react-router-dom'

import Footer from '../Footer'
import UserHeader from './UserHeader'


function Inbox() {
 
  let URL="http://localhost:4000/user/receiveMsg"

  

  const [inbox,setInbox]=useState([])
  // const [state, setState] = useState(false);
  // const [view,setView]=useState(false)
  // const [rid,setRid]=useState("")

 
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
  }, []);

  // const handleClick = async (p) => {
  //   try {
  //     alert(p);
  
  //     setRid(p)
     
  //     setState(true);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // const onView = async (p) => {
  //   try {
  //     alert(p);
  
  //     setRid(p)
     
  //     setView(true);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };


  return (
    <>
    <UserHeader/>
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
          {/* <th scope='col'>
          send reply
        </th>
        <th scope='col'>
          view Reply
        </th> */}
     
        </tr>
      </MDBTableHead>
      <MDBTableBody>

      {inbox.map((e, key = 0) => {
        return(

          e.msg!==''?
          <tr>
           
            <td>{++key}</td>
            <td>{e.sid}</td>
            <td>{e.subject}</td>
            <td>{e.msg}</td>
         
          </tr>: <h2>No Message yet</h2>
        )
            
                
                 
          
          })
          }
      
      </MDBTableBody>
    </MDBTable>
    </div>
    {/* {state && <User_Reply rid={rid} />}

    {view && <User_ViewReply rid={rid} />} */}

   
    <Footer/>
    </>
  );
}

export default Inbox;