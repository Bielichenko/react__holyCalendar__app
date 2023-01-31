/* eslint-disable no-console */
import { IEvent } from '../../types/IEvent';

export function sortEventsByTime(dayEvents: IEvent[]) {
  const sortedEvents = dayEvents.sort((eventA, eventB) => {
    let sumMinutesA = Infinity;
    let sumMinutesB = Infinity;

    if (eventA.beginTime) {
      const [hoursA, minutesA] = eventA.beginTime.split(' ')[1].split(':');

      sumMinutesA = parseInt(hoursA, 10) * 60 + parseInt(minutesA, 10);
    }

    if (eventB.beginTime) {
      const [hoursB, minutesB] = eventB.beginTime.split(' ')[1].split(':');

      sumMinutesB = parseInt(hoursB, 10) * 60 + parseInt(minutesB, 10);
    }

    console.log(sumMinutesA, sumMinutesB, 'sumMinutesB');

    return sumMinutesA - sumMinutesB;
  });

  return sortedEvents;
}
