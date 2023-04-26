import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';

function TimelineItem(props) {
    return (
        <Row className="timeline">
            <Col md={1} className="timeline_date">
                <Badge bg="primary">{props.date}</Badge>
            </Col>
            <Col md={1}>
                <div className="timeline_events_time">{props.time}</div>
            </Col>
            <Col md={8} className="timeline_events">
                <span className="timeline_events_side" />
                <span className="timeline_events_dot" />
                <div className="timeline_events_item">
                    <div className="timeline_events_primary">
                        <b>Event:</b> {props.eventName.toUpperCase()}
                    </div>
                    <div className="timeline_events_secondary">
                        <b>Details: </b>{props.eventDetail}
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default TimelineItem;
