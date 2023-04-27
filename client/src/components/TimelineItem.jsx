import React from 'react';
import { Row, Col, Badge, Button } from 'react-bootstrap';

function TimelineItem({ date, time, eventName, eventDetail, onEdit, index }) {
    return (
        <Row className="timeline">
            <Col md={1} className="timeline_date">
                <Badge bg="primary">{date}</Badge>
            </Col>
            <Col md={1}>
                <div className="timeline_events_time">{time}</div>
            </Col>
            <Col md={8} className="timeline_events">
                <span className="timeline_events_side" />
                <span className="timeline_events_dot" />
                <div className="timeline_events_item">
                    <div className="timeline_events_primary">
                        <b>Event:</b> {eventName.toUpperCase()}
                    </div>
                    <div className="timeline_events_secondary">
                        <b>Details: </b>
                        {eventDetail}
                    </div>
                </div>
            </Col>
            <Col md={2}>
                {onEdit && (
                    <Button onClick={() => onEdit(eventName, eventDetail, index)}>Edit</Button>
                )}
            </Col>
        </Row>
    );
}

export default TimelineItem;
