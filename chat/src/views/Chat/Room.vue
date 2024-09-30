<script setup lang="ts">
import { useChatStore } from "@/store/modules/chat";

import moreRoomIcon from "@/assets/icons/more_room.svg?component";
import renameIcon from "@/assets/icons/rename.svg?component";
import deleteIcon from "@/assets/icons/delete.svg?component";
import editIcon from "@/assets/icons/edit.svg?component";

const chatStore = useChatStore();
</script>

<template>
  <ul
    class="menu bg-base-100 border-[1px] border-base-300 h-full w-[240px] rounded-tl-box rounded-bl-box overflow-auto flex-nowrap"
  >
    <editIcon class="w-[18px] cursor-pointer" />
    <li v-if="chatStore.todayList.length" class="menu-title px-[0px] mt-[10px]">
      今天
    </li>
    <li v-for="item in chatStore.todayList" class="my-1">
      <a
        class="flex justify-between px-[10px]"
        :class="{ active: item.is_active }"
      >
        <p class="ellipsis">
          {{ item.name }}
        </p>
        <div class="dropdown dropdown-end">
          <div tabindex="1" role="button">
            <moreRoomIcon />
          </div>
          <ul
            tabindex="1"
            class="dropdown-content bg-base-100 rounded-box z-[1] w-max p-2 shadow"
          >
            <li>
              <a class="!text-error"> <deleteIcon class="w-[18px]" /> 删除 </a>
            </li>

            <li>
              <a class="text-base-content">
                <renameIcon class="w-[18px]" />重命名
              </a>
            </li>
          </ul>
        </div>
      </a>
    </li>

    <li v-if="chatStore.yesterdayList.length" class="menu-title px-[10px]">
      昨天
    </li>
    <li v-for="item in chatStore.yesterdayList" class="my-1">
      <a
        class="flex justify-between px-[10px]"
        :class="{ active: item.is_active }"
      >
        <p class="ellipsis">
          {{ item.name }}
        </p>
        <div class="dropdown dropdown-end">
          <div tabindex="1" role="button">
            <moreRoomIcon />
          </div>
          <ul
            tabindex="1"
            class="dropdown-content bg-base-100 rounded-box z-[1] w-max p-2 shadow"
          >
            <li>
              <a class="!text-error"> <deleteIcon class="w-[18px]" /> 删除 </a>
            </li>

            <li>
              <a class="text-base-content">
                <renameIcon class="w-[18px]" />重命名
              </a>
            </li>
          </ul>
        </div>
      </a>
    </li>

    <li v-if="chatStore.threeDayAgo.length" class="menu-title px-[10px]">
      三天前
    </li>
    <li v-for="item in chatStore.threeDayAgo" class="my-1">
      <a
        class="flex justify-between px-[10px]"
        :class="{ active: item.is_active }"
      >
        <p class="ellipsis">
          {{ item.name }}
        </p>
        <div class="dropdown dropdown-end">
          <div tabindex="1" role="button">
            <moreRoomIcon />
          </div>
          <ul
            tabindex="1"
            class="dropdown-content bg-base-100 rounded-box z-[1] w-max p-2 shadow"
          >
            <li>
              <a class="!text-error"> <deleteIcon class="w-[18px]" /> 删除 </a>
            </li>

            <li>
              <a class="text-base-content">
                <renameIcon class="w-[18px]" />重命名
              </a>
            </li>
          </ul>
        </div>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
