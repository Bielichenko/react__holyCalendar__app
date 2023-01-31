import { IDay } from '../../types/IDay';
import { IEvent } from '../../types/IEvent';
import { IMonth, IMonthSelected } from '../../types/IMonth';
import { makeDayObject } from './makeDateObject';

export function getDaysFromMonth(
  month: IMonth | IMonthSelected,
  kindOfMonth: string,
  needDayFromThisMonth: number,
  userEvents: IEvent[],
) {
  let startNumber = 1;
  let lastNumber = needDayFromThisMonth;
  let { year } = month;
  let isFromSelectedMonth = true;

  const daysFromMonth: IDay[] = [];

  if (kindOfMonth === 'previousMonth') {
    isFromSelectedMonth = false;
    startNumber = month.daysAmount - needDayFromThisMonth + 1;
    lastNumber = month.daysAmount;

    if (month.monthIndex === 11) {
      year -= 1;
    }
  }

  if (kindOfMonth === 'nextMonth') {
    isFromSelectedMonth = false;
    lastNumber = needDayFromThisMonth;

    if (month.monthIndex === 0) {
      year += 1;
    }
  }

  for (let i = startNumber; i <= lastNumber; i += 1) {
    const dayDate = new Date(year, +month.monthIndex, i);

    const dayObj = makeDayObject(dayDate, userEvents, isFromSelectedMonth);

    daysFromMonth.push(dayObj);
  }

  return daysFromMonth;
}
