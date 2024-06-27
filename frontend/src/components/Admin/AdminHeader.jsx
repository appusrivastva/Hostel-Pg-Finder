import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navbarStyle = {
    backgroundColor: '#4CAF50', // Darker green background color
    borderBottom: '1px solid #2E7D32', // Dark green border at the bottom
    padding: '10px', // Add padding to navbar
    display: 'flex', // Use flexbox for layout
    justifyContent: 'space-between', // Space items evenly
    alignItems: 'center', // Center items vertically
  };

  const navLinkStyle = {
    color: '#ffffff', // White text color for nav links
    marginRight: '20px', // Add some space between nav links
    textDecoration: 'none', // Remove default underline from links
    fontSize: '16px', // Increase font size
    fontWeight: 'bold', // Bold font weight
  };

  const activeLinkStyle = {
    ...navLinkStyle,
    borderBottom: '2px solid #ffffff', // Underline for active link
  };

  const logoutButtonStyle = {
    color: '#ffffff', // White text color for logout button
    backgroundColor: '#2E7D32', // Dark green background color for logout button
    border: 'none', // Remove border
    padding: '10px 20px', // Add padding
    fontSize: '16px', // Increase font size
    fontWeight: 'bold', // Bold font weight
    borderRadius: '5px', // Add border radius
    transition: 'background-color 0.3s', // Smooth transition for hover effect
  };

  const dropdownItemStyle = {
    color: '#000000', // Black text color for dropdown items
    backgroundColor: '#ffffff', // White background color for dropdown items
    textDecoration: 'none', // Remove default underline from dropdown items
  };

  const hoverStyle = {
    backgroundColor: '#388E3C', // Darker green background color on hover
  };

  const navigate = useNavigate();
  const token_data = localStorage.getItem('token_key');

  const logout = (e) => {
    e.preventDefault();
    if (!token_data) {
      navigate('/admin_login');
    } else {
      localStorage.removeItem('token_key');
      navigate('/admin_login');
    }
  };

  return (
    <Navbar style={navbarStyle} variant="dark">
      <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff' }}>Admin Home</Navbar.Brand>
      <Nav>
        <NavLink style={navLinkStyle} activeStyle={activeLinkStyle} to="/adminhome"><i className="fas fa-home"></i> Home</NavLink>
        <NavLink style={navLinkStyle} activeStyle={activeLinkStyle} to="/allfeedback">Feedback</NavLink>
        <NavLink style={navLinkStyle} activeStyle={activeLinkStyle} to="/allcontact">Contact Us</NavLink>
        <NavDropdown title="View" id="basic-nav-dropdown" style={{ ...navLinkStyle, marginLeft: '20px' }}>
          <NavDropdown.Item as={NavLink} to="/Allhostelowner" style={dropdownItemStyle} activeStyle={activeLinkStyle}>All Hostel Owner</NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/Allpgowner" style={dropdownItemStyle} activeStyle={activeLinkStyle}>All Pg Owner</NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/Alluser" style={dropdownItemStyle} activeStyle={activeLinkStyle}>All User</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Button style={logoutButtonStyle} onClick={logout} onMouseEnter={(e) => e.target.style.backgroundColor = '#388E3C'} onMouseLeave={(e) => e.target.style.backgroundColor = '#2E7D32'}>Logout</Button>
    </Navbar>
  );
};

export default AdminHeader;
