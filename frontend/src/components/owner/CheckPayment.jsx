
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OwnerHeader from './OwnerHeader'
import Footer from '../Footer';

const CheckPayment = () => {
  const [data, setData] = useState([]);
  const [isrefresh,setIsrefresh]=useState(false)
  const [currImage,setCurrImage]=useState("")
  const [showImage,setShowImage]=useState(false)
  const URL="http://localhost:4000/owner/checkpayment"
  const token_data = localStorage.getItem("token_key");
  console.log(`token data is ${token_data}`);
  const new_url="http://localhost:4000/owner/confirmbook"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const params={
          owner_id:token_data
  
       }

        const response = await axios.get(URL,{params});
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isrefresh]);
   const handleClick = async (obj_id) => {
    try {
     const params={
        _id:obj_id,status:'confirm'

     }

     
      
       
      const rs = await axios.post(new_url,{params});
      setIsrefresh(true)



      
     console.log(rs.data)
     

  
   
    } catch (err) {
      console.log(err.message);
    }
  };


  return (
    <>
    <OwnerHeader owner_type={'hostel'}/>
    <div style={styles.container}>
      <h1 style={styles.heading}>Payment Details</h1>
      <div style={styles.list}>
        {data.map((item, index) => (
          <div key={index} style={styles.item}>
            <img src={`http://localhost:4000/All_payment_pic/${item.payment_pic}`} alt="User" style={styles.image} onClick={()=>{
              setCurrImage(`http://localhost:4000/All_payment_pic/${item.payment_pic}`)
              setShowImage(true)
            }} />
            <div style={styles.details}>
              <p style={styles.text}>Owner ID: {item.owner_id}</p>
              <p style={styles.text}>User ID: {item.user_id}</p>
              <p style={styles.text}>Hostel ID: {item.hostel_id}</p>
              <p style={styles.text}>Room ID: {item.room_id}</p>
              <p style={styles.text}>Status:<div
               style={{height:"14px",width:"14px",backgroundColor:`${item.status==='confirm'?'green':'yellow'}`
               ,borderRadius:"50%",
               }}>
                </div>  {item.status} </p>
              <button style={styles.text} onClick={() => handleClick(item._id)} >Booking Confirm</button>

            </div>
          </div>
        ))}
       {
        showImage &&  <div style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        backdropFilter: 'blur(5px) ' ,position:'absolute',top:"0",left:"0"}}>
    <div style={{width:"fit-content",height:"fit-content",border:"2px solid black",borderRadius:"10px"}}> 
      <img src={currImage} alt=""  style={{border:"2px solid orange",borderRadius:"10px",margin:"10px",width:"500px"}}/>
      <div  style={{display:'flex',justifyContent:"center",paddingBottom:"10px"}}><button onClick={()=>{
        setShowImage(false)
      }} className='btn btn-danger'>Close</button></div>
    </div>
          </div>
  
       }

      </div>
    </div>
    <Footer/>
    </>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '80%',
    maxWidth: '500px',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '20px',

  },
  details: {
    flex: 1,
  },
  text: {
    fontSize: '18px',
    marginBottom: '10px',
    display:'flex',
    alignItems:"center",
    gap:'10px',
  },
   
};

export default CheckPayment;