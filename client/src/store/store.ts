import { configureStore } from '@reduxjs/toolkit';
import { eventsSlice } from 'features/events';

export const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;