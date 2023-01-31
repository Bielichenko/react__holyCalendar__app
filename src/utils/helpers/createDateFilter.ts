import { getYearAndMonthFromDate } from './getYearAndMonthFromDate';

export function createDateFilter(year: number, monthIndex: number) {
  const date = new Date(year, monthIndex);
  const dateFilter = getYearAndMonthFromDate(date);

  return dateFilter;
}
