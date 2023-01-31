import { getYearAndMonthFromDate } from './getYearAndMonthFromDate';

export function getInitialDateFilter() {
  const todayDate = new Date();
  const todayYearAndMonth = getYearAndMonthFromDate(todayDate);

  return todayYearAndMonth;
}
