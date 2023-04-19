import React from 'react';
import { Link } from 'react-router-dom';
import SidebarNav from "../components/SideNav"
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const LeadProfile = ({ user }) => {
    const { firstName, lastName, phoneNumber, isBuying, isSelling, marketArea, profilePicture } = user;

    return (
        <>
            <div className="d-flex">
                <SidebarNav />

                <Container>
                    <h2>Lead Profile</h2>
                    <Row className="mt-3">
                        <Col md={3}>
                            <div className="profile-picture-container">
                                <Image src={profilePicture} alt={`${firstName} ${lastName}`} roundedCircle fluid />
                            </div>
                        </Col>
                        <Col md={9}>
                            <h1>{`${firstName} ${lastName}'s Profile`}</h1>
                            <p>Phone Number: {phoneNumber}</p>
                            <p>Buying: {isBuying ? 'Yes' : 'No'}</p>
                            <p>Selling: {isSelling ? 'Yes' : 'No'}</p>
                            <p>Market Area: {marketArea}</p>
                            <Link to={`/edit_lead_profile/${user.id}`}><Button>Edit</Button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LeadProfile;
