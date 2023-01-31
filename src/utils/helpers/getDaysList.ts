import { IEvent } from '../../types/IEvent';
import { IMonthSelected } from '../../types/IMonth';
import { getDaysFromMonth } from './getDaysFromMonth';

const daysAmountInCalendar = 42;

export function getDaysList(selectedMonth: IMonthSelected | null, userEvents: IEvent[]) {
  if (!selectedMonth) {
    return [];
  }

  const daysFromCurrentMonth = getDaysFromMonth(
    selectedMonth,
    'selectedMonth',
    selectedMonth.daysAmount,
    userEvents,
  );

  const firstDayOfWeekOfCurrentMonth = daysFromCurrentMonth[0].dayOfWeekNumber;
  const needDaysFromPrevMonth = firstDayOfWeekOfCurrentMonth - 1;

  const daysFromPreviousMonth = getDaysFromMonth(
    selectedMonth.prevMonth,
    'previousMonth',
    needDaysFromPrevMonth,
    userEvents,
  );

  const needDaysFromNextMonth
  = daysAmountInCalendar - daysFromCurrentMonth.length - daysFromPreviousMonth.length;

  const daysFromNextMonth = getDaysFromMonth(
    selectedMonth.nextMonth,
    'nextMonth',
    needDaysFromNextMonth,
    userEvents,
  );

  const daysList = [...daysFromPreviousMonth, ...daysFromCurrentMonth, ...daysFromNextMonth];

  return daysList;
}
