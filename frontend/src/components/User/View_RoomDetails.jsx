import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Footer from "../Footer";
import UserHeader from "./UserHeader";

export default function View_RoomDetails() {
  const { value, hostel_id } = useParams();
  const [roomDataWithStatus, setRoomDataWithStatus] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token_data = localStorage.getItem("token_key");
  const url = "http://localhost:4000/user/viewRoomDetails";

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token_data) {
          navigate("/user_login");
          return;
        }

        const params = {
          owner_id: value,
          hostel_id: hostel_id,
        };
        const res = await axios.get(url, { params });

        const data = await fetchData2(res.data);
        setRoomDataWithStatus(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching room details:", error);
        // Handle error: set error state, display error message, etc.
      }
    };

    fetchData();
  }, [navigate, url, value, hostel_id, token_data]);

  const fetchData2 = async (data) => {
    console.log("fetch data 2 called");
    console.log(data);
    for (const e of data) {
      try {
        const res = await axios.get(
          `http://localhost:4000/user/hostelbooking/${e._id}/${token_data}`
        );
        console.log(e, "#########################");
        e.status = res.data.status;
      } catch (e) {}
    }
    return data;
  };

  return (
    <>
      <UserHeader />
      {loading ? (
        <p>Loading...</p>
      ) : roomDataWithStatus.length === 0 ? (
        <p>No room details found.</p>
      ) : (
        roomDataWithStatus.map((e, i) => (
          <div
            className="card m-3"
            style={{
              maxWidth: "18rem",
              border: "3px solid #e0e0e0",
              borderRadius: "15px",
              boxShadow:
                " rgba(50, 50, 93, 1.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              marginBottom: "20px",
            }}
            key={i}
          >
            <div
              className="card-header"
              style={{
                backgroundColor: "#f8f9fa",
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              Room Type : &nbsp; &nbsp; &nbsp; {e.room_type}
            </div>
            <div className="card-body">Charge : &nbsp; &nbsp; &nbsp; {e.charge}</div>
            <div
              className="card-footer text-muted"
              style={{
                backgroundColor: "#f8f9fa",
                borderTop: "1px solid #e0e0e0",
              }}
            >
              Room Seater : &nbsp; &nbsp; &nbsp; {e.room_seater}
            </div>
            <div
              className="card-footer text-muted"
              style={{
                backgroundColor: "#f8f9fa",
                borderTop: "1px solid #e0e0e0",
              }}
            >
              Facilities : &nbsp; &nbsp; &nbsp; {e.facilities}
            </div>
            <h3 style={{ margin: "2px 0px 2px  70px" }}>
              {!e.status ? (
                <Link to={`/book/${e._id}`} className="btn bg-dark text-white">
                  Book Now
                </Link>
              ) : e.status === "confirm" ? (
                <h6>confirmed</h6>
              ) : (
                <h6>Payment In Progress!</h6>
              )}
            </h3>
          </div>
        ))
      )}
      <Footer />
    </>
  );
}
