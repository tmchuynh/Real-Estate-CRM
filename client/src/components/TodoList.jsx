import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTasks = [...tasks];
    newTasks.push(newTask);
    setTasks(newTasks);
    setNewTask('');
  };

  const handleTaskDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>To-Do List</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Add a task" value={newTask} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit" className='my-3'>
              Add
            </Button>
          </Form>
          <ListGroup>
            {tasks.map((task, index) => (
              <ListGroup.Item key={index}>
                {task}
                <Button variant="danger" size="sm" className="float-end" onClick={() => handleTaskDelete(index)}>
                  X
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList;
