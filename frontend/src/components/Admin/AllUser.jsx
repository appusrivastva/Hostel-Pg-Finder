import React, { useEffect, useState } from 'react';
import AdminHeader from './AdminHeader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

export default function AllUser() {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:4000/admin/alluser";
  const navigate = useNavigate();

  useEffect(() => {
    const token_data = localStorage.getItem("token_key");
    if (!token_data) {
      navigate('/admin_login');
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setUsers(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="container">
        <h1 className="mt-4 mb-4" style={{textAlign:"center",fontFamily:"sans-serif"}}>All Registered Users</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>User ID</th>
                <th>User Email</th>
                <th>User Name</th>
                <th>User phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.user_id}</td>
                  <td>{user.user_email}</td>
                  <td>{user.user_name}</td>
                  <td>{user.user_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
