/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from '@mui/material/Button';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch } from 'react-redux';
import { getDateString } from '../../utils/helpers/getDateString';
import { getTimeString } from '../../utils/helpers/getTimeString';
import { sendDataToServer } from '../../utils/helpers/sendDataToServer';
import { useAppSelector } from '../../hook';
import { setUserEvents, setEditingEvent } from '../../store/calendarSlice';
import { IEvent } from '../../types/IEvent';

import './UpdateForm.scss';
import { getBeginTimeString } from '../../utils/helpers/getBeginTimeString';

interface props {
  editingEvent: IEvent
}

export const UpdateForm: React.FC<props> = ({ editingEvent }) => {
  const dispatch = useDispatch();
  const usersEvent = useAppSelector(state => state.calendar.userEvents);
  const [title, setTitle] = useState(editingEvent.title);
  const [description, setDescription] = useState(editingEvent.description);
  const [beginDate, setBeginDate] = useState<any>(editingEvent.beginDate);
  const [beginTime, setBeginTime] = useState(editingEvent.beginTime);

  useEffect(() => {
    setTitle(editingEvent.title);
    setDescription(editingEvent.description);
    setBeginDate(editingEvent.beginDate);
    setBeginTime(editingEvent.beginTime);
  }, [editingEvent]);

  const closeEvent = () => {
    dispatch(setEditingEvent(null));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const dateString = getDateString(new Date());

    const updatedEvent: IEvent = {
      ...editingEvent,
      title,
      description,
      editedAt: dateString,
      beginDate,
      beginTime,
    };

    const notUpdatedEvents = usersEvent
      .filter(eventFromStorage => eventFromStorage.id !== editingEvent?.id);

    const updatedEvents: IEvent[] = [...notUpdatedEvents, updatedEvent];

    dispatch(setUserEvents(updatedEvents));
    sendDataToServer(updatedEvents);

    closeEvent();
  };

  const datePickerHandler = (date: any) => {
    const beginDateString = getDateString(date.$d);

    setBeginDate(beginDateString);
  };

  const dateTimeHandler = (time: any) => {
    const beginTimeString = getBeginTimeString(time.$d);

    setBeginTime(beginTimeString);
  };

  const deleteEvent = () => {
    const updatedEvents = usersEvent.filter(event => event.id !== editingEvent.id);

    dispatch(setUserEvents(updatedEvents));

    closeEvent();
  };

  return (
    <form className="editEventForm" onSubmit={handleSubmit}>
      <div className="editEventForm__header">
        <div className="editEventForm__buttons">
          <div
            className="editEventForm__bin"
            onClick={() => deleteEvent()}
            onKeyUp={() => deleteEvent()}
            tabIndex={0}
            role="button"
          >

          </div>
          <div
            className="editEventForm__close"
            onClick={() => closeEvent()}
            onKeyUp={() => closeEvent()}
            tabIndex={0}
            role="button"
          >
          </div>
        </div>
        <h2 className="editEventForm__formTitle">
          Edit event
        </h2>
        <p className="editEventForm__createdAt">
          Created at:&nbsp;
          {editingEvent.createdAt}
        </p>
        {
          editingEvent.editedAt
        && (
          <p className="editEventForm__updatedAt">
            Last updated at:&nbsp;
            {editingEvent?.editedAt}
          </p>
        )
        }
      </div>
      <div className="editEventForm__main">
        <Stack direction="column" spacing={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={1}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                required
                color="secondary"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                multiline
                color="secondary"
                value={description}
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
