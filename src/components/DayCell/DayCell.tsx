import React from 'react';
import cn from 'classnames';
import { checkIsThisDayIsToday } from '../../utils/helpers/checkIsThisDayIsToday';
import { sortEventsByTime } from '../../utils/helpers/sortEventsByTime';
import { IDay } from '../../types/IDay';
import { IEvent } from '../../types/IEvent';
import { useAppDispatch } from '../../hook';
import { setEditedEvent, setIsCreatingEvent } from '../../store/calendarSlice';
import { isNewlyCreatedEvent } from '../../utils/helpers/isNewlyCreatedEvent';

import './DayCell.scss';

interface props {
  day: IDay;
}

export const DayCell: React.FC<props> = ({ day }) => {
  const dispatch = useAppDispatch();

  const isThisDayIsToday = checkIsThisDayIsToday(day);
  const sortedDayEvents = sortEventsByTime(day.dayEvents);

  const eventSelectionHandler = (event : IEvent) => {
    dispatch(setIsCreatingEvent(false));
    dispatch(setEditedEvent(event));
  };

  return (
    <div className={cn(
      'dayCell',
      { 'dayCell--current': isThisDayIsToday },
      { 'dayCell--notActual': !day.isFromSelectedMonth },
      { 'dayCell--current--notActual': !day.isFromSelectedMonth && isThisDayIsToday },
    )}
    >
      <header className="dayCell__header">
        <p className="dayCell__date">{day.dayNumber}</p>
        <p className="dayCell__dayOfWeek">{day.dayOfWeekName}</p>
      </header>
      <main className="dayCell__main">
        {sortedDayEvents.map((event: IEvent) => {
          return (

            <div
              key={event.id}
              className={cn(
                'dayCell__eventTitle',
                { 'dayCell__eventTitle--new': isNewlyCreatedEvent(event) },
                { 'dayCell__eventTitle--notActual': !day.isFromSelectedMonth },
                {
                  'dayCell__eventTitle--notActual--new':
                  isNewlyCreatedEvent(event) && !day.isFromSelectedMonth,
                },
              )}
              onClick={() => eventSelectionHandler(event)}
              onKeyDown={() => eventSelectionHandler(event)}
              role="button"
              tabIndex={0}
            >
              {event.title}
            </div>
          );
        })}
      </main>
    </div>
  );
};
