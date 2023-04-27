import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SidebarNav from "../components/SideNav"
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@mui/material'


const UserProfile = ({ user }) => {
    const { fullName, email, password, location, title, profilePicture } = user;
    const navigate = useNavigate();

    const resetPassword = (user) => {
        navigate("/reset");
    }

    return (
        <>
            <div className="d-flex">
                <SidebarNav />

                <Container fluid>

                    <Row className="mt-3">
                        <Col md={3}>
                            <div className="profile-picture-container">
                                <Image src={profilePicture} alt={fullName} roundedCircle fluid />
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="d-flex justify-content-between">

                                <h1>{fullName}'s Profile</h1>

                                <Tooltip title="Edit Profile">

                                    <Link to={`/edit_user_profile/${user.id}`}>
                                        <Button>
                                            <FontAwesomeIcon icon={faUserPen} />
                                        </Button>
                                    </Link>
                                </Tooltip>
                            </div>
                            <p><b>Email:</b> {email}</p>
                            <p><b>Location:</b> {location}</p>
                            <p><b>Title:</b> {title}</p>

                            <Tooltip title="Reset Password">
                                <Button onClick={resetPassword}>Reset My Password</Button>
                            </Tooltip>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default UserProfile;
