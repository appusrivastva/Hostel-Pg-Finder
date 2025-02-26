import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import OwnerHeader from './OwnerHeader';
import Footer from '../Footer';

export default function ViewPg() {

  const [pg,setPg]=useState([]);
  let URL="https://hostel-pg-finder.onrender.com/owner/viewpg";
  // let pic_url='https://hostel-pg-finder.onrender.com/viewhostel/addHostel/'
  const navigate=useNavigate();

  useEffect(() => {
    const fetchData = async (e) => {
      const token_data = localStorage.getItem("token_key");
      console.log(`token data is ${token_data}`);

      if (!token_data) {
        navigate("/owner_login");
      } else {
        const params = {
          owner_id: token_data,
        };
        try {
          const resp = await axios.get(URL, {params});
          console.log(resp)

          setPg(resp.data);
        } catch (err) {
          console.log(err.message);
        }
      }
    };
    fetchData();
  },[]);






 







  return (
    <>
      <OwnerHeader owner_type={'pg'}/>

      <div>
  


  <table class="table" >
   <thead class="thead-dark">
     <tr>
 
       <th scope="col">Name</th>
       <th scope="col">Email</th>
       <th scope="col">Phone</th>
       <th scope="col">city</th>
       <th scope="col">address</th>
       <th scope="col">pg_type</th>
       <th scope="col">facilities</th>
       <th scope='col'>Add Room Details</th>
       
    
     </tr>
   </thead>
   <tbody>
     {pg.map((e)=>{
       return (
 
        <tr>
       
       <td>{e.name}</td>
      
       <td>{e.email}</td>
       <td>{e.phone}</td>
       <td>{e.city}</td>
       
       <td>{e.address}</td>
       <td>{e.pg_type}</td>
       <td>{e.facilities}</td>
       <td><Link to={`/pg_obj_id/${e._id}`}
                       className="btn bg-dark text-white"
                     
                     >
                     Add rooms
                     
       </Link></td>
       {/* <td><img src={pic_url`${e.pic}`} alt="" /></td> */}
     </tr> 
       )
 
     })}
    
     
   </tbody>
 </table> 
 </div>
 




<Footer/>
      
    </>
  )
}


