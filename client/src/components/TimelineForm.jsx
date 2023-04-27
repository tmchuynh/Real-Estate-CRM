import Timeline from "./Timeline";
import { useState } from 'react'; // import useState hook
import { Button, Stack, Form } from 'react-bootstrap'
import TimelineItem from "./TimelineItem";

const TimelineForm = () => {
    // define state variables using useState hook
    const [eventName, setEventName] = useState('');
    const [eventDetail, setEventDetail] = useState('');
    const [action, setAction] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [events, setEvents] = useState([]); // add events state variable and initialize as an empty array
    const [editing, setEditing] = useState(false); // add editing state variable and initialize as false
    const [editIndex, setEditIndex] = useState(-1); // add editIndex state variable and initialize as -1


    const handleChangeEventName = (e) => {
        setEventName(e.target.value); // update state using setEventName function
    }

    const handleChangeEventDetail = (e) => {
        setEventDetail(e.target.value);
    }

    const handleChangeAction = (e) => {
        setAction(e.target.value);
    }

    /**
     * This function handles the submission of a form by adding the form data to an array of events in the
     * component's state.
     */

    const handleSubmit = (e) => {
        e.preventDefault();
        let updatedEvents;
        if (editing) {
            // editing existing event
            updatedEvents = [...events];
            updatedEvents[editIndex] = {
                ...updatedEvents[editIndex],
                eventName,
                eventDetail,
                time: new Date().toLocaleTimeString(),
                action,
            };
        } else {
            // adding new event
            updatedEvents = [{ time: new Date().toLocaleTimeString(), eventName, eventDetail, action, }, ...events,];
        }
        setEvents(updatedEvents);
        setEventName('');
        setEventDetail('');
        setAction('');
        setShowForm(false);
        setEditing(false);
        setEditIndex(-1); // reset the edit index
    };


    const handleEditEvent = (eventName, eventDetail) => {
        setEventName(eventName);
        setEventDetail(eventDetail);
        setShowForm(true);
        setEditing(true);
    };



    const renderEvents = () => { // define the function as a const to be used in JSX
        return events.map((val, index) => { // access events variable instead of this.state.events
            const date = new Date().toLocaleDateString();
            return (
                <TimelineItem
                    key={index}
                    date={new Date().toLocaleDateString()}
                    time={val.time}
                    eventName={val.eventName}
                    eventDetail={val.eventDetail}
                    onEdit={handleEditEvent}
                    index={index} // pass index as prop
                />

            );
        });
    }

    return ( // use return instead of render()
        <div className="main">
            <Stack gap={4}>
                <h2>Timeline</h2>
                <Timeline header={"Latest Activity".toUpperCase()}>{renderEvents()}</Timeline> {/* use renderEvents() instead of this.renderEvents() */}
                {showForm && (
                    <Form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="Event Name">Event Name</label>
                            <input
                                className="form-control"
                                value={eventName}
                                onChange={handleChangeEventName}
                            />
                            <label htmlFor="Event Detail">Event Detail</label>
                            <input
                                className="form-control"
                                value={eventDetail}
                                onChange={handleChangeEventDetail}
                            />
                        </div>
                        <Button type="submit" className="btn btn-primary my-3">
                            Submit
                        </Button>
                    </Form>
                )}

                <Button onClick={() => setShowForm(true)}>Add Event</Button> {/* use setShowForm instead of this.setState */}
            </Stack>
        </div>
    );
}

export default TimelineForm;
