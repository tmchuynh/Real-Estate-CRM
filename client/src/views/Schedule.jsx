import React, { useState } from 'react';
import MyCalendar from '../components/MyCalendar';
import EventForm from '../components/EventForm';
import { Button } from 'react-bootstrap';
import moment from 'moment';

const Schedule = () => {
    const [showForm, setShowForm] = useState(false);
    const [events, setEvents] = useState([]);

    const handleFormToggle = () => {
        setShowForm(!showForm);
    };

    const handleAddEvent = (newEvent) => {
        const date = moment(newEvent.timeFrame, 'YYYY-MM-DD');
        const event = {
            title: newEvent.lead,
            start: date.toDate(),
            end: date.add(1, 'days').toDate(),
            address: newEvent.address,
        };
        setEvents([...events, event]);
    };

    return (
        <>
            <Button onClick={handleFormToggle}>
                {showForm ? 'Hide Form' : 'Show Form'}
            </Button>
            {showForm && <EventForm onAddEvent={handleAddEvent} />}
            <MyCalendar events={events} />
        </>
    );
};

export default Schedule;