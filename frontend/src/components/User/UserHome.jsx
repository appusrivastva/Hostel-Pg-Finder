import React from "react";
import UserHeader from "./UserHeader";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";

export default function UserHome() {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const URL = "https://hostel-pg-finder.onrender.com/user/profile";
  useEffect(() => {
    const fetchData = async (e) => {
      const token_data = localStorage.getItem("token_key");
      console.log(`token data is ${token_data}`);

      if (!token_data) {
        navigate("/user_login");
      } else {
        const params = {
          user_id: token_data,
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
      <UserHeader />
      <div className="container mt-5 d-flex justify-content-center" style={{backgroundColor:"pink",width:"800px",height:"200px"}}>
        <div className="card p-3" >
          <div className="d-flex align-items-center">
            <div className="image">
              <img
                src="https://source.unsplash.com/random/?user"
                className="rounded"
                width="155"
              />
            </div>

            <div className="ml-3" style={{marginLeft:"15px"}}>
              <h4 className="mb-0 mt-1">Name:{profile.user_name}</h4>
              
              <h5 className="mb-0 mt-2">Email:{profile.user_email}</h5>
              <h6 className="mb-0 mt-3">Phone:{profile.user_number}</h6>
        

            

            
            </div>
     
          </div>
          <Link to="/editprofile"><i class='fas fa-edit' style={{fontSize:"12px"}}></i>edit</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
