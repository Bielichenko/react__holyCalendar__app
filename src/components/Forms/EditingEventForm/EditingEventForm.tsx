import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useDispatch } from 'react-redux';
import { getDateWithTimeString } from '../../../utils/helpers/getDateWithTimeString';
import { sendDataToServer } from '../../../utils/helpers/sendDataToServer';
import { useAppSelector } from '../../../hook';
import { setUserEvents, setEditedEvent } from '../../../store/calendarSlice';
import { IEvent } from '../../../types/IEvent';
import { getDateString } from '../../../utils/helpers/getDateString';
import { getCurrentTime } from '../../../utils/helpers/getCurrentTime';

import './EditingEventForm.scss';

interface props {
  editedEvent: IEvent
}

export const EditingEventForm: React.FC<props> = ({ editedEvent }) => {
  const dispatch = useDispatch();
  const userEvents = useAppSelector(state => state.calendar.userEvents);
  const [title, setTitle] = useState(editedEvent.title);
  const [description, setDescription] = useState(editedEvent.description);
  const [beginDate, setBeginDate] = useState(editedEvent.beginDate);
  const [beginTime, setBeginTime] = useState(editedEvent.beginTime);

  useEffect(() => {
    setTitle(editedEvent.title);
    setDescription(editedEvent.description);
    setBeginDate(editedEvent.beginDate);
    setBeginTime(editedEvent.beginTime);
  }, [editedEvent]);

  const closeForm = () => {
    dispatch(setEditedEvent(null));
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const dateString = getDateWithTimeString(new Date());
    const editedAtFullTime = getCurrentTime();

    const updatedEvent: IEvent = {
      ...editedEvent,
      title,
      description,
      editedAt: dateString,
      editedAtFull: editedAtFullTime,
      beginDate,
      beginTime,
    };

    const notEditedEvents = userEvents
      .filter(userEvent => userEvent.id !== editedEvent.id);

    const updatedEvents: IEvent[] = [...notEditedEvents, updatedEvent];

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
  const timePickerHandler = (date: any) => {
    if (date) {
      const beginTimeString = getDateWithTimeString(date.$d);

      setBeginTime(beginTimeString);
    }
  };

  const deleteEvent = () => {
    const updatedEvents = userEvents.filter(event => event.id !== editedEvent.id);

    dispatch(setUserEvents(updatedEvents));
    sendDataToServer(updatedEvents);

    closeForm();
  };

  return (
    <form className="editingEventForm" onSubmit={handleSubmit}>
      <div className="editingEventForm__header">
        <div className="editingEventForm__buttons">
          <div
            className="editingEventForm__bin"
            onClick={() => deleteEvent()}
            onKeyUp={() => deleteEvent()}
            tabIndex={0}
            role="button"
          >
          </div>
          <div
            className="editingEventForm__close"
            onClick={() => closeForm()}
            onKeyUp={() => closeForm()}
            tabIndex={0}
            role="button"
          >
          </div>
        </div>
        <h2 className="editingEventForm__formTitle">
          Edit event
        </h2>
        <p className="editingEventForm__createdAt">
          Created at:&nbsp;
          {editedEvent.createdAt}
        </p>
        {
          editedEvent.editedAt
        && (
          <p className="editingEventForm__updatedAt">
            Last updated at:&nbsp;
            {editedEvent.editedAt}
          </p>
        )
        }
      </div>
      <div className="editingEventForm__main">
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
                onChange={timePickerHandler}
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
