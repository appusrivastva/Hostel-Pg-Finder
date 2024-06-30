import React, { useState } from "react";
import axios from "axios";
import OwnerHeader from "./OwnerHeader";
import photo from '../../images/hostelpic.jpg';
import Footer from "../Footer";
import { MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdb-react-ui-kit';

export default function OwnerHostel() {
  const token_data = localStorage.getItem("token_key");
  console.log(`token data is ${token_data}`);
  const [formData, setFormData] = useState({
    owner_id: token_data,
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    hostel_type: "",
    facilities: "",
  });

  const [pic, setPic] = useState("");
  const cities =[
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
  
];
  const URL = "https://hostel-pg-finder.onrender.com/owner/hostelDetail";

  const validateForm = () => {
    // Name validation
    if (!formData.name.trim()) {
      alert("Hostel name is required");
      return false;
    }

    // Email validation
    if (!formData.email.trim()) {
      alert("Email is required");
      return false;
    } else if (!isValidEmail(formData.email)) {
      alert("Invalid email format");
      return false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      alert("Phone number is required");
      return false;
    } else if (!isValidPhone(formData.phone)) {
      alert("Invalid phone number");
      return false;
    }

    // City validation
    if (!formData.city.trim()) {
      alert("City is required");
      return false;
    }

    // Photo validation
    if (!pic) {
      alert("Hostel picture is required");
      return false;
    }

    return true;
  };

  const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Validate input type text to allow only alphabetic characters
    if (name === "name" || name === "city"  ) {
      if (/^[a-zA-Z\s]*$/.test(value) || value === "") {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handlePic = (e) => {
    const selectpic = e.target.files[0];
    setPic(selectpic);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const form_info = new FormData();
        form_info.append("owner_id", formData.owner_id);
        form_info.append("name", formData.name);
        form_info.append("email", formData.email);
        form_info.append("phone", formData.phone);
        form_info.append("city", formData.city);
        form_info.append("address", formData.address);
        form_info.append("hostel_type", formData.hostel_type);
        form_info.append("facilities", formData.facilities);
        form_info.append("pic", pic);

        const res = await axios.post(URL, form_info);
        console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }

      // Reset form data after submission
      setFormData({
        owner_id: token_data,
        name: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        hostel_type: "",
        facilities: "",
      });
      setPic(""); // Clear the selected photo
    }
  };



  return (
    <>
      <OwnerHeader owner_type={'hostel'}/>
      <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image" style={{ backgroundImage: `url(${photo})`,backgroundRepeat:"no-repeat",backgroundSize:'cover' }}>
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: '600px' }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Hostel Details</h2>
          <MDBInput label="Hostel Name:" size="lg" id="name" type="text" onChange={handleInputChange} value={formData.name} name="name"/>
          <MDBInput label="Email:" size="lg" id="email" type="email" onChange={handleInputChange} value={formData.email} name="email"/>
          <MDBInput label="Phone:" size="lg" id="phone" type="phone" onChange={handleInputChange} value={formData.phone} name="phone"/>
          <div className="mb-4">
            <label htmlFor="city" className="form-label">City:</label>
            <select className="form-select" name="city"  id="city" onChange={handleInputChange} value={formData.city} >
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option value={city} key={index}>{city}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="form-label">Address:</label>
            <textarea name="address" id="address" rows="4" className="form-control" onChange={handleInputChange} value={formData.address}></textarea>
          </div>
          <div className="mb-4">
            <label className="form-label">Hostel_Type:</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="hostel_type" id="girls" value="girls" onChange={handleInputChange} checked={formData.hostel_type === 'girls'} />
              <label className="form-check-label" htmlFor="girls">Girls</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="hostel_type" id="boys" value="boys" onChange={handleInputChange} checked={formData.hostel_type === 'boys'} />
              <label className="form-check-label" htmlFor="boys">Boys</label>
            </div> accept="image/*"
          </div>
          <div className="form-group mb-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Facilities</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="facilities" onChange={handleInputChange} value={formData.facilities}></textarea>
          </div>
          <div className="custom-file mb-4">
            <label className="custom-file-label" htmlFor="customFile">hostel Pic:</label>
            <input type="file" className="custom-file-input" id="customFile"
             name="pic" onChange={handlePic} />
          </div>
          <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg" onClick={handleSubmit}>Submit</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    <Footer/>
    </>
    
  );
}
