import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarNav from "../components/SideNav";
import { Container, Row, Col, Form, Button, Image, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@mui/material'

const EditUserProfile = ({ user }) => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState(user.fullName);
    const [email, setEmail] = useState(user.email);
    const [location, setLocation] = useState(user.location);
    const [title, setTitle] = useState(user.title);
    const [profilePicture, setProfilePicture] = useState(user.profilePicture);
    const [newProfilePicture, setNewProfilePicture] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // code to update user profile in the backend
        navigate('/user_profile');
    }

    const handleProfilePictureChange = (event) => {
        setNewProfilePicture(event.target.files[0]);
    }

    const handleUpdateProfilePicture = () => {
        if (newProfilePicture) {
            setProfilePicture(URL.createObjectURL(newProfilePicture));
            setNewProfilePicture(null);
        }
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

                                    <Image src={profilePicture} alt={fullName} roundedCircle className='w-50 m-auto'/>
                                    <Tooltip title="Update Profile Picture">
                                        <Button variant="primary" onClick={handleUpdateProfilePicture} className='my-2'>
                                            <input
                                                type="file"
                                                onChange={handleProfilePictureChange}
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
                                <Form.Group className="mb-3" controlId="formFullName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formLocation">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your location" value={location} onChange={(e) => setLocation(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Save
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
