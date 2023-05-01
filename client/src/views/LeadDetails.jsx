import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import SidebarNav from '../components/SideNav';
import CopyButton from '../components/CopyBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
// import TimelineForm from '../components/TimelineForm';


export default function LeadDetails() {
    // const [timeline, setTimeline] = useState([]);
    // const [showForm, setShowForm] = useState(false);
    // const [event, setEvent] = useState("");
    const thisLead = { firstName: 'Sarah', lastName: 'Martinez', email: 'sarah.martinez@example.com', phoneNumber: '(713) 555-1234', status: 'Closing', buying: true, selling: true, marketArea: 'West' };
    const { firstName, lastName, email, phoneNumber, status, buying, selling, marketArea } = thisLead;
    console.log(firstName);


    // const handleAddEvent = (e) => {
    //     e.preventDefault();
    //     setTimeline([...timeline, event]);
    //     setShowForm(false);
    //     setEvent("");
    // }

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
                            {firstName}
                        </p>
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Last Name: </b>
                        </p>
                        <p id='last_name'>
                            {lastName}
                        </p>
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Email: </b>
                        </p>
                        <p id='email'>
                            {email}
                        </p>
                        <CopyButton target="email" />
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Phone Number: </b>
                        </p>
                        <p id='phone_number'>
                            {phoneNumber}
                        </p>
                        <CopyButton target="phone_number" />
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Status: </b>
                        </p>
                        <p id='status'>
                            {status}
                        </p>
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Buying: </b>
                        </p>
                        {buying === true ? (
                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#04a201" }} />
                        ) : buying === false ? (
                            <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#d80e0e" }} />
                        ) : (
                            buying
                        )}
                    </div>

                    <div className="d-flex gap-3">
                        <p>
                            <b>Selling: </b>
                        </p>
                        {selling === true ? (
                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#04a201" }} />
                        ) : selling === false ? (
                            <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#d80e0e" }} />
                        ) : (
                            selling
                        )}
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Market Area: </b>
                        </p>
                        <p id='market_area'>
                            {marketArea}
                        </p>
                    </div>
                    {/* removing the Timeline for later when I give it the right functionality */}
                    {/* <TimelineForm /> */}
                </Container>
            </div>
        </>
    );
};

