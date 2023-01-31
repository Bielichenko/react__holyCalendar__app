export interface IEvent {
  id: string;
  createdAt: string;
  editedAt : string | null;
  title: string;
  description: string;
  beginDate: string;
  beginTime:string;
}
