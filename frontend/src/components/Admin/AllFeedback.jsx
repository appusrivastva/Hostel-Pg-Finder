import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';

export default function AllFeedback() {
  const [userfeedback, setUserfeedback] = useState([]);
  const URL = "http://localhost:4000/admin/allfeedback";
  const navigate = useNavigate();

  useEffect(() => {
    const token_data = localStorage.getItem("token_key");
    if (!token_data) {
      navigate('/admin_login');
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(URL);
        setUserfeedback(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <AdminHeader />
     <div style={{backgroundColor:"grey"}}>
     <div style={containerStyle}>
        <h1>All User Feedback</h1>
        <div className="row">
          {userfeedback.map((e, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="card" style={cardStyle}>
                <div className="card-body">
                  <h5 className="card-title">Review: {e.remark}</h5>
                  <h5 className="card-title">Rating: {e.rating}</h5>
                  <h3 className="card-title">Posted By: {e.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
      <Footer />
    </>
  );
}

const containerStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '20px',
};



const cardStyle = {
  marginBottom: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adding shadow effect
  width: 'calc(100% - 40px)', // Set card width to 100% minus 40px (20px margin on each side)
  height: 'auto', // Set card height to auto
};

