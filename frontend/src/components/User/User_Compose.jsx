import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import axios from 'axios';


import Footer from '../Footer'
import UserHeader from './UserHeader'

function User_Compose() {
  let URL="http://localhost:4000/owner/sendMsg"
  const token_data = localStorage.getItem("token_key");

  const [compose,setCompose]=useState({sid:token_data,rid:"",subject:"",msg:""})

  const handleChange=(e)=>{
    setCompose({...compose,[e.target.name]:e.target.value})
  }

  const onSubmit=async (e)=>{
    e.preventDefault()
    try {
      const res = await axios.post(URL, compose);
      console.log(res)
      console.log(res.data);
    
    } catch (err) {
      console.log(err.message);
    }
    setCompose({sid:"",rid:"",subject:"",msg:""})

  }
  return (
    <>
    <UserHeader/>
    <div style={{  background: "#6a11cb",

      /* Chrome 10-25, Safari 5.1-6 */
      background:" -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))",
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      background: "linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))"}}>
      <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase">Compose</h2>
        <p className="text-white-50 mb-5">Please enter only Registered Receiver Id!</p>

        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Receiver_id' id='formControlLg' type='text'
         size="lg"  name='rid' onChange={handleChange} value={compose.rid}/>
        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' 
        label='subject' id='formControlLg' type='text' size="lg" name='subject' onChange={handleChange} value={compose.subject}/>
        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Message'
         id='formControlLg' type='text' size="lg" name='msg' onChange={handleChange}  value={compose.msg}/>

       
        {/* <MDBBtn  className='' color='black' size='lg'>
                Send
              </MDBBtn> */}
                 <MDBBtn size='lg'  style={{backgroundColor:"transparent",height:"40px"}} type='submit' onClick={onSubmit}>
                Send
              </MDBBtn>

       
        

        
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
    </div>
    <Footer/>
    </>
  );
}

export default User_Compose;