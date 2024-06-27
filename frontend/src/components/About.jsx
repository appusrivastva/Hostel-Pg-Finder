import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../images/onlineBook.png'
const About = () => {
  const styles = {
    aboutUsSection: {
      padding: '100px 0',
      background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url("/images/background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
    },
    content: {
      margin: '0 auto', // Center the content horizontally
      maxWidth: '800px', // Limit the content width
    },
    heading: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      fontFamily: 'Arial, sans-serif',
      animation: 'fadeInDown 1s ease-out', // Animation for heading
    },
    paragraph: {
      fontSize: '1.2rem',
      marginBottom: '20px',
      fontFamily: 'Arial, sans-serif',
      animation: 'fadeInUp 1s ease-out', // Animation for paragraphs
    },
    image: {
      width: '100%',
      borderRadius: '10px',
      marginTop: '30px', // Add some top margin to the image
      animation: 'fadeIn 1s ease-out', // Animation for image
    },
  };

  return (
    <div style={styles.aboutUsSection}>
      <Container>
        <Row>
          <Col md={12} style={styles.content}>
            <h2 style={styles.heading}>About Our Accommodation Finder</h2>
            <p style={styles.paragraph}>
              Welcome to our colorful accommodation finder portal! We are dedicated to providing you with
               a seamless experience in finding the perfect hostel or PG accommodation tailored to your needs.
            </p>
            <img src={img1} alt="Accommodation" style={styles.image} />
            <p style={styles.paragraph}>
              Our mission is to simplify the process of finding accommodation by offering a comprehensive database of options, along with 
              advanced search filters and find hostel/pg according to preference city.
            </p>
            <img src="https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Accommodation" style={styles.image} />
            <p style={styles.paragraph}>
              Whether you're a student, working professional,  
              we've got you covered. With our user-friendly interface & your ideal accommodation is just a few clicks away.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
