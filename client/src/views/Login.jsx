import React, { useState, useContext } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";
import axios from 'axios';

const LoginForm = () => {
  const { setAuthorizationToken } = useContext(AuthContext);
  const { setLoggedUserId } = useContext(AuthContext);
  const [loginErrors, setLoginErrors] = useState([]);
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const navigate = useNavigate();
  const baseUrl = "http://localhost:8000/api";

  const handleSubmit = (e) => {
    e.preventDefault();
    // try to login user
    const loginData = {
      email: formEmail,
      password: formPassword
    };

    axios
      .post(`${baseUrl}/users/login`, loginData)
      .then(res => {
        const jwt = res.data;
        document.cookie = `jwt=${jwt}; path=/; max-age=86400`;
        setLoggedUserId(true);
        setAuthorizationToken(jwt);
        navigate('/leads');
      })
      .catch(error =>  {
        //get the errors from the response
        setLoginErrors(error.response.data.message);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {/* display any errors in the form */}
      <p style={{ color: 'red' }} >{loginErrors}</p>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setFormEmail(e.target.value)} />
      </Form.Group>
      <br />
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e => setFormPassword(e.target.value)} />
      </Form.Group>
      <Stack gap={3} className="p-2">
        <Link to={'/password'}>Forgot Password?</Link>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <div>
          Don't have an account? <Link to={'/register'}>Sign Up</Link>
        </div>

      </Stack>

    </Form>
  );
};

export default LoginForm;