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
        const updatedEvents = [...events]; // create a copy of the events array to update
        updatedEvents.unshift({
            time: new Date().toLocaleTimeString(),
            eventName: eventName,
            eventDetail: eventDetail,
            action: action,
        });

        setEvents(updatedEvents); // update the events state variable
        setEventName(""); // clear the form values
        setEventDetail("");
        setAction("");
        setShowForm(false);
    }

    const handleEditEvent = (eventName, eventDetail) => {
        setEventName(eventName);
        setEventDetail(eventDetail);
        setShowForm(true);
    };

    const renderEvents = () => { // define the function as a const to be used in JSX
        return events.map((val, index) => { // access events variable instead of this.state.events
            const date = new Date().toLocaleDateString();
            return (
                <TimelineItem
                    key={index}
                    date={date}
                    time={val.time}
                    eventName={val.eventName}
                    eventDetail={val.eventDetail}
                    onEdit={handleEditEvent}
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
