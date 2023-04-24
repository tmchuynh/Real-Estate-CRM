import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Container, Form, Button, Alert } from 'react-bootstrap';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/reset');
  };

  return (
    <Container fluid>
      <h1>Password Reset</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
        </Form.Group>
        <Button variant="primary" type="submit" className='m-2'>
          Reset Password
        </Button>
      </Form>

      <Link to={'/signin'}>Go Back</Link>
    </Container>
  );
};

export default PasswordReset;
