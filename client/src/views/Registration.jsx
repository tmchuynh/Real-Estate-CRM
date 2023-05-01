import React, { useState, useContext } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../authContext";
import axios from 'axios';


const RegistrationForm = () => {
  const { setIsUserLoggedIn } = useContext(AuthContext);
  const { setLoggedUserId } = useContext(AuthContext);
  const [regErrors, setRegErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const baseUrl = "http://localhost:8000/api";
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    }
    axios.post(`${baseUrl}/users`, formData)
      .then(res => {
        const results = res.data;
        setLoggedUserId(results._id);
        return navigate(`/user_profile`);
      })
      //potentially a lot of errors, so putting them in an arr
      .catch(error => {
        //get the errors from the response
        const errorResponse = error.response.data.errors;
        // console.log(`This is the error resp data ${errorResponse}`);
        //create an empty arr to push the errors
        const errorArr = [];
        //loop through the errors to get the error msgs
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        //finally, update state with setErrors
        // console.log(errorArr);
        setRegErrors(errorArr);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Sign Up for an Account!</h1>
      {/* display any errors in the form */}
      {regErrors.map((err, idx) => <p style={{ color: 'red' }} key={idx}>{err}</p>)}
      <Form.Group controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
      </Form.Group>
      <br />
      <Form.Group controlId="formBasicLast Name">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
      </Form.Group>
      <br />
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>
      <br />
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <br />
      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      </Form.Group>
      <br />
      <Stack gap={3} className="p-3">
        <Button variant="primary" type="submit">
          Sign Up
        </Button>

        <div>
          Already have an account? <Link to={'/signin'}>Sign In</Link>
        </div>

      </Stack>


    </Form>
  );
};

export default RegistrationForm;