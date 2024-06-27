import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img from '../images/logo2.png'

const Home = () => {
  const styles = {
    homeSection: {
      padding: '100px 0',
      background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("/images/background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
    },
    content: {
      textAlign: 'left',
      '@media (max-width: 768px)': {
        textAlign: 'center',
      },
    },
    heading: {
      fontSize: '3rem',
      color: '#fff',
      marginBottom: '30px',
      animation: 'moveLeft 1s ease-out',
    },
    paragraph: {
      fontSize: '1.2rem',
      color: '#fff',
      marginBottom: '30px',
      animation: 'moveRight 1s ease-out',
    },
    button: {
      fontSize: '1.2rem',
      padding: '10px 30px',
      backgroundColor: '#007bff',
      border: 'none',
      animation: 'moveUp 1s ease-out',
    },
    image: {
      width: '100%',
      borderRadius: '10px',
      marginTop: '30px',
      animation: 'fadeIn 1s ease-out',
    },
  };

  return (
    <div style={styles.homeSection}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div style={styles.content}>
              <h1 style={styles.heading}>Find Your Perfect Accommodation</h1>
              <p style={styles.paragraph}>Discover and book your ideal hostel or PG accommodation with ease.</p>
              <Button variant="primary" style={styles.button}>Get Started</Button>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <img src={img} alt="Accommodation" style={styles.image} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
