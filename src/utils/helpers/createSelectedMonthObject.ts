import { IDateFilter } from '../../types/IDateFilter';
import { IMonthSelected } from '../../types/IMonthSelected';
import { createMonthObject } from './createMonthObject';

export function createSelectedMonthObject(dateFilter: IDateFilter): IMonthSelected {
  const { year, monthIndex } = dateFilter;

  const selectedMonthDate = new Date(year, monthIndex + 1, 0);
  const prevMonthDate = new Date(year, monthIndex, 0);
  const nextMonthDate = new Date(year, monthIndex + 2, 0);

  const currentMonthObject = createMonthObject(selectedMonthDate);
  const prevMonthObject = createMonthObject(prevMonthDate);
  const futureMonthObject = createMonthObject(nextMonthDate);

  const selectedMonth = {
    ...currentMonthObject,
    prevMonth: prevMonthObject,
    nextMonth: futureMonthObject,
  };

  return selectedMonth;
}
