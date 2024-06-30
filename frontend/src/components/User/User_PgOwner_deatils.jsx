import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Footer from "../Footer";
import UserHeader from "./UserHeader";

export default function User_PgOwner_deatils() {
  const [pg, setPg] = useState([]);
  const { value } = useParams();
  let URL = "https://hostel-pg-finder.onrender.com/user/viewpgdetails";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token_data = localStorage.getItem("token_key");
      if (!token_data) {
        navigate("/user_login");
      } else {
        const params = {
          owner_id: value,
        };
        try {
          const resp = await axios.get(URL, { params });
          setPg(resp.data);
        } catch (err) {
          console.log(err.message);
        }
      }
    };
    fetchData();
  }, [value, navigate]);

  return (
    <>
      <UserHeader />
      <h1>Pg Owner details</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pg.map((e) => (
          <div key={e._id} className="card" style={{ flex: "0 0 calc(33.33% - 20px)", margin: "10px" }}>
            <img src={`https://hostel-pg-finder.onrender.com/addpg/${e.pic}`} className="card-img-top" alt="Pg" />
            <div className="card-body">
              <h5 className="card-title">Pg Name: {e.name}</h5>
              <p className="card-text">
                <h6>Owner contact email: {e.email}</h6>
                <h6>Contact number: {e.phone}</h6>
              </p>
              <h5 className="card-title">Pg address: {e.address}</h5>
              <h5 className="card-title">Pg type: {e.pg_type}</h5>
              <h3>
                <Link to={`/tap_pg/${e.owner_id}/${e._id}`} className="btn bg-dark text-white">
                  Tap for Room Details
                </Link>
              </h3>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
