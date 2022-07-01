import { Dialog } from '@mui/material';
import { EventsForm } from 'features/events/components/EventsForm';
import { EventDto } from 'features/events/types';

type EventsCreateProps = {
  open: boolean;
  onSubmit: (fd: EventDto) => void;
  onClose: () => void;
  error?: string;
};
export const EventsCreate = ({ open, onClose, onSubmit, error }: EventsCreateProps) => {
  return (
    <Dialog open={open}>
      <EventsForm
        onSubmit={onSubmit}
        title="Create event"
        onCancel={onClose}
        error={error}
      />
    </Dialog>
  );
};
