/*eslint-disable*/

export function getMonthArray(date: Date) {
  const dateString = date.toString();

  const dateArray = dateString.split(' ');
  const monthIndex = date.getMonth().toFixed();

  dateArray.unshift(monthIndex)

  return dateArray;
}
