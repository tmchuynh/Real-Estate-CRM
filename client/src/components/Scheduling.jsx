import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import MyCalendar from './MyCalendar';
import EventForm from './EventForm';
import Timeline from './Timeline';

const Scheduling = () => {
    const [events, setEvents] = useState([]);

    const handleAddEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    const formatEventsForCalendar = () => {
        return events.map((event) => ({
            title: event.lead,
            start: moment(event.timeFrame).toDate(),
            end: moment(event.timeFrame).add(1, 'day').toDate(),
        }));
    };

    const renderEvents = () => {
        return events.map((event, index) => {
            return (
                <Timeline.Item
                    key={index}
                    date={moment(event.timeFrame).format('MMM D, YYYY')}
                    time={moment(event.timeFrame).format('h:mm A')}
                    eventName={event.lead}
                    eventDetail={`Address: ${event.address}`}
                    action="Scheduled"
                />
            );
        });
    };

    return (
        <>
            <div className="d-flex">
                <Container>
                    <Row className="mt-4">
                        <Col md={4}>
                            <h4 className="text-center">Add Event</h4>
                            <EventForm onAddEvent={handleAddEvent} />
                        </Col>
                        <Col md={8}>
                            <h4 className="text-center">Calendar</h4>
                            <MyCalendar events={formatEventsForCalendar()} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Scheduling;
