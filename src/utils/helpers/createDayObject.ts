import { IDay } from '../../types/IDay';
import { IEvent } from '../../types/IEvent';
import { getDateString } from './getDateString';
import { getDayOfWeekNumber } from './getDayOfWeekNumber';
import { getMonthNumberString } from './getMonthNumberString';

export function createDayObject(
  dayDate: Date,
  userEvents: IEvent[],
  isFromSelectedMonth : boolean | undefined = undefined,
): IDay {
  const year = dayDate.getFullYear();
  const dayNumber = dayDate.getDate();
  const monthIndex = dayDate.getMonth();
  const monthNumberString = getMonthNumberString(monthIndex);

  const dayDateString = dayDate.toString();
  const dayArray: string[] = dayDateString.split(' ');
  const [dayOfWeekName, monthName] = dayArray;
  const dayOfWeekNumber = getDayOfWeekNumber(dayOfWeekName);

  const dateString = getDateString(dayDate);
  const dayEvents = userEvents.filter((event: IEvent) => event.beginDate === dateString);

  const dayObject = {
    year,
    monthIndex,
    monthNumberString,
    monthName,
    dayNumber,
    dayOfWeekNumber,
    dayOfWeekName,
    dateString,
    dayEvents,
    isFromSelectedMonth,
  };

  return dayObject;
}
