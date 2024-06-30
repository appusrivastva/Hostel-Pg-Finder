import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useParams} from 'react-router-dom'

import UserHeader from './UserHeader'
export default function ViewResponse() {
    const {value}=useParams();

let url="https://hostel-pg-finder.onrender.com/user/viewResponse";


const [response,setResponse]=useState([])
const navigate=useNavigate();


useEffect(()=>{
    const fetchData=async (E)=>{
        const token_data=localStorage.getItem("token_key");
        console.log(token_data)


        if(!token_data){
            navigate('/user_login')
        }
        else{
            const params={
                user_id:token_data,
                owner_id:value
            }
            try{
                const res=await axios.get(url,{params})
                console.log(res)
                setResponse(res.data)
            }
            catch(e){
                console.log(e)
            }
        }
    };
    fetchData();
},[])



















  return (
    <>
    <UserHeader/>
    <h1>View Response</h1>

    <table class="table">
  <thead class="thead-dark">
    <tr>

      <th scope="col">owner_id</th>
      <th>user_id</th>
      <th scope="col">Query</th>
      <th scope="col">Response</th>

   
    </tr>
  </thead>
  <tbody>
    {response.map((e)=>{
      return (

       <tr>
      
   
      <td>{e.owner_id}</td>
      <td>{e.user_id}</td>
     
      <td>{e.question}</td>
      <td>{e.answer}</td>
   
    </tr> 
      )

    })}
   
    
  </tbody>
</table> 
      
    </>
  )
}
