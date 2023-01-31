import React from 'react';
import { getDaysList } from '../../utils/helpers/getDaysList';
import { useAppSelector } from '../../hook';
import { IDay } from '../../types/IDay';
import { CalendarCell } from '../CalendarCell/CalendarCell';
import { EditingEventForm } from '../Forms/EditingEventForm/EditingEventForm';

import './CalendarGrid.scss';

export const CalendarGrid = () => {
  const selectedMonth = useAppSelector(state => state.calendar.selectedMonth);
  const userEvents = useAppSelector(state => state.calendar.userEvents);
  const editedEvent = useAppSelector(state => state.calendar.editedEvent);
  const daysListForCalendar = getDaysList(selectedMonth, userEvents);

  return (
    <ul className="calendarGrid">
      {
        editedEvent
        && (<EditingEventForm editedEvent={editedEvent} />)
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
