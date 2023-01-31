import { getMonthNumberString } from './getMonthNumberString';

export function getFullDateString(date: Date) {
  const dayString = date.toString();
  const monthIndex = date.getMonth();
  const dayArray: (string)[] = dayString.split(' ');

  const [, , dayNumber, year, time] = dayArray;
  const monthNumberString = getMonthNumberString(monthIndex);

  const dateString = `${year}-${monthNumberString}-${dayNumber} ${time.slice(0, 5)}`;

  return dateString;
}
