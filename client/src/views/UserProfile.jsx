import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SidebarNav from "../components/SideNav"
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@mui/material'
import styles from "../Style.module.css/Leads.module.css";
import axios from 'axios';
import { AuthContext } from "../authContext";

const UserProfile = () => {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [email, setEmail] = useState("jd@example.com");
    const [location, setLocation] = useState("LA Metro");
    const [title, setTitle] = useState("Agent");
    const profilePicture = "https://randomuser.me/api/portraits/men/9.jpg";
    const navigate = useNavigate();
    const [errors, setErrors] = useState(false);
    //everything needed for Express APIs
    const { authToken } = useContext(AuthContext);
    const { loggedUserId } = useContext(AuthContext);
    const baseUrl = "http://localhost:8000/api";
    const authHeader = {"Authorization": `Bearer: ${authToken}` }

    useEffect(() => {
        // if (!loggedUserId || !authToken) {
        //     return navigate("/login");
        // }

        loggedUserId && axios
            .get(`${baseUrl}/users/${loggedUserId}`)
            .then(res => {
                const results = res.data;
                setFirstName(results.firstName);
                setLastName(results.lastName);
                setEmail(results.email);
                setLocation(results.location);
                setTitle(results.title);
            })
            .catch(err => { setErrors(err?.response?.data?.message) });

    })
    

    const resetPassword = (user) => {
        return navigate("/reset");
    }

    return (
        <>
            <div className="d-flex">
                <SidebarNav />
                <Container fluid>
                    <Row className="mt-3">
                        {errors && <p style={{ color: 'red' }} >{errors}</p>}
                        <Col md={3}>
                            <div className="profile-picture-container">
                                <Image src={profilePicture} alt={`${firstName}'s Profile Photo`} roundedCircle fluid className={`w-50 ${styles.profilePicture}`}/>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="d-flex justify-content-between">
                                <h1>{firstName} {lastName}'s Profile</h1>
                                <Tooltip title="Edit Profile">
                                    <Link to={`/edit_user_profile/${loggedUserId}`}>
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
