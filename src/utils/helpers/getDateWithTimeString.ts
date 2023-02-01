import { getMonthNumberString } from './getMonthNumberString';

export function getDateWithTimeString(date: Date) {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const dayNumber = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const monthNumberString = getMonthNumberString(monthIndex);

  const dateString = `${year}-${monthNumberString}-${dayNumber} ${hours}:${minutes}`;

  return dateString;
}
