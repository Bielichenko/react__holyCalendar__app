import { getDateWithTimeString } from './getDateWithTimeString';

export function getDateString(dateObject: Date) {
  const fullDateWithTimeString = getDateWithTimeString(dateObject);
  const dateString = fullDateWithTimeString.split(' ')[0];

  return dateString;
}
