import { Dialog, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useEvents } from 'features/events/useEvents';

type EventsDeleteProps = {
  id: number;
  onClose: () => void;
};

export const EventsDelete = ({ id, onClose }: EventsDeleteProps) => {
  const { remove } = useEvents();

  const submit = () => {
    remove(id).then(onClose);
  };

  return (
    <Dialog open={Boolean(id)}>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete the event?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button onClick={submit}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
};
