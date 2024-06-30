import React from "react";
import Table from "react-bootstrap/Table";
import OwnerHeader from "./OwnerHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

export default function Pending() {
  const [view, setView] = useState([]);


  const URL = "https://hostel-pg-finder.onrender.com/owner/viewquery";

  useEffect(() => {
    const fetchData = async (e) => {
      const token_data = localStorage.getItem("token_key");
      console.log(`token data is ${token_data}`);

      try {
        const resp = await axios.get(URL);
        console.log(resp);

        setView(resp.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);




  return (
    <>
      <OwnerHeader />
      <h1 style={{ textAlign: "center" }}>View Response</h1>

      <Table stripped bordered hover size="sm">
        <thead>
          <tr>
           
            <th width="170">No.</th>
            <th width="170">user_id</th>
            <th width="170">Query</th>
            <th width="170">answer</th>
          </tr>
        </thead>
        <tbody>
          {view.map((e, key = 0) => {
            return (
                
                    e.answer!==''?
                <tr>
             
                 
                 <td>{++key}</td>
                 <td>{e.user_id}</td>
                 <td>{e.question}</td>
                 <td>{e.answer}</td>
                 </tr>
               
               :<h3>No query</h3>
                 
            );
          })}
        </tbody>
      </Table>
      <Footer/>

   
    </>
  );
}
