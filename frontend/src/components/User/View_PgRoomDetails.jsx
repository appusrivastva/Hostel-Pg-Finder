import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Footer from "../Footer";
import UserHeader from "./UserHeader";

export default function View_PgRoomDetails() {
  const { value, pg_id } = useParams();
  const url = "https://hostel-pg-finder.onrender.com/user/viewpgRoomDetails";
  const token_data = localStorage.getItem("token_key");

  const [roomDataWithStatus, setRoomDataWithStatus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token_data) {
          navigate("/user_login");
          return;
        }

        const params = {
          owner_id: value,
          pg_id: pg_id,
        };

        const res = await axios.get(url, { params });
        const data = await fetchData2(res.data);
        setRoomDataWithStatus(data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };
    fetchData();
  }, [url, value, pg_id, token_data, navigate]);

  const fetchData2 = async (data) => {
    console.log("called 2nd useEffect with data -> ", data);
    if (data.length > 0) {
      for (const e of data) {
        try {
          const res = await axios.get(`https://hostel-pg-finder.onrender.com/user/pgbooking/${e._id}/${token_data}`);
          console.log(res);
          e.status = res.data.status;
          console.log(e.status);
        } catch (error) {
          console.error("Error fetching data for ID:", e._id, error);
        }
      }
    }
    return data;
  };

  return (
    <>
      <UserHeader />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {roomDataWithStatus.map((e, i) => (
          <div
            key={i}
            className="card m-3"
            style={{
              maxWidth: "18rem",
              border: "3px solid #e0e0e0",
              borderRadius: "15px",
              boxShadow:
                " rgba(50, 50, 93, 1.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              marginBottom: "20px",
            }}
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
            <div style={{ margin: "2px 0px 2px  70px" }}>
              {e.status === undefined ? (
                <Link to={`/book_pg/${e._id}`} className="btn bg-dark text-white">
                  Book Now
                </Link>
              ) : e.status === "confirm" ? (
                <p>confirmed</p>
              ) : (
                <h6>Payment In Progress!</h6>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
