import React from 'react';
import { EventEntity } from 'features/events/types';
import { IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

type EventsListProps = {
  events?: EventEntity[] | undefined;
  onClickEdit: (id: number) => void;
  onClickDelete: (id: number) => void;
};

export const EventsList = ({ events, onClickEdit, onClickDelete }: EventsListProps) => {
  if (!events) {
    return <p>No events.</p>;
  }

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.id} {event.title}
            <IconButton onClick={() => onClickDelete(event.id)}>
              <Delete />
            </IconButton>

            <IconButton onClick={() => onClickEdit(event.id)}>
              <Edit />
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
};
