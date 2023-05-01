//removing the Timeline for later when I give it the right functionality

import Timeline from "./Timeline";
import { useState, useEffect } from 'react';
import { Button, Stack, Form } from 'react-bootstrap'
import TimelineItem from "./TimelineItem";
import axios from 'axios';

export default function TimelineForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [allActivity, setAllActivity] = useState([]);
    const [editing, setEditing] = useState(false); 
    const [editIndex, setEditIndex] = useState(-1);
    const [formErrors, setFormErrors] = useState(false);
    const [editErrors, setEditErrors] = useState(false);
    const { leadId } = props.leadId;
    const baseUrl = 'localhost:8000/api';

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    /**
     * This function handles the submission of a form by adding the form data to an array of events in the
     * component's state.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        let updatedActivities;
        if (editing) {
            // update state with the edits
            updatedActivities = [...allActivity];
            updatedActivities[editIndex] = {
                ...updatedActivities[editIndex],
                title,
                description,
                time: new Date().toLocaleTimeString()
            };
            //update the db with the edits
            axios
                .put(`${baseUrl}/leads/${leadId}`, { timelineActivity: {title, description} })
                .catch( error => setEditErrors(error));
        } else {
            // adding new event
            updatedActivities = [{ time: new Date().toLocaleTimeString(), title, description }, ...allActivity,];
        }
        setAllActivity(updatedActivities);
        setTitle('');
        setDescription('');
        setShowForm(false);
        setEditing(false);
        setEditIndex(-1); // reset the edit index
    };
    const handleEditActivity = (title, description) => {
        setTitle(title);
        setDescription(description);
        setShowForm(true);
        setEditing(true);
    };
    const renderActivity = () => {
        return allActivity.map((val, index) => {
            const date = new Date().toLocaleDateString();
            return (
                <TimelineItem
                    key={index}
                    date={date}
                    time={val.time}
                    title={val.title}
                    description={val.description}
                    onEdit={handleEditActivity}
                    index={index}
                />

            );
        });
    }
    return (
        <div className="main">
            <Stack gap={4}>
                <h2>Relationship Timeline</h2>
                <Timeline header={"Latest Activity".toUpperCase()}>{renderActivity()}</Timeline>
                {showForm && (
                    <Form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="Event Name">Title</label>
                            <input
                                className="form-control"
                                value={title}
                                onChange={handleChangeTitle}
                            />
                            <label htmlFor="Event Detail">Details</label>
                            <input
                                className="form-control"
                                value={description}
                                onChange={handleChangeDescription}
                            />
                        </div>
                        <Button type="submit" className="btn btn-primary my-3">
                            Save
                        </Button>
                    </Form>
                )}
                <Button onClick={() => setShowForm(true)}>Add New Activity</Button>
            </Stack>
        </div>
    );
}
