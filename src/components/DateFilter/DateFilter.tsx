/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';

import dayjs, { Dayjs } from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { MonthPicker } from '@mui/x-date-pickers/MonthPicker';
import { YearPicker } from '@mui/x-date-pickers/YearPicker';

import { createCurrMonthObject } from '../../utils/helpers/createCurrMonthObject';
import { setDateFilterToLS } from '../../utils/helpers/setDateFilterToLS';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setCurrMonth, setDateFilter } from '../../store/calendarSlice';
import { IDateFilter } from '../../types/IDateFilter';
import { IMonthRoot } from '../../types/IMonth';
import arrowGrey from '../../images/arrowGrey.png';
import arrowWhite from '../../images/arrowWhite.png';

import './DateFilter.scss';
import { createDateFilter } from '../../utils/helpers/createDateFilter';

export const DateFilter = () => {
  const dispatch = useAppDispatch();
  const dateFilter = useAppSelector(state => state.calendar.dateFilter);
  const selectedMonth = useAppSelector(state => state.calendar.currMonth);

  const initialValueForDatePicker = selectedMonth ? selectedMonth.fullDateReverse : null;
  const [datePicker, setDatePicker] = useState<Dayjs | null>(dayjs(initialValueForDatePicker));
  const [isDatePicker, setIsDatePicker] = useState(false);
  const minDate = dayjs('2020-01-01T00:00:00.000');
  const maxDate = dayjs('2034-01-01T00:00:00.000');

  useEffect(() => {
    if (dateFilter) {
      const newSelectedMonth = createCurrMonthObject(dateFilter);

      setDatePicker(dayjs(newSelectedMonth.fullDateReverse));
      dispatch(setCurrMonth(newSelectedMonth));
    }
  }, [dateFilter]);

  const next = () => {
    if (dateFilter) {
      const selectedMonthIndex = dateFilter.monthIndex;
      const selectedYear = dateFilter.year;

      const updatedDateFilter = createDateFilter(selectedYear, selectedMonthIndex + 1);

      dispatch(setDateFilter(updatedDateFilter));
      setDateFilterToLS(updatedDateFilter);
    }
  };

  const prev = () => {
    if (dateFilter) {
      const selectedMonthIndex = dateFilter.monthIndex;
      const selectedYear = dateFilter.year;

      const updatedDateFilter = createDateFilter(selectedYear, selectedMonthIndex - 1);

      dispatch(setDateFilter(updatedDateFilter));
      setDateFilterToLS(updatedDateFilter);
    }
  };

  const datePickerHandler = (newDate: any) => {
    if (newDate) {
      const year = newDate.year();
      const month = newDate.month();

      const updatedDateFilter = createDateFilter(year, month);

      setDatePicker(newDate);
      dispatch(setDateFilter(updatedDateFilter));
      setDateFilterToLS(updatedDateFilter);
    }
  };

  return (
    selectedMonth && (
      <div className="dateFilter">
        <div
          className="dateFilter__arrow dateFilter__arrow--left"
          onClick={() => prev()}
          onKeyUp={() => prev()}
          tabIndex={0}
          role="button"
        >
        </div>
        <p className="dateFilter__selectedDate">{selectedMonth.dateWithMonthName}</p>
        <div
          className="dateFilter__arrow dateFilter__arrow--right"
          onClick={() => next()}
          onKeyUp={() => next()}
          tabIndex={0}
          role="button"
        >
        </div>
        <div
          className="dateFilter__calendarImage"
          onClick={() => setIsDatePicker(!isDatePicker)}
          onKeyUp={() => setIsDatePicker(!isDatePicker)}
          tabIndex={0}
          role="button"
        >
        </div>
        <div className="dateFilter__datePicker">
          {isDatePicker && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MonthPicker
                    date={datePicker}
                    minDate={minDate}
                    maxDate={maxDate}
                    onChange={(newDate) => datePickerHandler(newDate)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <YearPicker
                    date={datePicker}
                    minDate={minDate}
                    maxDate={maxDate}
                    onChange={(newDate) => datePickerHandler(newDate)}
                  />
                </Grid>
              </Grid>
            </LocalizationProvider>
          )}
        </div>
      </div>
    )
  );
};
