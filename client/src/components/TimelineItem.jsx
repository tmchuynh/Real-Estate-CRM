import React from 'react';
import { Row, Col } from 'react-bootstrap';

function TimelineItem(props) {
    return (
        <Row className="timeline-events">
            <Col className="timeline-events-side" md={1}></Col>
            <Col md={2} className="timeline-events-time">{props.time}</Col>
            <Col md={9} className="timeline-events-item">
                <div className="timeline-events-primary">{props.eventName.toUpperCase()}</div>
                <div className="timeline-events-secondary">{props.eventDetail}</div>
                <div className="timeline-events-action">{props.action.toUpperCase()}</div>
            </Col>
        </Row>
    );
}

export default TimelineItem;
