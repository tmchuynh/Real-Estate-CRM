import React, { useState, useContext } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";
import axios from 'axios';

const LoginForm = () => {
  const { setIsUserLoggedIn } = useContext(AuthContext);
  const [loginErrors, setLoginErrors] = useState(["loginErrorsDefault"]);
  const { loggedUserId, setLoggedUserId } = useContext(AuthContext);
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const navigate = useNavigate();
  const baseUrl = "http://localhost:8000/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try to login user
    try {
      const user = await axios.post(`${baseUrl}/users/login`, {
        email: formEmail,
        password: formPassword
      });
      console.log(user.data._id);
      if (user.data) {
        setIsUserLoggedIn(true);
        setLoggedUserId(user.data._id);
        navigate("/leads");
      } else { console.log("Something went wrong. . .") }
      // navigate('/leads');
    } catch (err) {
      setLoginErrors(err);
    };
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