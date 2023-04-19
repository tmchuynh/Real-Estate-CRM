import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarNav from "../components/SideNav"
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';

const EditLeadProfile = ({ user }) => {
    const { firstName, lastName, phoneNumber, isBuying, isSelling, marketArea, profilePicture } = user;
    const [formData, setFormData] = useState({
        firstName,
        lastName,
        phoneNumber,
        isBuying,
        isSelling,
        marketArea,
        profilePicture
    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/user_profile/${user.id}`);
    };

    return (
        <>
            <div className="d-flex">
                <SidebarNav />
                
                <Container>
                    <h2>Lead Profile</h2>
                    <Row className="mt-3">
                        <Col md={3}>
                            <div className="profile-picture-container">
                                <Image src={formData.profilePicture} alt={`${formData.firstName} ${formData.lastName}`} roundedCircle fluid />
                            </div>
                        </Col>
                        <Col md={9}>
                            <h1>Edit Profile</h1>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                                </Form.Group>
                                <Form.Group controlId="formBasicLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                                </Form.Group>
                                <Form.Group controlId="formBasicPhoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
                                </Form.Group>
                                <Form.Group controlId="formBasicIsBuying">
                                    <Form.Check type="checkbox" name="isBuying" checked={formData.isBuying} onChange={handleInputChange} label="Are you buying?" />
                                </Form.Group>
                                <Form.Group controlId="formBasicIsSelling">
                                    <Form.Check type="checkbox" name="isSelling" checked={formData.isSelling} onChange={handleInputChange} label="Are you selling?" />
                                </Form.Group>
                                <Form.Group controlId="formBasicMarketArea">
                                    <Form.Label>Market Area</Form.Label>
                                    <Form.Control type="text" name="marketArea" value={formData.marketArea} onChange={handleInputChange} required />
                                </Form.Group>
                                <Button variant="primary" type="submit">Save</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default EditLeadProfile;