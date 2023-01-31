/*eslint-disable*/

import { IEvent } from '../../types/IEvent';
// import { getCurrentDate } from './getCurrentDate';
import { getDateString } from './getFullDateString';
import { getDayOfWeekNumber } from './getDayOfWeekNumber';
import { getMonthNumberString } from './getMonthNumberString';

export function makeDayObject(
  dayDate: Date, 
  userEvents: IEvent[],
  isFromSelectedMonth : boolean | undefined = undefined ,
  ) {
  const dayString = dayDate.toString();
  const dayArray: (string|number)[] = dayString.split(' ');
  const monthIndex = dayDate.getMonth();
  const [dayOfWeek, monthName, dayNumber, year] = dayArray;
  const monthNumberString = getMonthNumberString(monthIndex);
  const dayOfWeekNumber = getDayOfWeekNumber(dayOfWeek);

  const dateString = getDateString(dayDate);
  const dayEvents = userEvents.filter((event: IEvent) => event.beginDate === dateString);

  const dayObj = {
    year,
    monthIndex,
    monthNumberString,
    monthName,
    dayNumber,
    dayOfWeekNumber,
    dayOfWeek,
    dateString,
    dayEvents,
    isFromSelectedMonth,
  };

  return dayObj;
}
