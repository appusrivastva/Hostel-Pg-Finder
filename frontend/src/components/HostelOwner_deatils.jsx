import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import {useNavigate,Link} from 'react-router-dom'

export default function HostelOwner_deatils({info}) {

  



  return (
    <>

 
    <h1>Hostel Owner details</h1>

    <div className="row row-cols-1 row-cols-md-3 g-4">
    {
      info.map((e)=>{
        return(
        
   
        
  <div className="col">
    <div className="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top"
        alt="Hollywood Sign on The Hill" />
      <div className="card-body">
        <h5 className="card-title">Hostel Name is:{e.name}</h5>
        <p className="card-text">
          <h6>owner contact email is {e.email} </h6>
          <h6>and the contact number is {e.phone}</h6>
          
        </p>
        <h5 className="card-title">Hostel address is:{e.address}</h5>
         <h5 className="card-title">Hostel type  is:{e.hostel_type}</h5>

  
      
      </div>
    </div>
  </div>
   
        )
      })
    }
  
  </div>
      
    
    
    
    <Footer/>
      
    </>
  )
}
