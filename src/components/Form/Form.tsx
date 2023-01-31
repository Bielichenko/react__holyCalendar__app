/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { SxProps } from '@mui/material';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { getCurrentDate } from '../../helpers/getCurrentDate';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from '@mui/material/Button';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import { getDateString } from '../../utils/helpers/getDateString';
import { makeDayObject } from '../../utils/helpers/makeDateObject';
import { sendDataToServer } from '../../utils/helpers/sendDataToServer';
import { useAppSelector } from '../../hook';
import { setIsAddingEvent, setUserEvents } from '../../store/calendarSlice';
import { IEvent } from '../../types/IEvent';

import './Form.scss';
import { getTimeString } from '../../utils/helpers/getTimeString';
import { getBeginTimeString } from '../../utils/helpers/getBeginTimeString';

export const Form = () => {
  const dispatch = useDispatch();
  const userEvents = useAppSelector(state => state.calendar.userEvents);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [beginDate, setBeginDate] = useState<any>('');
  const [beginTime, setBeginTime] = useState<string>('');

  const closeForm = () => {
    dispatch(setIsAddingEvent(false));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const uniqueId = `id${Math.random().toString(16).slice(2)}`;
    const dateString = getDateString(new Date());

    const newEvent = {
      id: uniqueId,
      title,
      description,
      createdAt: dateString,
      beginDate,
      beginTime,
    };

    const updatedEvents: IEvent[] = [...userEvents, newEvent];

    dispatch(setUserEvents(updatedEvents));
    sendDataToServer(updatedEvents);

    closeForm();
  };

  const datePickerHandler = (date: any) => {
    const beginDateString = getDateString(date.$d);

    setBeginDate(beginDateString);
  };

  const dateTimeHandler = (time: any) => {
    const beginTimeString = getBeginTimeString(time.$d);

    setBeginTime(beginTimeString);
  };

  return (
    <form className="newEventForm" onSubmit={handleSubmit}>
      <div className="newEventForm__header">
        <div
          className="newEventForm__close"
          onClick={() => closeForm()}
          onKeyUp={() => closeForm()}
          tabIndex={0}
          role="button"
        >
        </div>
        <h2 className="newEventForm__formTitle">
          Add new event
        </h2>
      </div>
      <div className="newEventForm__main">
        <Stack direction="column" spacing={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={1}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                color="secondary"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                color="secondary"
                multiline
                onChange={(e) => setDescription(e.target.value)}
              />
              <DesktopDatePicker
                label="Date"
                inputFormat="DD/MM/YYYY"
                value={beginDate}
                onChange={datePickerHandler}
                renderInput={(inputProps) => (
                  <TextField
                    {...inputProps}
                    required
                    error={false}
                    color="secondary"
                  // sx={{
                  //   svg: { color: 'green' },
                  // }}
                  />
                )}
              />
              <TimePicker
                label="Time"
                value={beginTime}
                onChange={dateTimeHandler}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={false}
                    color="secondary"
                  // sx={{
                  //   svg: { color: 'black' },
                  // }}
                  />
                )}
              />
            </Stack>
          </LocalizationProvider>
          <Button variant="contained" color="secondary" type="submit">
            Save
          </Button>
        </Stack>
      </div>
    </form>
  );
};
