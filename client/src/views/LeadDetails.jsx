import React, { useState } from 'react';
import { Button, Form, Stack } from 'react-bootstrap'

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
        <div>
            <h2>Lead Details</h2>
            {/* <p>Name: {index.name}</p>
            <p>Email: {index.email}</p>
            <p>Phone Number: {index.phone}</p> */}

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
        </div>
    );
};

export default LeadDetails;
