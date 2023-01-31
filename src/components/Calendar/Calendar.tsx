/* eslint-disable padding-line-between-statements */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/*eslint-disable*/
import React, { useState } from 'react';
import { getDaysArray } from '../../utils/helpers/getDaysArray';
import { getDaysList } from '../../utils/helpers/getDaysList';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setEditingEvent } from '../../store/calendarSlice';
import { IDay } from '../../types/IDay';
import { CalendarCell } from '../CalendarCell/CalendarCell';
import { UpdateForm } from '../UpdateForm/UpdateForm';

import './Calendar.scss';

export const Calendar = () => {
  const currMonth = useAppSelector(state => state.calendar.currMonth)
  const userEvents = useAppSelector(state => state.calendar.userEvents)
  const editingEvent = useAppSelector (state => state.calendar.editingEvent)
  const dayList = getDaysList(currMonth, userEvents)

  return (
    <ul className="calendar">
      {
        editingEvent
        && (<UpdateForm editingEvent={editingEvent}/> )
      }
      {dayList.map((day: IDay) => {
        return (
          <li key={Math.random()} className="calendar__dayCell">
            <CalendarCell day={day} />
          </li>
        );
      })}
    </ul>
  );
};
