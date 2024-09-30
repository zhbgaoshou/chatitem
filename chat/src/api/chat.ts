import http from "@/utils/http";
import { IHistoryRecord, IRoomInfo } from "@/types/chat";

export const getRoomListApi = () =>
  http.get<any, IHistoryRecord>(`/chat/rooms/categorized/`);

export const getDefaultRoomApi = () =>
  http.get<any, IRoomInfo[]>(`/chat/rooms/?is_active=${true}`);
