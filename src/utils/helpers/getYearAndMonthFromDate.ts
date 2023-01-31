export function getYearAndMonthFromDate(date: Date) {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();

  return { year, monthIndex };
}
