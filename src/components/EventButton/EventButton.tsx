/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setEditingEvent, setIsAddingEvent } from '../../store/calendarSlice';
import { Form } from '../Form/Form';

import './EventButton.scss';

export const EventButton = () => {
  const dispatch = useAppDispatch();
  const isAddingEvent = useAppSelector(state => state.calendar.isAddingEvent);

  const startAdditingNewEvent = () => {
    dispatch(setEditingEvent(null));
    dispatch(setIsAddingEvent(true));
  };

  return (
    <div className="eventAdderButton">
      {/* <img src={plusImage} alt="img" className="eventAdderButton__plus" /> */}
      <button
        className="eventAdderButton__plus"
        onClick={() => startAdditingNewEvent()}
        onKeyDown={() => startAdditingNewEvent()}
        tabIndex={0}
        type="button"
      >
        +
      </button>

      {
        isAddingEvent
        && <Form />
      }
    </div>

  );
};
