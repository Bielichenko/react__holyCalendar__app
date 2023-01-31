/*eslint-disable*/

import { IDateFilter } from '../../types/IDateFilter';
import { IMonthRoot } from '../../types/IMonth';
import { createMonthObject } from './createMonthObject';

export function createCurrMonthObject(
dateFilter: IDateFilter
): IMonthRoot {
  const {year,monthIndex} = dateFilter;

  const currentMonthDate = new Date(year, monthIndex + 1, 0);
  const prevMonthDate = new Date(year, monthIndex, 0);
  const futureMonthDate = new Date(year, monthIndex + 2, 0);

  const currentMonthObject = createMonthObject(currentMonthDate);
  const prevMonthObject = createMonthObject(prevMonthDate);
  const futureMonthObject = createMonthObject(futureMonthDate);

  const selectedMonth = {
    ...currentMonthObject,
    prevMonth: prevMonthObject,
    nextMonth: futureMonthObject,
  };
  
  return selectedMonth
}
