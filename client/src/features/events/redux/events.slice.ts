import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { ReduxState, ResponseError } from 'types';
import { eventsCreate, eventsDelete, eventsLoad } from 'features/events/redux/events.actions';

export interface EventsState {
  state: ReduxState;
  data?: any;
  error?: ResponseError | null;

  modalError?: ResponseError | null;
}

const initialState: EventsState = {
  state: 'inited',
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(eventsLoad.pending, (state) => {
      state.state = 'pending';
      state.error = null;
    });
    builder.addCase(eventsLoad.fulfilled, (state, { payload }) => {
      state.state = 'fulfilled';
      state.data = payload.data;
    });
    builder.addCase(eventsLoad.rejected, (state, { payload }) => {
      state.state = 'failed';
      state.error = payload;
    });

    builder.addCase(eventsCreate.pending, (state) => {
      state.modalError = undefined;
    });
    builder.addCase(eventsCreate.rejected, (state, { payload }) => {
      state.modalError = payload;
    });

    builder.addCase(eventsDelete.fulfilled, (state, { meta: { arg } }) => {
      state.data = state.data.filter(({ id }) => id !== arg);
    });
  },
});

export const getEvents = (state: RootState) => state.events as EventsState;
export const selectEventsData = createSelector(getEvents, ({ data }) => data);
export const selectEventsState = createSelector(getEvents, ({ state }) => state);
export const selectEventsError = createSelector(getEvents, ({ error }) => error);
export const selectEventsModalError = createSelector(getEvents, ({ modalError }) => modalError);

export { eventsSlice };
