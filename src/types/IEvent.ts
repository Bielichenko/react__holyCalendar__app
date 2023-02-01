export interface IEvent {
  id: string;
  createdAt: string;
  createdAtFull: string;
  editedAt : string | null;
  editedAtFull : string | null;
  title: string;
  description: string;
  beginDate: string;
  beginTime:string;
  isDeleting: boolean;
}
