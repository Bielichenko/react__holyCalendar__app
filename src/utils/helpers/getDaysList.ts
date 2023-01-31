/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/*eslint-disable*/
import { IDay } from '../../types/IDay';
import { IEvent } from '../../types/IEvent';
import { IMonth, IMonthRoot } from '../../types/IMonth';
import { getDaysFromMonth } from './getDaysFromMonth';

const daysAmountInCalendar = 42;

export function getDaysList(currMonth: IMonthRoot | null, userEvents: IEvent[]) {
  if (!currMonth) {
    return []
  }
  
  const daysFromCurrentMonth = getDaysFromMonth(
    currMonth,
    'currentMonth',
    +currMonth.daysAmount,
    userEvents,
  );

  const firstDayOfWeekOfCurrentMonth = +daysFromCurrentMonth[0].dayOfWeekNumber;
  // const lastDayOfWeekOfCurrentMonth
  //   = +daysFromCurrentMonth[daysFromCurrentMonth.length - 1].dayNumber;

  const daysFromPreviousMonth = getDaysFromMonth(
    currMonth.prevMonth,
    'previousMonth',
    firstDayOfWeekOfCurrentMonth - 1,
    userEvents,
  );

  const needDaysFromNextMonth = daysAmountInCalendar - daysFromCurrentMonth.length - daysFromPreviousMonth.length

  const daysFromNextMonth = getDaysFromMonth(
    currMonth.nextMonth,
    'nextMonth',
    needDaysFromNextMonth,
    userEvents,
  );

  const daysList = [...daysFromPreviousMonth, ...daysFromCurrentMonth, ...daysFromNextMonth];
  
  return daysList;
}
