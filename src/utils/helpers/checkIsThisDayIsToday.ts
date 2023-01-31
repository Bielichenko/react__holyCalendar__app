import { IDay } from '../../types/IDay';
import { makeDayObject } from './makeDateObject';

export function checkIsThisDayIsToday(day: IDay) {
  const todayDayDate = new Date();
  const todayDayObject = makeDayObject(todayDayDate, []);
  const todayDateString = todayDayObject.dateString.split(' ')[0];
  const selectedDayDateString = day.dateString.split(' ')[0];

  return todayDateString === selectedDayDateString;
}
