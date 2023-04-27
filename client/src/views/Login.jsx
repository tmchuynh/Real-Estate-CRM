import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginForm = () => {
  const [loginErrors, setLoginErrors] = useState(["Are there any errors?"]);
  const [loggedUser, setLoggedUser] = useState([]);
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const navigate = useNavigate();
  const baseUrl = "http://localhost:8000/api";

  const handleSubmit = e => {
    e.preventDefault();
    //try to login user
    axios.post(`${baseUrl}/users/login`, {
      email: formEmail,
      password: formPassword
    })
      .then(res => {
        console.log(res.data);
        navigate('/leads');
      })
      .catch(err => {
        //get the errors from the response
        const errResponse = err.response.data.errors;
        //create an empty arr to push the errors
        const errorArr = [];
        //loop through the errors to get the error msgs
        for (const key of Object.keys(errResponse)) {
          errorArr.push(errResponse[key].message);
        }
        //finally, update state with the errorArr
        setLoginErrors(errorArr);
        console.log(loginErrors);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {/* display any errors in the form */}
      {/* {loginErrors.map((err, idx) => <p style={{ color: 'red' }} key={idx}>{err}</p>)} */}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setFormEmail(e.target.value)} />
      </Form.Group>

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
          Don't have an account? <Link to={'/register'}>Register</Link>
        </div>

      </Stack>

    </Form>
  );
};

export default LoginForm;