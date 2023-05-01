//removing the Timeline for later when I give it the right functionality

import React from 'react';
import { Row, Col, Badge, Button } from 'react-bootstrap';

export default function TimelineItem({ date, time, title, description, onEdit, index }) {
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
                        <b>Title:</b> {title}
                    </div>
                    <div className="timeline_events_secondary">
                        <b>Description: </b>
                        {description}
                    </div>
                </div>
            </Col>
            <Col md={2}>
                {onEdit && (
                    <Button onClick={() => onEdit(title, description, index)}>Edit</Button>
                )}
            </Col>
        </Row>
    );
}
