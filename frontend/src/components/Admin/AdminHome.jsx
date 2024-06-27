import React from 'react'
import AdminHeader from './AdminHeader'
import Footer from '../Footer'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminHome() {
    const [acname,setAcname]=useState("token data")
    const navigate=useNavigate()
    useEffect(()=>{
        const token_data=localStorage.getItem("token_key");
        console.log(`token data is ${token_data}`)

        if(!token_data){
            navigate("/admin_login")
        }
        setAcname(token_data)
    })







  return (
    <>
    <AdminHeader/>
        <h1>Hello {acname}</h1>
    
  
      
    </>
  )
}
