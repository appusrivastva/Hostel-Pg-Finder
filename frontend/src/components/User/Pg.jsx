


import React, { useState, useEffect, Children } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Background from '../../images/accommodation.jpg'
import UserHeader from "./UserHeader";
import Footer from "../Footer";




export default function Pg() {
  var bacgroundStyle = {
    width: "100%",
    minHeight: "100%",
    backgroundImage: "url(" + Background + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    marginBottom: "500px",
  };
  const [owner, setOwner] = useState([]);

 

  let URL = "http://localhost:4000/user/viewpgowner";

 

  useEffect(() => {
    const fetchData = async () => {
      const token_data = localStorage.getItem("token_key");
      console.log(`token data is ${token_data}`);

      try {
        const res = await axios.get(URL);
        console.log(res.data);
        setOwner(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);




  return (
    <>
    <UserHeader/>
    
    <div style={bacgroundStyle}>
        
      <h1 style={{ color: "goldenrod",
       backgroundColor: "black"}}>
        
        All Pg Owner
      </h1>
      <div className="row" style={{ justifyContent: "center",
      }}>
        {owner.map((e) => {
          return (
            <div className="col-sm-10">
              <div className="card bg-info text-white mb-3 border-danger">
                <div className="card-body">
                  <h5 className="card-title">Owner name is :{e.owner_name}</h5>
                  <h5 className="card-title">email is: {e.owner_email}</h5>
                  <h5 className="card-title">
                    owner contact is :{e.owner_number}
                  </h5>
                  <h5 className="card-title">owner city is:{e.owner_city}</h5>
                  <h5 className="card-title">owner type is:{e.owner_type}</h5>
           

                <h3>
                    
                    <Link
                      to={`/askQ/${e.owner_id}`}
                      className="btn bg-dark text-white"
                      
                    >
                    Ask Query
                    </Link>
                  </h3>
                  <h3>
             
             

              <Link
                      to={`/viewQ/${e.owner_id}`}
                      className="btn bg-dark text-white"
                    
                    >
                    View Query
                    </Link>
                  </h3>
                  <h3>
                    
              <Link
                      to={`/click_pg/${e.owner_id}`}
                      className="btn bg-dark text-white"
                    
                    >
                    Click For Accomodation Details
                    </Link>

                  </h3>

              
                </div>
              </div>
            </div>
          );
        })}
      </div>

 


      
   
      
    </div>
    <Footer/>

    </>
  );
}
