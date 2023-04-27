import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment);


function MyCalendar() {
  const events = [
    {
      start: new Date('2023-04-26T10:00:00'),
      end: new Date('2023-04-26T12:00:00'),
      title: 'Meeting'
    },
    {
      start: new Date('2023-04-28T14:00:00'),
      end: new Date('2023-04-28T16:00:00'),
      title: 'Presentation'
    }
  ];
    const [myEvents, setMyEvents] = useState(events);
  
    const handleSelect = ({ start, end }) => {
      const title = window.prompt('Enter Event Title:');
      if (title) {
        setMyEvents([...myEvents, { start, end, title }]);
      }
    };
  
    return (
      <div>
        <Calendar
          selectable
          localizer={localizer}
          events={myEvents}
          startAccessor="start"
          endAccessor="end"
          defaultView="month"
          style={{ height: 500 }}
          onSelectSlot={handleSelect}
        />
      </div>
    );
  }
  export default MyCalendar;