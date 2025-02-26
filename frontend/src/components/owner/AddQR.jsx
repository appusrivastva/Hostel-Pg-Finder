import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import OwnerHeader from './OwnerHeader';
import backgroundImg from '../../images/qr_code.jpg';
import Footer from '../Footer';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export default function AddQR() {
  const [qrcode, setQrcode] = useState("");
  const [profile, setProfile] = useState({});
  
  const P_URL = "https://hostel-pg-finder.onrender.com/owner/profile";
  const navigate = useNavigate();
  const handlePic = (e) => {
    let selectpic = e.target.files[0];
    setQrcode(selectpic);
  };

  const token_data = localStorage.getItem("token_key");
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

  const URL = "https://hostel-pg-finder.onrender.com/owner/addQR";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("qrcode", qrcode);
    data.append("owner_id", token_data);
    try {
      const res = await axios.post(URL, data);
      console.log(data);
      setQrcode("");
    } catch (err) {
      console.log(err);
    }
    MySwal.fire({
      title: "Success",
      text: "QR uploaded successfully",
      icon: "success",
    });
  };

  return (
    <>
      <OwnerHeader owner_type={profile.owner_type} />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "75vh",
          background: `url(${backgroundImg}) center center/cover no-repeat`,
        }}
      >
        <div className="upload-container" style={{ backgroundColor: 
          'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <label className="custom-file-upload" htmlFor="file" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
        <h5>QRcode</h5>
           
            <div className="icon" style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24">
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </g>
              </svg>
            </div>
            <div className="text" style={{ marginTop: '10px', fontSize: '16px', color: '#333' }}>
              <span>Click to upload image</span>
            </div>
            <input type="file" id="file" name="qrcode" onChange={handlePic} accept="image/*" style={{ display: 'none' }} />
            <button onClick={handleSubmit} style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
              Submit
            </button>
          </label>
        </div>
      </div>
      <Footer/>
    </>
  );
}
