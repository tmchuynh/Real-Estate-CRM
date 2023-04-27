import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import SidebarNav from '../components/SideNav';
import CopyButton from '../components/CopyBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import TimelineForm from '../components/TimelineForm';


const LeadDetails = ({ index }) => {
    const [timeline, setTimeline] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [event, setEvent] = useState("");


    const handleAddEvent = (e) => {
        e.preventDefault();
        setTimeline([...timeline, event]);
        setShowForm(false);
        setEvent("");
    }

    return (
        <>
            <div className="d-flex">
                <SidebarNav />
                <Container fluid className='m-3'>
                    <h2>Lead Details</h2>
                    <div className="d-flex gap-3">
                        <p>
                            <b>First Name: </b>
                        </p>
                        <p id='first_name'>
                            {index.firstName}
                        </p>
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Last Name: </b>
                        </p>
                        <p id='last_name'>
                            {index.lastName}
                        </p>
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Email: </b>
                        </p>
                        <p id='email'>
                            {index.email}
                        </p>
                        <CopyButton email="email" />
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Phone Number: </b>
                        </p>
                        <p id='phone_number'>
                            {index.phoneNumber}
                        </p>
                        <CopyButton email="phone_number" />
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Status: </b>
                        </p>
                        <p id='status'>
                            {index.status}
                        </p>
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Buying: </b>
                        </p>
                        {index.buying === "True" ? (
                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#04a201" }} />
                        ) : index.buying === "False" ? (
                            <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#d80e0e" }} />
                        ) : (
                            index.buying
                        )}
                    </div>

                    <div className="d-flex gap-3">
                        <p>
                            <b>Selling: </b>
                        </p>
                        {index.selling === "True" ? (
                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#04a201" }} />
                        ) : index.selling === "False" ? (
                            <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#d80e0e" }} />
                        ) : (
                            index.selling
                        )}
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Market Area: </b>
                        </p>
                        <p id='market_area'>
                            {index.marketArea}
                        </p>
                    </div>


                            <TimelineForm/>



                </Container>
            </div>
        </>
    );
};

export default LeadDetails;

