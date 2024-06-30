import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

export default function AllPgOwner() {
    let [owner,setOwner]=useState([]);
    let url="https://hostel-pg-finder.onrender.com/admin/allpgowner"
    const navigate=useNavigate();
 

    useEffect(()=>{
 
     const token_data=localStorage.getItem("token_key")
     if(!token_data){
       navigate('/admin_login')
     }
 
     const fetchData=async ()=>{
       try{
         const res=await axios.get(url)
         console.log(res.data)
         setOwner(res.data)
 
       }
       catch(err){
         console.log(err.message)
       }
       
     }
     fetchData()
    });
  return (
    <>
  <AdminHeader/>
  <div className="container">
        <h1 className="mt-4 mb-4" style={{textAlign:"center",fontFamily:"sans-serif"}}>All Pg Owners</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Owner ID</th>
                <th>Owner Email</th>
                <th>Owner Name</th>
                <th>Owner phone</th>
              </tr>
            </thead>
            <tbody>
              {owner.map((e, index) => (
                <tr key={index}>
                  <td>{e.owner_id}</td>
                  <td>{e.owner_email}</td>
                  <td>{e.owner_name}</td>
                  <td>{e.owner_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    <Footer/>
      
    </>
  )
}
