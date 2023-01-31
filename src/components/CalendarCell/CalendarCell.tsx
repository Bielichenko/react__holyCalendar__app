import React from 'react';
import cn from 'classnames';
import { checkIsThisDayIsToday } from '../../utils/helpers/checkIsThisDayIsToday';
import { sortEventsByTime } from '../../utils/helpers/sortEventsByTime';
import { IDay } from '../../types/IDay';
import { IEvent } from '../../types/IEvent';

import './CalendarCell.scss';
import { useAppDispatch } from '../../hook';
import { setEditingEvent, setIsAddingEvent } from '../../store/calendarSlice';

interface props {
  day: IDay;
}

export const CalendarCell: React.FC<props> = ({ day }) => {
  const dispatch = useAppDispatch();
  const isThisDayIsToday = checkIsThisDayIsToday(day);
  // const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

  const eventSelectionHandler = (event : IEvent) => {
    dispatch(setIsAddingEvent(false));
    dispatch(setEditingEvent(event));
  };

  const sortedDayEvents = sortEventsByTime(day.dayEvents);

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
        <p className="dayCell__dayOfWeek">{day.dayOfWeek}</p>
      </header>
      <main className="dayCell__main">
        {sortedDayEvents.map((event: IEvent) => {
          return (
            <div
              key={Math.random()}
              className={cn(
                'dayCell__eventTitle',
                { 'dayCell__eventTitle--notActual': !day.isFromSelectedMonth },
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
