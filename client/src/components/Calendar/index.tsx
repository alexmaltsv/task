import FullCalendar from '@fullcalendar/react';
import React, { useMemo } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventEntity, EventStatus } from 'features/events/types';

type CalendarProps = {
  events?: EventEntity[];
};

const colorByStatus = {
  [EventStatus.DONE]: 'green',
  [EventStatus.IN_PROGRESS]: 'blue',
  [EventStatus.PENDING]: '#ddd',
};

export const Calendar = ({ events }: CalendarProps) => {
  const eventsFormatted = useMemo(() => events && events.map((event) => ({
    id: event.id.toString(),
    title: event.title,
    start: event.startTime,
    end: event.endTime,
    color: colorByStatus[event.status] || 'red',
  }),
  ), [events]);

  return (
    <div>
      <h1>Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={eventsFormatted}
      />
    </div>
  );
};
