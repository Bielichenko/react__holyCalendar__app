/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import './App.scss';
import { Calendar } from './components/Calendar/Calendar';
import { DateFilter } from './components/DateFilter/DateFilter';
import { EventButton } from './components/EventButton/EventButton';
// import { getCurrentDate } from './helpers/getCurrentDate';
import { getDataFromServer } from './utils/helpers/getDataFromServer';
import { getDateFilterFromLS } from './utils/helpers/getDateFilterFromLS';
import { useAppDispatch, useAppSelector } from './hook';
import { setCurrMonth, setDateFilter, setUserEvents } from './store/calendarSlice';
import { IDateFilter } from './types/IDateFilter';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const dateFilter = useAppSelector(state => state.calendar.dateFilter);

  useEffect(() => {
    const eventsFromServer = getDataFromServer();
    const dateFilterFromLS = getDateFilterFromLS();

    dispatch(setUserEvents(eventsFromServer));
    dispatch(setDateFilter(dateFilterFromLS));
  }, []);

  return (
    dateFilter && (
      <div className="app">
        <header className="app__header">
          <EventButton />
          <DateFilter />
        </header>
        <main className="app__main">
          <Calendar />
        </main>
        <a target="_blank" href="https://icons8.com/" className="resource" rel="noreferrer">Icons resource link</a>
      </div>
    )
  );
};
