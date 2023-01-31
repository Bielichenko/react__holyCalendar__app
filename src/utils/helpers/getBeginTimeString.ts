/* eslint-disable no-console */
export function getBeginTimeString(
  dateObject: any,
) {
  const dateString = dateObject.toString();
  const [, , date, year, time] = dateString.split(' ');
  const monthNumber = +dateObject.getMonth() + 1;

  const beginTimeString = `${year}-${monthNumber}-${date} ${time.slice(0, 5)}`;

  return beginTimeString;
}
