import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '@mui/material';
import { Calendar } from 'components';
import { useEvents } from './useEvents';
import { CalendarContainer, EventListContainer, EventsContainer, EventsLeft } from './styles';
import { EventsCreate, EventsEdit, EventsList } from './components';
import { EventDto } from 'features/events/types';
import { EventsDelete } from 'features/events/components/EventsDelete';

export const Events = () => {
  const {
    load,
    data: events,
    modalError,
    create,
    edit,
  } = useEvents();
  const [isOpenCreate, showCreate] = useState(false);
  const [deleteId, showDelete] = useState<number | null>(null);
  const [editId, showEdit] = useState<number | null>(null);

  const editEvent = useMemo(() => events?.find(({ id }) => id === editId), [events, editId]);

  const handleCreate = (fd: EventDto) => {
    create(fd).then(() => {
      showCreate(false);
      load();
    });
  };

  const handleEdit = (id: number, dto: EventDto) => {
    edit({ id, dto }).then(() => {
      showEdit(null);
    });
  };

  useEffect(() => {
    load();
  }, [load]);

  return (
    <EventsContainer>
      <EventsCreate
        open={isOpenCreate}
        error={modalError?.response.data.message}
        onClose={() => showCreate(false)}
        onSubmit={handleCreate}
      />

      <EventsEdit
        initialValues={editEvent}
        open={Boolean(editId)}
        error={modalError?.response.data.message}
        onClose={() => showEdit(null)}
        onSubmit={(dto) => handleEdit(editId, dto)}
      />

      <EventsDelete
        id={deleteId}
        onClose={() => showDelete(null)}
      />

      <EventsLeft>
        <Button
          onClick={() => showCreate(true)}
          variant="contained"
        >
          Create Event
        </Button>
      </EventsLeft>
      <EventListContainer>
        <EventsList
          events={events}
          onClickEdit={showEdit}
          onClickDelete={showDelete}
        />
      </EventListContainer>

      {events && (
        <CalendarContainer>
          <Calendar events={events} />
        </CalendarContainer>
      )}
    </EventsContainer>
  );
};
