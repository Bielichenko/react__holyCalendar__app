/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Calendar } from './components/Calendar/Calendar';
import { DateFilter } from './components/DateFilter/DateFilter';
import { getDataFromServer } from './utils/helpers/getDataFromServer';
import { getDateFilterFromLS } from './utils/helpers/getDateFilterFromLS';
import { useAppDispatch, useAppSelector } from './hook';
import { setDateFilter, setUserEvents } from './store/calendarSlice';

import './App.scss';
import { CreatingEventButton } from './components/CreatingEventButton/CreatingEventButton';

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
          <CreatingEventButton />
          {/* <DateFilter /> */}
        </header>
        {/* <main className="app__main">
          <Calendar />
        </main>
        <a target="_blank" href="https://icons8.com/" className="resource" rel="noreferrer">Icons resource link</a> */}
      </div>
    )
  );
};
