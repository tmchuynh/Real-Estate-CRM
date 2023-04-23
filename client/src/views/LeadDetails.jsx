import React, { useState } from 'react';

const LeadDetails = ({ lead }) => {
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
            <p>Name: {lead.name}</p>
            <p>Email: {lead.email}</p>
            <p>Phone Number: {lead.phone}</p>

            <h3>Timeline</h3>
            <button onClick={() => setShowForm(true)}>Add Event</button>
            {showForm && (
                <form onSubmit={handleAddEvent}>
                    <label>
                        Event:
                        <input type="text" value={event} onChange={(e) => setEvent(e.target.value)} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            )}
            <ul>
                {timeline.map((event, index) => (
                    <li key={index}>{event}</li>
                ))}
            </ul>
        </div>
    );
};

export default LeadDetails;
