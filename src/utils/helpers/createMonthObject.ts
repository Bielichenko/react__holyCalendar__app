/* eslint-disable @typescript-eslint/no-unused-vars */
import { IMonth } from '../../types/IMonth';
import { getMonthName } from './getMonthName';
import { getMonthNumberString } from './getMonthNumberString';

export function createMonthObject(date: Date): IMonth {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const monthNumber = monthIndex + 1;
  const monthNumberString = getMonthNumberString(monthIndex);
  const [monthShortName, monthFullName] = getMonthName(monthIndex);
  const daysAmount = date.getDate();
  const fullDate = `01/${monthNumberString}/${year}`;
  const fullDateReverse = `${year}-${monthNumberString}-01`;
  const dateWithMonthName = `${monthFullName} ${year}`;

  return {
    year,
    monthIndex,
    monthNumber,
    monthShortName,
    monthFullName,
    fullDate,
    fullDateReverse,
    dateWithMonthName,
    daysAmount,
  };
}

export {};
