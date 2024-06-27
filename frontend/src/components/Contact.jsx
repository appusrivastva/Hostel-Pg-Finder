import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import photo from "../images/contact_us_pic.avif";

const MySwal = withReactContent(Swal);

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleChange = (e) => {
    if (e.target.name === 'name' && /\d/.test(e.target.value)) {
      alert("Name field cannot contain digits.");
      return;
    }
    const { name, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handelForm = async (e) => {
    e.preventDefault();
     // Basic form validation
     if (!contact.name || !contact.email || !contact.query) {
      MySwal.fire({
        title: "Validation Error",
        text: "Please fill in all required fields.",
        icon: "error",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contact.email)) {
      MySwal.fire({
        title: "Validation Error",
        text: "Please enter a valid email address.",
        icon: "error",
      });
      return;
    }

  
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(contact.phone)) {
      MySwal.fire({
        title: "Validation Error",
        text: "Please enter a valid phone number.",
        icon: "error",
      });
      return;
    }

    setContact({
      name: "",
      email: "",
      phone: "",
      query: "",
    });

    try {
      const res = await axios.post("http://localhost:4000/addContact", contact);
      MySwal.fire({
        title: "Contact",
        text: res.data,
        icon: "success",
      });
    } catch (err) {
      console.log("error" + err.message);
    }
  };

  const styles = {
    contactSection: {
      backgroundColor: "DimGrey",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "50px 0",
    },
    contactImage: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "10px",
    },
    contactForm: {
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "20px",
    },
    formGroup: {
      marginBottom: "20px",
    },
    formLabel: {
      fontWeight: "bold",
    },
    submitButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.contactSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={photo} alt="" style={styles.contactImage} />
          </div>

          <div className="col-lg-6">
            <div style={styles.contactForm}>
              <h1>Contact Us</h1>

              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.formLabel}>
                  Name
                </label>
                <input
                  type="text"
                  value={contact.name}
                  onChange={handleChange}
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.formLabel}>
                  Email
                </label>
                <input
                  type="email"
                  value={contact.email}
                  onChange={handleChange}
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="phone" style={styles.formLabel}>
                  Phone
                </label>
                <input
                  type="tel"
                  value={contact.phone}
                  onChange={handleChange}
                  className="form-control"
                  id="phone"
                  name="phone"
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="query" style={styles.formLabel}>
                  Query
                </label>
                <textarea
                  className="form-control"
                  value={contact.query}
                  onChange={handleChange}
                  id="query"
                  name="query"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" onClick={handelForm} style={styles.submitButton}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
