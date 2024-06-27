import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "../../css/ownerHeader.css";

const OwnerHeader = ({ owner_type }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const navigate = useNavigate();
  const token_data = localStorage.getItem("token_key");

  const logout = (e) => {
    e.preventDefault();
    if (!token_data) {
      navigate("/owner_login");
    } else {
      localStorage.removeItem("token_key");
      navigate("/owner_login");
    }
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li
            style={{
              marginRight: "10px",
              color: "goldenrod",
              fontWeight: "bold",
            }}
          ><Link to='/ownerhome' className="nav-link ">
          Owner Home
        </Link>
            
          </li>
          <li>
            <Link to={'/ownerfeedback'} className="nav-link ">
              Feedback
            </Link>
          </li>
          {/* <li>
            <Link to="/addQR" className="nav-link">
              ADD QR
            </Link>
          </li> */}
          <li>
            {owner_type === "pg" ? (
              <Link to="/addQR_pg" className="nav-link">
                upload {owner_type} owner QR
              </Link>
            ) : (
              <Link to="/addQR" className="nav-link">
                upload {owner_type} owner QR
              </Link>
            )}
          </li>

          <li>
            <Link to="/ownercontact" className="nav-link">
              Contact 
            </Link>
          </li>
       

        <li>
            {owner_type === "pg" ? (
              <Link to="/pgbookingconfirm" className="nav-link">
                {owner_type} booking confirm
              </Link>
            ) : (
              <Link to="/bookingconfirm" className="nav-link">
                 {owner_type} booking confirm
              </Link>
            )
            }
         </li>
          

          <li>
            {owner_type === "pg" ? (
              <Link to="/addpg" className="nav-link">
                Add {owner_type} Details
              </Link>
            ) : (
              <Link to="/addhostel" className="nav-link">
                Add {owner_type} Details
              </Link>
            )}
          </li>
          <li>
            {owner_type === "pg" ? (
              <Link to="/viewpg" className="nav-link">
                View {owner_type} Details
              </Link>
            ) : (
              <Link to="/viewhostel" className="nav-link">
                View {owner_type} Details
              </Link>
            )}
          </li>

          <li onClick={toggleDropdown} className="dropdown">
            <span className="dropdown-toggle">Query</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/pending" className="dropdown-link">
                    Pending
                  </Link>
                </li>

                {/* Add more dropdown items as needed */}
              </ul>
            )}
          </li>
          <li className="dropdown" style={{ marginLeft: "15px" }}>
            <span className="dropdown-toggle">Message</span>

            <ul className="dropdown-menu">
              <li>
                <Link to="/compose_owner" className="dropdown-link">
                  Compose
                </Link>
              </li>
              <li>
                <Link to="/inbox_owner" className="dropdown-link">
                  Inbox
                </Link>
              </li>

              {/* Add more dropdown items as needed */}
            </ul>
          </li>
          
       
          <li style={{ marginLeft: "600px" }}>
            {" "}
            <button onClick={logout} style={{ backgroundColor: "goldenrod" }}>
              Logout
            </button>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default OwnerHeader;
