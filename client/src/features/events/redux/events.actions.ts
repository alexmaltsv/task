import { createAsyncThunk } from '@reduxjs/toolkit';
import { EventDto, EventsList } from 'features/events/types';
import { ResponseError } from 'types';
import axios from 'axios';
import { API } from 'shared';

export const eventsLoad = createAsyncThunk<any, void, {
  rejectValue: ResponseError
}>('events/load', async (_, { rejectWithValue }) => {
  try {
    const result = await axios(API.events());
    const data = await result.data as EventsList;
    return data;
  } catch (error) {
    return rejectWithValue((error as ResponseError));
  }
});

export const eventsCreate = createAsyncThunk<any, EventDto, {
  rejectValue: ResponseError
}>('events/create', async (data: EventDto, { rejectWithValue }) => {
  try {
    const result = await axios.post(API.events(), data);
    return result.data;
  } catch (error) {
    return rejectWithValue((error as ResponseError));
  }
});

export const eventsEdit = createAsyncThunk<void, { id: number, dto: EventDto }, {
  rejectValue: ResponseError
}>('events/create', async ({ id, dto }, { rejectWithValue }) => {
  try {
    const result = await axios.patch(API.event(id), dto);
    return result.data;
  } catch (error) {
    return rejectWithValue((error as ResponseError));
  }
});

export const eventsDelete = createAsyncThunk<void, number, {
  rejectValue: ResponseError
}>('events/create', async (id: number, { rejectWithValue }) => {
  try {
    const result = await axios.delete(API.event(id));
    return result.data;
  } catch (error) {
    return rejectWithValue((error as ResponseError));
  }
});
