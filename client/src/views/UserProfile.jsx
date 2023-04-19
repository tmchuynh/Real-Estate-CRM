import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarNav from "../components/SideNav"
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const UserProfile = ({ user }) => {
    const { fullName, email, password, location, title, profilePicture } = user;
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <div className="d-flex">
                <SidebarNav />

                <Container>
                    <h2>User Profile</h2>
                    <Row className="mt-3">
                        <Col md={3}>
                            <div className="profile-picture-container">
                                <Image src={profilePicture} alt={fullName} roundedCircle fluid />
                            </div>
                        </Col>
                        <Col md={9}>
                            <h1>{fullName}'s Profile</h1>
                            <p>Email: {email}</p>
                            <p>
                                Password:
                                {showPassword ? ` ${password}` : ' •••••••••••••••••'}
                                <div>
                                    <Button variant="link" onClick={toggleShowPassword}>
                                        {showPassword ? 'Hide' : 'Show'}
                                    </Button>
                                </div>

                            </p>
                            <p>Location: {location}</p>
                            <p>Title: {title}</p>
                            <Link to={`/edit_user_profile/${user.id}`}><Button>Edit</Button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default UserProfile;
