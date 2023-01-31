import React from 'react';
import { getDaysList } from '../../utils/helpers/getDaysList';
import { useAppSelector } from '../../hook';
import { IDay } from '../../types/IDay';
import { CalendarCell } from '../CalendarCell/CalendarCell';
import { UpdateForm } from '../Forms/UpdateForm/UpdateForm';

import './CalendarGrid.scss';

export const CalendarGrid = () => {
  const selectedMonth = useAppSelector(state => state.calendar.selectedMonth)
  const userEvents = useAppSelector(state => state.calendar.userEvents)
  const editingEvent = useAppSelector (state => state.calendar.editedEvent)
  const daysListForCalendar = getDaysList(selectedMonth, userEvents)

  return (
    <ul className="calendarGrid">
      {
        editingEvent
        && (<UpdateForm editingEvent={editingEvent}/> )
      }
      {daysListForCalendar.map((day: IDay) => {
        return (
          <li key={Math.random()} className="calendar__dayCell">
            <CalendarCell day={day} />
          </li>
        );
      })}
    </ul>
  );
};
