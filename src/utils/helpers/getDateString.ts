/* eslint-disable no-console */
import { getMonthNumberString } from './getMonthNumberString';

export function getDateString(date: Date) {
  const dayString = date.toString();
  const monthIndex = date.getMonth();
  const dayArray: (string)[] = dayString.split(' ');

  console.log(dayArray, 'dayArray');

  const [, , dayNumber, year, time] = dayArray;
  const monthNumberString = getMonthNumberString(monthIndex);

  const dateString = `${year}-${monthNumberString}-${dayNumber} ${time.slice(0, 5)}`;

  return dateString;
}
