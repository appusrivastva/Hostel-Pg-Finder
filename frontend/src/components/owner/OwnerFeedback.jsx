import React from 'react'
import Footer from '../Footer'
import axios from 'axios'
import { useState,useEffect} from 'react';
import OwnerHeader from './OwnerHeader';
import { useParams,useNavigate } from 'react-router-dom';


export default function OwnerFeedback() {
  const [userfeedback,setUserfeedback]=useState([])
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const P_URL = "https://hostel-pg-finder.onrender.com/owner/profile";
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
          const resp = await axios.get(P_URL, {params});
          console.log(resp)

          setProfile(resp.data);
        } catch (err) {
          console.log(err.message);
        }
      }
    };
    fetchData();
  },[]);

   const URL="https://hostel-pg-finder.onrender.com/owner/allfeedback"
   
  const value=useParams()
  console.log(value)
  const owner_type=value[0]
  console.log(owner_type)
   useEffect(()=>{
  
  
    const fetchData=async ()=>{
      try{
        const res=await axios.get(URL)
        console.log(res.data)
        setUserfeedback(res.data)

      }
      catch(err){
        console.log(err.message)
      }
      
    }
    fetchData()
   },[profile]);
  return (
    <>
  <OwnerHeader owner_type={profile.owner_type}/>
    
    <h1>user feedback</h1>
    <div className="row">
        {
          userfeedback.map((e)=>{
            return (
              <div className="col-4">

                 <div className="card" style={{marginLeft:'20px'}}>
                  <div className="card-body">
                        <h5 className="card-title">Review :{e.remark}</h5>
                        <h5 className="card-title">Rating :{e.rating}</h5>
                        <h3 className="card-title">posted By :{e.name}</h3>
 
    
                  </div>
                </div>

              </div>
             )
        })
      }
  </div>
    <Footer/>
      
    </>
  )
}
