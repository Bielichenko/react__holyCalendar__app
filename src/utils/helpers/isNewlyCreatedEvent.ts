import { IEvent } from '../../types/IEvent';
import { getCurrentTime } from './getCurrentTime';

export function isNewlyCreatedEvent(event: IEvent) {
  const currentTime = getCurrentTime();

  return event.createdAtFull === currentTime;
}
