import React, { useState, useEffect, Children } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Background from "../images/accommodation.jpg";
import HostelOwner_deatils from "./HostelOwner_deatils";




export default function HostelOwner() {
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
  const [hostel, setHostel] = useState([]);
  const [isvisible,setIsvisible]=useState(true)
  // const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [state, setState] = useState(false);


  let URL = "http://localhost:4000/owner/viewHostelOwner";
  let new_url = "http://localhost:4000/owner/viewHosteldetails/";

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

  const handleClick = async (p) => {
    try {
      alert(p);
      const rs = await axios.get(`${new_url}${p}`);
      console.log(`the data is ${rs.data}`);
      setHostel(rs.data);
     setIsvisible(false)
   
     
      setState(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  // const handleAsk= async (p) => {
  //   try {
  //     alert(p);
  //     // const rs = await axios.get(`${new_url}${p}`);
  //     // console.log(`the data is ${rs.data}`);
  //     // setHostel(rs.data);
  //    setIsvisible(false)
 
  //    setAskQ(true)
    
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // const handleView = async (p) => {
  //   try {
  //     alert(p);
  //     // const rs = await axios.get(`${new_url}${p}`);
  //     // console.log(`the data is ${rs.data}`);
  //     // setHostel(rs.data);
  //    setIsvisible(false)
  
  //    setViewQ(true)
    
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  // kaise pta lgega user login hain

  
  



  return (
    <div style={bacgroundStyle}>
      <h1 style={{ color: "goldenrod", backgroundColor: "black" ,
      display:`${isvisible?'flex':'none'}`}}>
        
        All Hostel Owner
      </h1>
      <div className="row" style={{ justifyContent: "center",
      display:`${isvisible?'flex':'none'}`}}>
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
                      to="#"
                      className="btn bg-dark text-white"
                      onClick={() => handleClick(e.owner_id)}
                    >
                      {e.name} click for view accommodation details
                    </Link>
                  </h3>

          
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {state && <HostelOwner_deatils info={hostel} />}
      
      {/* {askQ && <AskQuery info={hostel} />} */}
      
      {/* {viewQ && <ViewQuery info={hostel} />} */}



      
   
      
    </div>
  );
}
