import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import UserHeader from "./UserHeader";

export default function HostelBooking() {
  const token_data = localStorage.getItem("token_key");
  const { value } = useParams();
  const rid = value;
  const navigate = useNavigate();
  const url = "https://hostel-pg-finder.onrender.com/user/viewoneRoom";
  const book_URL = "https://hostel-pg-finder.onrender.com/user/bookhostel";
  // get QR
  const QR_url = "https://hostel-pg-finder.onrender.com/user/getQR";

  const [aroomdata, setAroomdata] = useState("");
  const [book, setBook] = useState({
    room_id: rid,
    user_id: token_data,
    hostel_id: "",
    owner_id: "",
    status: "pending",
  });
  const [payment_pic, setPayment_pic] = useState("");
  const [qrcode, setQrcode] = useState("");
  const [istoast,setIstoast]=useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!token_data) {
        navigate("/user_login");
      } else {
        const params = { room_id: rid };
        try {
          const res = await axios.get(url, { params });
          setAroomdata(res.data);
          console.log(res.data.owner_id);
          console.log(aroomdata);
        } catch (e) {
          console.log(e);
        }
      }
    };
    fetchData();
  }, []);

  const fetchData1 = async () => {
    const owner_id = aroomdata.owner_id;
    console.log("on jsx" + owner_id);
    const params = { owner_id: owner_id };
    try {
      const res = await axios.get(QR_url, { params });
      setQrcode(res.data);
      console.log(qrcode);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData1();
  }, [aroomdata]);

  const handlePic = (e) => {
    let selectpic = e.target.files[0];
    setPayment_pic(selectpic);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form_info = new FormData();
      form_info.append("room_id", book.room_id);
      form_info.append("user_id", book.user_id);
      form_info.append("hostel_id", aroomdata.hostel_id);
      form_info.append("owner_id", aroomdata.owner_id);
      form_info.append("payment_pic", payment_pic);
      form_info.append("status", book.status);
      const res = await axios.post(book_URL, form_info);
      console.log(res);
      setIstoast(true)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <UserHeader />
      <div style={containerStyle} >
        <form onSubmit={handleSubmit} style={formStyle}>
          <h1 style={{ textAlign: "center" }}>PAYMENT</h1>
          <label htmlFor="charge" style={labelStyle}>
            Charge:
          </label>
          {/* <h1>{aroomdata.owner_id}</h1> */}
          <input
            type="text"
            id="charge"
            value={aroomdata.charge}
            disabled
            style={inputStyle}
          />

          {/* get QR code  */}
          <img
            src={`https://hostel-pg-finder.onrender.com/ALL_QR_CODE/${qrcode.qr_code}`}
            alt="QR"
            style={imageStyle}
          />
          <br />
          <label htmlFor="pic" style={labelStyle}>
            Upload pic
          </label>
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            name="payment_pic"
            onChange={handlePic}
            accept="image/*"
            style={inputStyle}
          />

          <h5 style={headingStyle}>Booking Status:{book.status}</h5>
          <button style={buttonStyle}>Submit</button>
        </form>
      </div>
      
      <div
        className="d-flex"
        style={{ width: "fit-content", backgroundColor: '#e5f2eaaa',borderRadius:"10px",position:'absolute',top:'40px',right:'40px' ,
        transform: `${istoast?"":'translate(0px, -190px)'}`,transitionProperty:"transform",transitionDuration:'2s',transition:'ease-in-out'
        ,backdropFilter:'blur(5px)',boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',


      }}
      >
        <div style={{ width: "10px", backgroundColor: '#16a34a',borderTopLeftRadius:"10px",borderBottomLeftRadius:'10px',
      }}></div>
        <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
          <div style={{paddingLeft:'20px',paddingRight:'20px',color:'#16a34a',

        }}>
            <h2 style={{fontSize:'25px',paddingTop:'20px'}}>Success</h2>
            <p>your booking has been queued!
            please,  track your booking status.
            </p>
          </div>
          <div style={{width:"24px",height:"24px",backgroundColor:"white",
          padding:'5px',borderRadius:"50%",
          display:'flex',alignItems:'center',marginRight:'20px',cursor:'pointer'}} onClick={()=>{
            setIstoast(false)
            navigate(`/tap/${aroomdata.owner_id}/${aroomdata.hostel_id}`)
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(to bottom right, #bdc3c7, #2c3e50)", // Background gradient
};

const formStyle = {
  width: "50%",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow
  background: "rgba(255, 255, 255, 0.7)", // Transparent background
};

const labelStyle = {
  marginBottom: "10px",
  fontSize: "16px",
};

const inputStyle = {
  marginBottom: "20px",
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  width: "100%",
};
const headingStyle = {
  marginBottom: "20px",
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  width: "100%",
  fontSize: "16px",
};
const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const imageStyle = {
  width: "100px",
  height: "100px",
  marginBottom: "20px",
  borderRadius: "5px",
};
