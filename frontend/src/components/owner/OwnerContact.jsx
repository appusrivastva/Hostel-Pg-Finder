


import React from 'react'
import Footer from '../Footer'
import axios from 'axios'
import { useState,useEffect } from 'react'
import OwnerHeader from './OwnerHeader'

import { useNavigate } from 'react-router-dom'
export default function AllContact() {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
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
  const URL="https://hostel-pg-finder.onrender.com/owner/allcontact";
  const [usercontact,setUsercontact]=useState([]);
  useEffect(()=>{
     const fetchData=async ()=>{
      try{
        const response=await axios.get(URL)
        console.log(response.data)
        setUsercontact(response.data);

      }catch(err){
        console.log(err.messsage)
      }

     }
     fetchData()
  },[profile])
  return (
    <>
    <OwnerHeader owner_type={profile.owner_type}/>
    
    <div style={containerStyle}>
        <h1>User Contact Information:</h1>
        <table style={tableStyle}>
          <thead style={theadStyle}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th style={columnStyle}>Phone</th>
              <th style={columnStyle}>Query</th>
            </tr>
          </thead>
          <tbody>
            {usercontact.map((e, index) => (
              <tr key={index}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td style={columnStyle}>{e.phone}</td>
                <td style={columnStyle}>{e.query}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    <Footer/>
      
    </>
  )
}
const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f7f7f7', // Background color for container
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};
const theadStyle = {
  backgroundColor: '#212529',
  color: '#fff',
};

const columnStyle = {
  padding: '8px',
  borderRight: '1px solid #ddd', // Light lines separating columns
};
