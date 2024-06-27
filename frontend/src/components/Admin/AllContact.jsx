import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import axios from 'axios';
import AdminHeader from './AdminHeader';

export default function AllContact() {
  const URL = "http://localhost:4000/admin/allcontact";
  const [usercontact, setUsercontact] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setUsercontact(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <AdminHeader />
      <div style={containerStyle}>
        <h1>User Contact Information:</h1>
        <table style={tableStyle}>
          <thead style={theadStyle}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th style={columnStyle}>Phone</th>
              <th style={columnStyle}>Query</th>
            </tr>
          </thead>
          <tbody>
            {usercontact.map((e, index) => (
              <tr key={index}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td style={columnStyle}>{e.phone}</td>
                <td style={columnStyle}>{e.query}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f7f7f7', // Background color for container
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const theadStyle = {
  backgroundColor: '#212529',
  color: '#fff',
};

const columnStyle = {
  padding: '8px',
  borderRight: '1px solid #ddd', // Light lines separating columns
};
