import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarNav from "../components/SideNav";
import { Container, Row, Col, Form, Button, Image, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@mui/material'
import styles from "../Style.module.css/Leads.module.css";
// import axios from 'axios';

const EditUserProfile = ({ user }) => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState("the Royal Highness");
    const [email, setEmail] = useState("g@b.com");
    const [location, setLocation] = useState("LA Metro");
    const [title, setTitle] = useState("Agent");

    const [profilePicture, setProfilePicture] = useState("https://randomuser.me/api/portraits/men/9.jpg");
    // const [base64Picture, setBase64Picture] = useState("");
    const [uploadedProfilePicture, setUploadedProfilePicture] = useState(null);
    // const baseUrl = "https://localhost:8000/api";

    //this function converts the passed img (from profilePicture State) to Base64
    // const convertProfilePictureToB64String = (image) => {
    //     const reader = new FileReader();
    //     reader.readAsBinaryString(image);
    //     reader.onload = function () {
    //         const base64 = btoa(reader.result);
    //         setBase64Picture(base64);
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setLocation(location);
        setTitle(title);

        navigate('/user_profile');


        // code to update user profile in the backend
        // try {
        //     //check if an img was uploaded & convert to Base64 before PUT
        //     uploadedProfilePicture && convertProfilePictureToB64String(uploadedProfilePicture);
        //     //check if fullName changed, parse out first and last before PUT
        //     /* 
        //     split on space
        //     store first elem as firstName, 
        //     second as lastName
        //     */
        //     if ()
        //     axios.put(`${baseUrl}/users/${user._id}`, {
        //         ...dataToUpdate
        //     })

        //     navigate('/user_profile');
        // } catch (err) {
        //     console.log("oops")
        // }
    }
    //handle saving uploaded photo in State before user confirms profile edits by submitting form
    const handleUploadProfilePicture = e => {
        setUploadedProfilePicture(e.target.files[0]);
    }
    //useEffect hook will update the shown profile photo each time user selects one from the input field
    useEffect(() => {
        //only if uploadProfilePicture is not falsey to prevent data type errors with calling URL.createObjectURL on null
        uploadedProfilePicture && setProfilePicture(URL.createObjectURL(uploadedProfilePicture));
    }, [uploadedProfilePicture])

    const goBack = () => {
        navigate('/user_profile');
    }

    return (
        <>
            <div className="d-flex">
                <SidebarNav />

                <Container fluid>
                    <h2>Edit User Profile</h2>
                    <Row className="mt-3">
                        <Col md={3}>
                            <div className="profile-picture-container">
                                <Stack gap={3}>

                                    <Image src={profilePicture} alt="myprofilepic"  className={`w-50 m-auto ${styles.profilePicture}`} />
                                    <Tooltip title="Update Profile Picture">
                                        <Button variant="primary" className='my-2' >
                                            <input
                                                type="file"
                                                id="profile-pic"
                                                onChange={handleUploadProfilePicture}
                                                accept="image/*"
                                                style={{ opacity: 0, position: "absolute", width: "100%", height: "100%", left: 0, top: 0, cursor: "pointer" }}
                                            />


                                            <FontAwesomeIcon icon={faCameraRetro} />
                                        </Button>
                                    </Tooltip>
                                </Stack>
                            </div>
                        </Col>
                        <Col md={9}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder={firstName} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder={lastName} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder={email} value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formLocation">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" placeholder={location} value={location} onChange={(e) => setLocation(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder={title} value={title} onChange={(e) => setTitle(e.target.value)} />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="me-2">
                                    Save
                                </Button>
                                <Button variant="secondary" type="button" onClick={goBack}>
                                    Back
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default EditUserProfile
