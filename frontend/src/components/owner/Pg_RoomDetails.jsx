import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import OwnerHeader from './OwnerHeader';
import Footer from '../Footer';

const Pg_RoomDetails = () => {
  const { value } = useParams();
  const token_data = localStorage.getItem("token_key");
  console.log(`token data is ${token_data}`);
  const [formData, setFormData] = useState({
    owner_id: token_data,
    pg_id: value,
    setRoomType: '',
    setSeater: '',
    charges: '',
    facilities: '',
  });
  let URL = "https://hostel-pg-finder.onrender.com/owner/pgroomdetails";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post(URL, formData);
      setFormData({
        owner_id: '',
        pg_id: '',
        setRoomType: '',
        setSeater: '',
        charges: '',
        facilities: '',
      });
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <OwnerHeader owner_type={'pg'} />
      <div style={containerStyle} className="container">
        <div style={formBoxStyle} className="form-box">
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="setRoomType">
                <Form.Label>Set Room Type</Form.Label>
                <Form.Control
                  as="select"
                  name="setRoomType"
                  value={formData.setRoomType}
                  onChange={handleChange}
                >
                  <option value="AC">AC</option>
                  <option value="Non-AC">Non AC</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="setSeater">
                <Form.Label>Set Seater</Form.Label>
                <Form.Control
                  as="select"
                  name="setSeater"
                  value={formData.setSeater}
                  onChange={handleChange}
                >
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="Triple">Triple</option>
                </Form.Control>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="charges">
              <Form.Label>Charge</Form.Label>
              <Form.Control
                type="text"
                name="charges"
                placeholder="Enter charges"
                value={formData.charges}
                onChange={handleChange}
                style={inputStyle}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="facilities">
              <Form.Label>facilities</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="facilities"
                placeholder="Enter facilities"
                value={formData.facilities}
                onChange={handleChange}
                style={textareaStyle}
              />
            </Form.Group>

            <Button style={buttonStyle} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '400px',
  marginTop: '50px',
  marginBottom: '50px',
};

const formBoxStyle = {
  width: '400px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
};

const inputStyle = {
  borderRadius: '0',
};

const textareaStyle = {
  resize: 'vertical',
};

const buttonStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.35)',
  borderColor: '#007bff',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
};

export default Pg_RoomDetails;
