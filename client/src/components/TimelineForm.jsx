import Timeline from "./Timeline";
import { useState, useEffect } from 'react'; // import useState hook
import { Button, Stack, Form } from 'react-bootstrap'
import TimelineItem from "./TimelineItem";
import axios from 'axios';

const TimelineForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [allActivity, setAllActivity] = useState([]);
    const [editing, setEditing] = useState(false); 
    const [editIndex, setEditIndex] = useState(-1); // add editIndex state variable and initialize as -1
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
            // editing existing event
            updatedActivities = [...allActivity];
            updatedActivities[editIndex] = {
                ...updatedActivities[editIndex],
                title,
                description,
                time: new Date().toLocaleTimeString()
            };
            axios
                .put(`${baseUrl}/`)
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



    const renderEvents = () => {
        return allActivity.map((val, index) => {
            const date = new Date().toLocaleDateString();
            return (
                <TimelineItem
                    key={index}
                    date={new Date().toLocaleDateString()}
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
                <Timeline header={"Latest Activity".toUpperCase()}>{renderEvents()}</Timeline>
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

export default TimelineForm;
