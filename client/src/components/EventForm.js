import React, { useState } from 'react';
import { Form, Button, Stack } from 'react-bootstrap';
import moment from 'moment';
import { Tooltip } from '@mui/material';

const EventForm = ({ onAddEvent }) => {
  const [lead, setLead] = useState('');
  const [address, setAddress] = useState('');
  const [timeFrame, setTimeFrame] = useState(moment().format('YYYY-MM-DD'));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { lead, address, timeFrame };
    onAddEvent(newEvent);
    setLead('');
    setAddress('');
    setTimeFrame(moment().format('YYYY-MM-DD'));
  };

  return (

    <Form onSubmit={handleSubmit}>
      <Stack gap={3}>
        <Form.Group controlId="formLead">
          <Form.Label>Lead</Form.Label>
          <Form.Control
            type="text"
            value={lead}
            onChange={(e) => setLead(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formTimeFrame">
          <Form.Label>Time Frame</Form.Label>
          <Form.Control
            type="date"
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
          />
        </Form.Group>

        <Tooltip title="Schedule Event">
          <Button variant="primary" type="submit">
            Add Event
          </Button>
        </Tooltip>
      </Stack>
    </Form>
  );
};

export default EventForm;
