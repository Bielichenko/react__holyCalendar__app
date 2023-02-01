import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { getFullDateString } from '../../../utils/helpers/getFullDateString';
import { sendDataToServer } from '../../../utils/helpers/sendDataToServer';
import { useAppSelector } from '../../../hook';
import { IEvent } from '../../../types/IEvent';
import { setIsCreatingEvent, setUserEvents } from '../../../store/calendarSlice';

import './CreatingEventForm.scss';
import { getDateString } from '../../../utils/helpers/getDateString';

export const CreatingEventForm = () => {
  const dispatch = useDispatch();
  const userEvents = useAppSelector(state => state.calendar.userEvents);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [beginDate, setBeginDate] = useState<string>('');
  const [beginTime, setBeginTime] = useState<string>('');

  const closeForm = () => {
    dispatch(setIsCreatingEvent(false));
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const uniqueId = `id${Math.random().toString(16).slice(2)}`;
    const fullDateString = getFullDateString(new Date());

    const newEvent = {
      id: uniqueId,
      title,
      description,
      createdAt: fullDateString,
      beginDate,
      beginTime,
      editedAt: null,
    };

    const updatedEvents: IEvent[] = [...userEvents, newEvent];

    dispatch(setUserEvents(updatedEvents));
    sendDataToServer(updatedEvents);

    closeForm();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const datePickerHandler = (date: any) => {
    if (date) {
      const beginDateString = getDateString(date.$d);

      setBeginDate(beginDateString);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dateTimeHandler = (date: any) => {
    if (date) {
      const beginTimeString = getFullDateString(date.$d);

      setBeginTime(beginTimeString);
    }
  };

  return (
    <form className="creatingEventForm" onSubmit={handleSubmit}>
      <div className="creatingEventForm__header">
        <div
          className="creatingEventForm__closeButton"
          onClick={() => closeForm()}
          onKeyUp={() => closeForm()}
          tabIndex={0}
          role="button"
        >
        </div>
        <h2 className="creatingEventForm__formTitle">
          Add new event
        </h2>
      </div>
      <div className="creatingEventForm__main">
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
