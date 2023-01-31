import { IEvent } from '../../types/IEvent';

export function sendDataToServer(updatedEvents: IEvent[]) {
  localStorage.setItem('events', JSON.stringify(updatedEvents));
}
