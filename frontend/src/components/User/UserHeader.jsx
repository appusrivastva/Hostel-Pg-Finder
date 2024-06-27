import React from 'react';
import { Navbar, Nav, Button,NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const UserHeader = () => {
  const navbarStyle = {
    backgroundColor: '#343a40', // Dark background color
    borderBottom: '1px solid #28a745', // Green border at the bottom
  };

  const navLinkStyle = {
    color: '#17a2b8', // Light blue text color for nav links
    marginLeft: '50px', // Add some space between nav links
  };

  const logoutButtonStyle = {
    color: '#28a745', // Green text color for logout button
    borderColor: '#28a745', // Green border color for logout button
    marginLeft: 'auto', // Add some space between logout button and nav links
  };
  const navigate=useNavigate()
  const token_data=localStorage.getItem("token_key")

  const logout=(e)=>{
    e.preventDefault();
    if(!token_data){
      navigate("/user_login")
    }
    else{
      localStorage.removeItem('token_key')
      navigate("/user_login")
    }

  }

  return (
    <Navbar style={navbarStyle} variant="dark">
      <Navbar.Brand to="/userhome" as={Link}>User Home</Navbar.Brand>

      <NavDropdown title="All_Owners" id="basic-nav-dropdown"> 
          <NavDropdown.Item as={Link} to="/hostel">Hostel</NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/pg'>PG Owner</NavDropdown.Item>
          
        </NavDropdown>
        <NavDropdown title="Message" id="basic-nav-dropdown"> 
          <NavDropdown.Item as={Link} to="/compose">Compose</NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/inbox'>Inbox</NavDropdown.Item>
          
        </NavDropdown>
        <Navbar.Brand to="/feedback" as={Link}>Feedback</Navbar.Brand>
      <Button style={logoutButtonStyle} variant="outline-info" onClick={logout}>Logout</Button>
    </Navbar>
  );
};

export default UserHeader;
