export interface IEvent {
  id: string;
  year: number;
  monthIndex: number;
  monthNumber: number;
  day: string
  createdAt: string;
  editedAt?: string;
  title: string;
  description?: string;
  beginDate: string;
  beginTime? :string;
}
