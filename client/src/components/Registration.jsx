import React from "react";
import {Form, Button} from "react-bootstrap";


const RegistrationForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegistrationForm;