import { TextField, Button, MenuItem } from '@mui/material';
import {
  EventsFormContainer,
  EventsFormError,
  EventsFormField,
  EventsFormFooter,
  EventsFormTitle,
  EventsFormWrapper,
} from 'features/events/components/EventsForm/EventsForm.styled';
import { FormEvent, useMemo } from 'react';
import { EventDto, EventStatus } from 'features/events/types';

type EventsFormProps = {
  title: string;
  onSubmit: (dto: EventDto) => void;
  onCancel: () => void;
  error?: string;
  initialValues?: Partial<EventDto>;
};

const formatLocalDate = (date: string) => new Date(date).toISOString().substring(0, 16);

export const EventsForm = (
  {
    title,
    onCancel,
    onSubmit,
    error,
    initialValues = {},
  }: EventsFormProps,
) => {
  const handleSubmit = (e: FormEvent) => {
    const formData = new FormData(e.target as HTMLFormElement);
    const formProps = Object.fromEntries(formData) as EventDto;
    e.preventDefault();
    onSubmit(formProps);
  };

  const formattedInitialValues = useMemo(() => {
    let obj = { ...initialValues };

    if (initialValues.startTime) {
      obj.startTime = formatLocalDate(initialValues.startTime);
    }

    if (initialValues.endTime) {
      obj.endTime = formatLocalDate(initialValues.startTime);
    }

    return obj;
  }, [initialValues]);

  return (
    <EventsFormWrapper onSubmit={handleSubmit}>
      <EventsFormTitle>
        {title}
      </EventsFormTitle>

      <EventsFormContainer>
        <EventsFormField>
          <TextField
            name='title'
            fullWidth
            placeholder="Enter title"
            defaultValue={formattedInitialValues.title}
          />
        </EventsFormField>

        <EventsFormField>
          <TextField
            name='startTime'
            fullWidth
            label="Enter start time"
            placeholder="Enter start time"
            InputLabelProps={{ shrink: true }}
            type='datetime-local'
            defaultValue={formattedInitialValues.startTime}
          />
        </EventsFormField>

        <EventsFormField>
          <TextField
            name='endTime'
            fullWidth
            label="Enter end time"
            placeholder="Enter end time"
            InputLabelProps={{ shrink: true }}
            type='datetime-local'
            defaultValue={formattedInitialValues.endTime}
          />
        </EventsFormField>

        <EventsFormField>
          <TextField
            name='address'
            fullWidth
            placeholder="Enter address"
            defaultValue={formattedInitialValues.address}
          />
        </EventsFormField>

        <EventsFormField>
          <TextField
            name='status'
            select
            fullWidth
            placeholder="Enter status"
            defaultValue={formattedInitialValues.status || EventStatus.PENDING}
          >
            <MenuItem value={EventStatus.PENDING}>Pending</MenuItem>
            <MenuItem value={EventStatus.IN_PROGRESS}>In progress</MenuItem>
            <MenuItem value={EventStatus.DONE}>Done</MenuItem>
          </TextField>
        </EventsFormField>
      </EventsFormContainer>

      {error && (
        <EventsFormError>
          {error}
        </EventsFormError>
      )}

      <EventsFormFooter>
        <Button
          type='submit'
          variant='contained'
        >
          Save
        </Button>
        <Button 
          onClick={onCancel}
          variant='outlined'
        >
          Cancel
        </Button>
      </EventsFormFooter>
    </EventsFormWrapper>
  );
};
