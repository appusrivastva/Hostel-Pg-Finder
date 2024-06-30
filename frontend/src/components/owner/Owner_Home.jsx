import React from 'react'
import OwnerHeader from './OwnerHeader'
import Footer from '../Footer'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'

export default function OwnerHome() {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const URL = "https://hostel-pg-finder.onrender.com/owner/profile";
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
          const resp = await axios.get(URL, {params});
          console.log(resp)

          setProfile(resp.data);
        } catch (err) {
          console.log(err.message);
        }
      }
    };
    fetchData();
  },[]);






  return (
    <>
    <OwnerHeader owner_type={profile.owner_type}/>
    <div className="container mt-5 d-flex justify-content-center" >
        <div className="card p-3" style={{backgroundColor:"pink"}}>
          <div className="d-flex align-items-center">
            <div className="image">
              <img
                src="https://source.unsplash.com/random/?user"
                className="rounded"
                width="155"
              />
            </div>

            <div className="ml-3" style={{marginLeft:"15px"}}>
              <h4 className="mb-0 mt-1">Name:{profile.owner_name}</h4>
              
              <h5 className="mb-0 mt-2">Email:{profile.owner_email}</h5>
              <h6 className="mb-0 mt-3">Phone:{profile.owner_number}</h6>
              <h6 className="mb-0 mt-3">Type:{profile.owner_type}</h6>

        

            

            
            </div>

          </div>
         
          <Link to="/editownerprofile"><i class='fas fa-edit' style={{fontSize:"12px"}}></i>edit</Link>
        </div>
      </div>
    
    <Footer/>
      
    </>
  )
}
