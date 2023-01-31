export function getDaysArray(daysNumber: number) {
  const daysArray: number[] = [];

  for (let i = 1; i <= daysNumber; i += 1) {
    daysArray.push(i);
  }

  return daysArray;
}
