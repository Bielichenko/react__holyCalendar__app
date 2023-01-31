import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setEditedEvent, setIsCreatingEvent } from '../../store/calendarSlice';
import { CreatingEventForm } from '../Forms/CreatingEventForm/CreatingEventForm';

import './CreatingEventButton.scss';

export const CreatingEventButton = () => {
  const dispatch = useAppDispatch();
  const isCreatingEvent = useAppSelector(state => state.calendar.isCreatingEvent);

  const startCreatingNewEvent = () => {
    dispatch(setEditedEvent(null));
    dispatch(setIsCreatingEvent(true));
  };

  return (
    <div className="creatingEventButton">
      <button
        className="creatingEventButton__plusButton"
        onClick={() => startCreatingNewEvent()}
        onKeyDown={() => startCreatingNewEvent()}
        tabIndex={0}
        type="button"
      >
        +
      </button>
      {isCreatingEvent && <CreatingEventForm />}
    </div>

  );
};
