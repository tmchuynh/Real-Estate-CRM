import React from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/leads");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Stack gap={3} className="p-2">
        <Link to={'/password'}>Forgot Password?</Link>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <div>
          Don't have an account? <Link to={'/register'}>Register</Link>
        </div>

      </Stack>

    </Form>
  );
};

export default LoginForm;