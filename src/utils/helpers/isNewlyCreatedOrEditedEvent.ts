import { IEvent } from '../../types/IEvent';
import { getCurrentTime } from './getCurrentTime';

export function isNewlyCreatedOrEditedEvent(event: IEvent) {
  const currentTime = getCurrentTime();

  if (event.createdAtFull === currentTime) {
    return true;
  }

  if (event.editedAtFull === currentTime) {
    return true;
  }

  return false;
}
