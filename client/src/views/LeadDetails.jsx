import React, { useState } from 'react';
import { Button, Container, Form, Stack } from 'react-bootstrap'
import SidebarNav from '../components/SideNav';
import CopyButton from '../components/CopyBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'



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
                            {index[0]}
                        </p>
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Last Name: </b>
                        </p>
                        <p id='last_name'>
                            {index[1]}
                        </p>
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Email: </b>
                        </p>
                        <p id='email'>
                            {index[2]}
                        </p>
                        <CopyButton email="email" />
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Phone Number: </b>
                        </p>
                        <p id='phone_number'>
                            {index[3]}
                        </p>
                        <CopyButton email="phone_number" />
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Status: </b>
                        </p>
                        <p id='status'>
                            {index[4]}
                        </p>
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Buying: </b>
                        </p>
                        {index[5] === "True" ? (
                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#04a201" }} />
                        ) : index[5] === "False" ? (
                            <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#d80e0e" }} />
                        ) : (
                            index[5]
                        )}
                    </div>

                    <div className="d-flex gap-3">
                        <p>
                            <b>Selling: </b>
                        </p>
                        {index[6] === "True" ? (
                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#04a201" }} />
                        ) : index[6] === "False" ? (
                            <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#d80e0e" }} />
                        ) : (
                            index[6]
                        )}
                    </div>
                    <div className="d-flex gap-3">
                        <p>
                            <b>Market Area: </b>
                        </p>
                        <p id='market_area'>
                            {index[7]}
                        </p>
                    </div>

                    <h3>Timeline</h3>
                    <Stack gap={4}>
                        <ul>
                            {timeline.map((event, index) => (
                                <li key={index}>{event}</li>
                            ))}
                        </ul>

                        <Button onClick={() => setShowForm(true)}>Add Event</Button>

                        {showForm && (
                            <Form onSubmit={handleAddEvent}>
                                <div className="d-flex">

                                    <Form.Control type="text" value={event} onChange={(e) => setEvent(e.target.value)} />

                                    <Button type="submit" className='ms-3'>Add</Button>
                                </div>
                            </Form>
                        )}

                    </Stack>
                </Container>
            </div>
        </>
    );
};

export default LeadDetails;
