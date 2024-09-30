// room list
export interface IRoomListResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T;
}

// room
export interface IRoomInfo {
  id: number;
  created_at?: string;
  updated_at?: string;
  name?: string;
  is_active?: boolean;
  is_attachment?: boolean;
  user?: number;
}

interface IRecordGroup {
  date: string;
  data: IRoomInfo[];
}

interface IHistoryRecord {
  today: IRecordGroup;
  yesterday: IRecordGroup;
  three_days_ago: IRecordGroup;
}
