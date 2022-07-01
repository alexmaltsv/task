import { Dialog } from '@mui/material';
import { EventsForm } from 'features/events/components/EventsForm';
import { EventDto } from 'features/events/types';

type EventsEditProps = {
  open: boolean;
  onSubmit: (fd: EventDto) => void;
  onClose: () => void;
  error?: string;
  initialValues: EventDto;
};

export const EventsEdit = (
  {
    open,
    onClose,
    onSubmit,
    error,
    initialValues,
  }: EventsEditProps,
) => {
  return (
    <Dialog open={open}>
      <EventsForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        title="Edit event"
        onCancel={onClose}
        error={error}
      />
    </Dialog>
  );
};
