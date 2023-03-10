import { IDay } from '../../types/IDay';
import { createDayObject } from './createDayObject';

export function checkIsThisDayIsToday(day: IDay) {
  const todayDayDate = new Date();
  const todayDayObject = createDayObject(todayDayDate, []);
  const todayDateString = todayDayObject.dateString;
  const selectedDayDateString = day.dateString;

  return todayDateString === selectedDayDateString;
}
