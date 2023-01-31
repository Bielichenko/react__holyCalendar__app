export function getMonthNumberString(monthIndex : number) {
  const monthNumber = (monthIndex + 1).toFixed();

  if (monthNumber.length > 1) {
    return monthNumber;
  }

  return `0${monthNumber}`;
}
