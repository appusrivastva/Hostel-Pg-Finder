import React,{useState} from "react";
import axios from "axios";
import photo from '../../images/userR.jpg'


function UserRegistration() {
  const [user,setUser]=useState({
    id:'',password:'',name:'',email:'',phone:''
  })
  let URL="https://hostel-pg-finder.onrender.com/user/register";

  const handelChange=(e)=>{
    // console.log(e.target.name);
    // console.log(e.target.value);
    if (e.target.name === 'name' && /\d/.test(e.target.value)) {
      alert("Name field cannot contain digits.");
      return;
    }
    setUser({...user,[e.target.name]:e.target.value})


  }

  const handleSubmit=async (e)=>{
    e.preventDefault()
      // Basic form validation
      if (!user.id || !user.password || !user.name || !user.email || !user.phone) {
        alert("Please fill in all fields.");
        return;
      }
      // Phone number validation
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(user.phone)) {
       alert("Please enter a valid phone number.");
        return;
      }
        
  
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user.email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      
    setUser({  id:'',password:'',name:'',email:'',phone:''
  })
    console.log('form data',user );



    try{
      const res=await axios.post(URL,user)
      console.log(res.data)
      }
    catch(err){
     console.log(err.message)
    }
  
  }



    return ( 
        <>
        <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src={photo}
                alt="Sample photo" className="img-fluid"
                style={{bordertopleftradius: '.25rem', borderbottomleftradius: '.25rem', height:"100%"}} />
            </div>
            
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">User registration form</h3>

              <form action="" onSubmit={handleSubmit} >

                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example8">ID::</label>
                <input type="text" id="form3Example8" name="id" value={user.id} onChange={handelChange} className="form-control form-control-lg" />

                </div>

              

                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example9">Password::</label>
                  <input type="password" id="form3Example9" name='password' value={user.password} onChange={handelChange} className="form-control form-control-lg" />
                  
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example90">Name::</label>
                  <input type="text" id="form3Example90" name='name' value={user.name} onChange={handelChange} className="form-control form-control-lg" />
                  
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example99">Email::</label>
                  <input type="text" id="form3Example99" value={user.email} onChange={handelChange} 
                  name='email' className="form-control form-control-lg" />
                  
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example97">Phone::</label>
                  <input type="tel" id="form3Example97" value={user.phone} onChange={handelChange} name='phone' className="form-control form-control-lg" />
                  
                </div>

                <div className="d-flex justify-content-end pt-3">
                  {/* <button type="button" className="btn btn-light btn-lg">Reset all</button> */}
                  <button type="submit"  className="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
        </>
     );
}

export default UserRegistration;