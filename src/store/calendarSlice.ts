/* eslint-disable*/

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createCurrMonthObject } from '../utils/helpers/createCurrMonthObject';
import { getDataFromServer } from '../utils/helpers/getDataFromServer';
import { IDateFilter } from '../types/IDateFilter';
import { IEvent } from '../types/IEvent';
import { IMonthRoot } from '../types/IMonth';

type calendar = {
  dateFilter: IDateFilter | null;
  currMonth: IMonthRoot | null;
  userEvents: IEvent[];
  isAddingEvent: boolean;
  editingEvent: IEvent | null;
};

const initialState: calendar = {
  dateFilter: null,
  currMonth: null,
  userEvents: [],
  isAddingEvent: false,
  editingEvent: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setDateFilter(state, action: PayloadAction<IDateFilter>) {
      state.dateFilter = action.payload;
    },
    setCurrMonth(state, action: PayloadAction<IMonthRoot>) {
      state.currMonth = action.payload;
    },
    setUserEvents(state, action: PayloadAction<IEvent[]>) {
      state.userEvents = action.payload;
    },
    setIsAddingEvent(state, action: PayloadAction<boolean>) {
      state.isAddingEvent = action.payload;
    },
    setEditingEvent(state, action: PayloadAction<IEvent | null>) {
      state.editingEvent = action.payload;
    },
  },
});

export const {
  setDateFilter,
  setCurrMonth,
  setUserEvents,
  setIsAddingEvent,
  setEditingEvent,
} = calendarSlice.actions;

export default calendarSlice.reducer;
