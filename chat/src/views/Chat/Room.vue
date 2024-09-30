<script setup lang="ts">
import moreRoomIcon from "@/assets/icons/more_room.svg?component";
import renameIcon from "@/assets/icons/rename.svg?component";
import deleteIcon from "@/assets/icons/delete.svg?component";
</script>

<template>
  <ul
    class="menu bg-base-200 h-full w-[240px] rounded-tl-box rounded-bl-box overflow-auto flex-nowrap"
  >
    <li class="menu-title px-[10px] mt-[20px]">今天</li>
    <li v-for="i in 3" class="my-1">
      <a class="flex justify-between px-[10px]" :class="{ active: i === 1 }">
        <p class="ellipsis">
          新会话新会话新会话新会话新会话新会话新会话新会话新会话新会话新会话新会话新会话新会话{{
            i
          }}
        </p>
        <div class="dropdown dropdown-end">
          <div tabindex="1" role="button" class="btn btn-xs">
            <moreRoomIcon />
          </div>
          <ul
            tabindex="1"
            class="dropdown-content bg-base-100 rounded-box z-[1] w-max p-2 shadow"
          >
            <li>
              <a class="text-error"> <deleteIcon class="w-[18px]" /> 删除 </a>
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
