/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDateFilter } from '../types/IDateFilter';
import { IEvent } from '../types/IEvent';
import { IMonthSelected } from '../types/IMonth';

type calendar = {
  dateFilter: IDateFilter | null;
  selectedMonth: IMonthSelected | null;
  userEvents: IEvent[];
  isCreatingEvent: boolean;
  editedEvent: IEvent | null;
};

const initialState: calendar = {
  dateFilter: null,
  selectedMonth: null,
  userEvents: [],
  isCreatingEvent: false,
  editedEvent: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setDateFilter(state, action: PayloadAction<IDateFilter>) {
      state.dateFilter = action.payload;
    },
    setSelectedMonth(state, action: PayloadAction<IMonthSelected>) {
      state.selectedMonth = action.payload;
    },
    setUserEvents(state, action: PayloadAction<IEvent[]>) {
      state.userEvents = action.payload;
    },
    setIsCreatingEvent(state, action: PayloadAction<boolean>) {
      state.isCreatingEvent = action.payload;
    },
    setEditedEvent(state, action: PayloadAction<IEvent | null>) {
      state.editedEvent = action.payload;
    },
  },
});

export const {
  setDateFilter,
  setSelectedMonth,
  setUserEvents,
  setIsCreatingEvent,
  setEditedEvent,
} = calendarSlice.actions;

export default calendarSlice.reducer;
