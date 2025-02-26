import React from "react";
import UserHeader from "./UserHeader";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserEditProfile() {
  const [profile, setProfile] = useState({id:"",name: "", email: "", phone: "" });
  const navigate = useNavigate();
  const URL = "https://hostel-pg-finder.onrender.com/user/profile";
  const edit_URL = "https://hostel-pg-finder.onrender.com/user/editprofile";

  const token_data = localStorage.getItem("token_key");
  console.log(`token data is ${token_data}`);
  useEffect(() => {
    const fetchData = async (e) => {
     

      if (!token_data) {
        navigate("/user_login");
      } else {
        const params = {
          user_id: token_data
        };
        try {
          const resp = await axios.get(URL, { params });
          console.log(resp);

          setProfile(resp.data);
        } catch (err) {
          console.log(err.message);
        }
      }
    };
    fetchData();
  },[]);
  // handlechange
  const handleChange = (event) => {
    setProfile( { ...profile, [event.target.name]: event.target.value }
    );
  };

  //   form submission

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const res = await axios.post(edit_URL, profile);
      console.log(res)
      console.log(res.data);
      if(res.data.acknowledged){
        alert("successful")
      }
    } catch (err) {
      console.log(err.message);
    }
    setProfile({ name: "", email: "", phone: "" });
  };

  return (
    <>
      <UserHeader />

      <div className="container mt-5 d-flex justify-content-center">
        <div className="card p-3" style={{ backgroundColor: "pink" }}>
          <div className="d-flex align-items-center">
            <div className="image">
              <img
                src="https://source.unsplash.com/random/?user"
                className="rounded"
                width="155"
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="ml-3" style={{ marginLeft: "15px" }}>
                <h4 className="mb-0 mt-1">
                  Name:
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={profile.name}
                  />
                </h4>

                <h5 className="mb-0 mt-2">
                  Email:
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={profile.email}
                  />
                </h5>
                <h6 className="mb-0 mt-3">
                  Phone:
                  <input
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value={profile.phone}
                  />
                </h6>

                <button className="btn btn-danger">EditProfile</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
