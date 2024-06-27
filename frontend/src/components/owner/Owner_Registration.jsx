import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import photo from '../../images/save.jpg'


export default function Owner_Registration() {
  let [formData, setFormData] = useState({
    id: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    gender: "",
    owner_type: ""
  });

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara"
  
]
  const URL = "http://localhost:4000/owner/register";

  function handleInputChange(event) {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value }
    });
  }

  let handleSubmit = async (event) => {
    event.preventDefault();
    
  // Basic form validation
  if (!formData.id || !formData.password || !formData.name || !formData.email || !formData.phone || !formData.city || !formData.address || !formData.gender || !formData.owner_type) {
    alert("Please fill in all fields.");
    return; // Prevent further execution
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return; 
  }

  // Phone number validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(formData.phone)) {
    alert("Please enter a valid phone number.");
    return; 
  }
    console.log(formData);
    setFormData({
      id: "",
      password: "",
      name: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      gender: "",
      owner_type: ""
    });

    try {
      const res = await axios.post(URL, formData);
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: `url(${photo})` }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Owner Registration</h2>
          <MDBInput wrapperClass='mb-4' label='ID' size='lg' id='id' type='text' name='id' onChange={handleInputChange} value={formData.id} required />
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='password'name='password' type='password' onChange={handleInputChange} value={formData.password} />
          <MDBInput wrapperClass='mb-4' label='Owner Name' size='lg' id='name' name='name' type='text' onChange={handleInputChange} value={formData.name} />
          <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='email' name='email' type='email' onChange={handleInputChange} value={formData.email} />
          <MDBInput wrapperClass='mb-4' label='Phone' size='lg' id='phone' name='phone' type='number' onChange={handleInputChange} value={formData.phone} />
          <div className="mb-4">
            <label htmlFor="city" className="form-label">City:</label>
            <select className='form-select' name='city' required id='city' onChange={handleInputChange} value={formData.city}>
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option value={city} key={index}>{city}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className='form-label'>Address</label>
            <textarea name="address" id="address" rows="4" className='form-control' onChange={handleInputChange} value={formData.address}></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="" className='form-label'>Gender:</label>
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name='gender' onChange={handleInputChange} value="male" checked={formData.gender === 'male'} />
              <label htmlFor="" className='form-check-label'>Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name='gender' value="female" onChange={handleInputChange} checked={formData.gender === 'female'} />
              <label htmlFor="" className='form-check-label'>Female</label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="owner_type" className="form-label">Owner Type:</label>
            <select className='form-select' id='owner_type' name='owner_type' value={formData.owner_type} onChange={handleInputChange} required>
              <option value="">Set Type</option>
              <option value="hostel">Hostel</option>
              <option value="pg">PG</option>
            </select>
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleSubmit}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  
    </>
  )
}
