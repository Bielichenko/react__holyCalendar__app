import { IEvent } from './IEvent';

export interface IDay {
  year: number | string;
  monthIndex: number | string;
  monthName: number | string;
  dayNumber: number | string;
  dayOfWeekNumber: number | string;
  dayOfWeek: number | string;
  dateString: string;
  dayEvents: IEvent[];
  isFromSelectedMonth: boolean | undefined;
}
