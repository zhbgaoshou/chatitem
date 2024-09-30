import { defineStore } from "pinia";
import { ref, computed, ComputedRef } from "vue";
import { IHistoryRecord, IRoomInfo } from "@/types/chat";

import { getRoomListApi, getDefaultRoomApi } from "@/api/chat";

export const useChatStore = defineStore("chat", () => {
  const roomList = ref<IHistoryRecord>({} as any);
  const activeRoom = ref<IRoomInfo | null>(null);

  const todayList: ComputedRef<IRoomInfo[] | []> = computed(() => {
    return roomList.value.today?.data.length ? roomList.value.today.data : [];
  });

  const yesterdayList: ComputedRef<IRoomInfo[] | []> = computed(() => {
    return roomList.value.yesterday?.data.length
      ? roomList.value.yesterday.data
      : [];
  });

  const threeDayAgo: ComputedRef<IRoomInfo[] | []> = computed(() => {
    return roomList.value.three_days_ago?.data.length
      ? roomList.value.three_days_ago.data
      : [];
  });

  const activeRoomId = computed(() => {
    return activeRoom.value?.id;
  });

  const getRoomList = async () => {
    const res = await getRoomListApi();
    const defaultRoom = await getDefaultRoomApi();
    roomList.value = res;
    activeRoom.value = defaultRoom[0];
  };

  return {
    roomList,
    getRoomList,
    todayList,
    yesterdayList,
    threeDayAgo,
    activeRoom,
    activeRoomId,
  };
});
