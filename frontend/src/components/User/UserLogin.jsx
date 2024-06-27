

import React from 'react'
import './login.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
function UserLogin() {


  const URL="http://localhost:4000/user/login"
  

  
  const [formData,setFormData]=useState({id:"",password:""})
  const navigate=useNavigate()
  const error_msg={}
  const [error,setError]=useState({})
  
  function handleInputChange(event){
    // let field=event.target.name;
    // let newval=event.target.value;
    // setFormData((currData)=>{
    //   currData[field]=newval
    //   return {...currData}

    setFormData((currData)=>{
      return {...currData,[event.target.name]:event.target.value}
    })
}
let handleSubmit= async (event)=>{
    event.preventDefault()
  
    
  


    try{
    

      checkEmpty()
      if(Object.keys(error_msg).length>0){
        setError(error_msg)
  
      }
         else{
      
      const res=await axios.post(URL,formData)
  
      console.log(formData)
    
      console.log(res.data)
   
     
      
      if(res.data.code===200){
        // alert('user exist')
        navigate('/userhome')
        localStorage.setItem("token_key",res.data.token)
        MySwal.fire({
          title: "Login",
          text: "you are login successfully",
          icon: "success",
        });
  
      }
      else if(res.data.code===404){
        alert('password does not match')
      }
      else{
        alert('user not found')
      }
    }

    }
    catch(err){
     console.log(err.message)
    }
   
  }




  // client side validation
  const checkEmpty=()=>{
    if(!formData.id){
      error_msg.id='User Id is Required'
    }
    if(!formData.password){
      error_msg.password='User Password is Required'
    }
  }



  

  return (
    <section className='user'>
    <div className='wrapper'>
        <form method='post' onSubmit={handleSubmit}>
            <h1>User Login</h1>
            <div className="input-box">
                <input type="text" placeholder="ID" name='id' 
                 value={formData.id} 
                onChange={handleInputChange} />
                {error.id && <span style={{color:"white"}}>{error.id}</span>}
                <FaUserAlt className='icon'/>
            </div>
          
            <div className="input-box">
                <input type="password" 
                placeholder="Password" value={formData.password} 
                name='password' onChange={handleInputChange} />
                 {error.password && <span style={{color:"white"}}>{error.password}</span>}
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot" style={{paddingTop:'10px'}}>
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
                
            </div>
            <button >Login</button>
            <div className="register-link">
                <p>Don't have an account?<a href="#">Register</a></p>
            </div>
        </form>
    </div>
    </section>
  )
}

export default UserLogin;