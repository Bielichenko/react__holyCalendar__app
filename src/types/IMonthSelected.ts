export interface IMonthSelected {
  year: number,
  monthIndex: number,
  monthNumber: number,
  monthShortName: string,
  monthFullName: string,
  fullDate: string;
  fullDateReverse: string;
  dateWithMonthName: string;
  daysAmount: number,
  prevMonth: IMonth,
  nextMonth: IMonth,
}

export interface IMonth{
  year: number,
  monthIndex: number,
  monthNumber: number,
  monthShortName: string,
  monthFullName: string,
  fullDate: string;
  fullDateReverse: string;
  dateWithMonthName: string;
  daysAmount: number,
}
