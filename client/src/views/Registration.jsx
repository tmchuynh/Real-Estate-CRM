import React from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { Link, useNavigate} from 'react-router-dom'


const RegistrationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/user_profile");
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Register Your Account</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      <Stack gap={3} className="p-3">
        <Button variant="primary" type="submit">
          Register
        </Button>

        <div>
          Already have an account? <Link to={'/signin'}>Sign In</Link>
        </div>

      </Stack>


    </Form>
  );
};

export default RegistrationForm;