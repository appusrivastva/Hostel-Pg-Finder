import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import photo from '../../images/admin_login_pic.webp'
import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);


const AdminLogin=() => {
  const URL="https://hostel-pg-finder.onrender.com/admin/login"
    
  const error_msg={}
  const [error,setError]=useState({})

  
  let [formData,setFormData]=useState({id:"",password:""})
  const navigate=useNavigate()
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
    setFormData({id:"",password:""})
    console.log(formData)
  
    
  


    try{
      checkEmpty(formData)

      checkEmpty()
      if(Object.keys(error_msg).length>0){
        setError(error_msg)
  
      }else{
      const res=await axios.post(URL,formData)
      console.log(res.data)
    

     
      
      if(res.data.code===200){
        // alert('admin exist')
        navigate('/adminhome')
        MySwal.fire({
          title: "Login",
          text: "Hello Admin! You have Logged in ",
          icon: "success",
        });
        localStorage.setItem("token_key",res.data.token)
      }
      else if(res.data.code===404){
        alert('password does not match')
      }
      else{
        alert('admin not found')
      }


    }
  }
    catch(err){
     console.log(err.message)
    }
   
  }

  const checkEmpty=()=>{
    if(!formData.id){
      error_msg.id='Admin Id is Required'
    }
    if(!formData.password){
      error_msg.password='Admin Password is Required'
    }
  }



  return (
    <>
    
    <div className="card mb-3" style={{backgroundColor:"darkslategrey"}}>
      <div className="row g-0 d-flex align-items-center">
        <div className="col-lg-5 d-none d-lg-flex">
          <img
            src={photo} style={{height:"600px"}}
            alt="Trendy Pants and Shoes"
            className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
          />
        </div>
        <div className="col-lg-7">
          <div className="card-body py-5 px-md-5">
            <h1 className="text-center text-white">Admin Login</h1>

            <form onSubmit={handleSubmit} method="post">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="id">
                  ID
                </label>
                <input            
                  type="text"
                  name="id"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.id}
                />
                  {error.id && <span style={{color:"pink"}}>{error.id}</span>}
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.password}
                />
                 {error.password && <span style={{color:"pink"}}>{error.password}</span>}
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
   
    </>
  );
}


export default AdminLogin;