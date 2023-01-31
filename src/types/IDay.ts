import { IEvent } from './IEvent';

export interface IDay {
  year: number;
  monthIndex: number;
  monthName: string;
  dayNumber: number;
  dayOfWeekNumber: number;
  dayOfWeekName: string;
  dateString: string;
  dayEvents: IEvent[];
  isFromSelectedMonth: boolean | undefined;
}
