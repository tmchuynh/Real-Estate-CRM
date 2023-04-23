import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Chrono } from "react-chrono";

function Timeline({ items }) {
    return (
        <div style={{ width: "500px", height: "950px" }}>
            <Chrono items={items} mode="TREE" />
        </div>
    );
}

const LeadDetails = ({ index }) => {
    const navigate = useNavigate();
    const [timeline, setTimeline] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [event, setEvent] = useState('');

    const handleAddEvent = (e) => {
        e.preventDefault();
        setTimeline([...timeline, event]);
        setShowForm(false);
        setEvent('');
    };

    const goBack = () => {
        navigate("/leads")
    }

    return (
        <div>
            <div className="d-flex justify-content-between">

            <h2>Lead Details</h2>
            <Button onClick={goBack}>Back</Button>
            </div>
            {/* <p>Name: {index.name}</p>
            <p>Email: {index.email}</p>
            <p>Phone Number: {index.phone}</p> */}

            <h3>Timeline</h3>
            <Button onClick={() => setShowForm(true)}>Add Event</Button>
            {showForm && (
                <form onSubmit={handleAddEvent}>
                    <Form.Group controlId="formBasicEvent">
                        <Form.Label>Event</Form.Label>
                        <Form.Control type="text" placeholder="Enter event" value={event} onChange={(e) => setEvent(e.target.value)} />
                    </Form.Group>
                    <Button type="submit">Add</Button>
                </form>
            )}
            <Timeline items={timeline} />
        </div>
    );
};

export default LeadDetails;
