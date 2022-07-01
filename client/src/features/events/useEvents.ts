import { useSelector } from 'react-redux';
import {
  selectEventsData,
  selectEventsError,
  selectEventsState,
  eventsLoad,
  eventsCreate,
  selectEventsModalError, eventsEdit, eventsDelete,
} from 'features/events';
import { useCallback } from 'react';
import { useAppDispatch } from 'useAppDispatch';
import { EventDto } from 'features/events/types';

export const useEvents = () => {
  const dispatch = useAppDispatch();
  const data = useSelector(selectEventsData);
  const state = useSelector(selectEventsState);
  const error = useSelector(selectEventsError);
  const modalError = useSelector(selectEventsModalError);

  const load = useCallback(() => dispatch(eventsLoad()).unwrap(), [dispatch]);
  const create = useCallback((dto: EventDto) => dispatch(eventsCreate(dto)).unwrap(), [dispatch]);
  const edit = useCallback(
    (...rest: Parameters<typeof eventsEdit>) => dispatch(eventsEdit(...rest)).unwrap(),
    [dispatch],
  );
  const remove = useCallback((id: number) => dispatch(eventsDelete(id)).unwrap(), [dispatch]);

  return {
    data,
    state,
    error,
    load,
    remove,
    edit,
    create,
    modalError,
  };
};
