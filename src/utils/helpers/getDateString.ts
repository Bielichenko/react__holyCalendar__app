import { getFullDateString } from './getFullDateString';

export function getDateString(dateObject: Date) {
  const fullDateWithTimeString = getFullDateString(dateObject);
  const dateString = fullDateWithTimeString.split(' ')[0];

  return dateString;
}
