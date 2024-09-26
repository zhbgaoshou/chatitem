<script setup lang="ts">
import Footer from "@/components/Footer/Footer.vue";
import Message from "./Message.vue";

import DleftIcon from "@/assets/icons/d_left.svg?component";
import moreRoomIcon from "@/assets/icons/more_room.svg?component";
import renameIcon from "@/assets/icons/rename.svg?component";
import deleteIcon from "@/assets/icons/delete.svg?component";
</script>

<template>
  <div class="flex flex-col min-h-0 flex-1 justify-between">
    <div class="flex-1 min-h-0 flex">
      <div class="flex-1 relative overflow-auto px-[5px]">
        <Message />
        <!-- 生成中 -->
        <div class="chat chat-start">
          <div class="chat-bubble flex justify-center items-center">
            <span class="loading loading-dots loading-md"></span>
          </div>
        </div>
      </div>

      <!-- 会话记录 -->
      <label
        for="my-drawer"
        class="drawer-button rounded-tl-lg rounded-bl-lg rounded-none px-1 btn btn-sm absolute right-0 z-[1] shadow-none"
      >
        <DleftIcon />
      </label>

      <div class="drawer w-0 drawer-end relative">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />

        <div class="drawer-content"></div>

        <div class="drawer-side absolute w-[240px] h-full ms-[-240px]">
          <ul
            class="menu bg-base-200 h-full w-[240px] rounded-tl-box rounded-bl-box overflow-auto flex-nowrap"
          >
            <li class="menu-title px-[10px]">今天</li>
            <li v-for="i in 2" class="no-bg-click">
              <a
                class="flex justify-between px-[10px]"
                :class="{ active: i === 1 }"
              >
                <p>新会话{{ i }}</p>
                <div class="dropdown dropdown-end">
                  <div tabindex="1" role="button" class="btn btn-sm">
                    <moreRoomIcon />
                  </div>
                  <ul
                    tabindex="1"
                    class="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-2 shadow"
                  >
                    <li>
                      <a class="text-error"
                        ><deleteIcon class="w-[18px]" /> 删除</a
                      >
                    </li>

                    <li>
                      <a class="text-base-content">
                        <renameIcon class="w-[18px]" />重命名</a
                      >
                    </li>
                  </ul>
                </div>
              </a>
            </li>

            <li class="menu-title px-[10px]">昨天</li>
            <li v-for="i in 3" class="no-bg-click">
              <a class="flex justify-between px-[10px]">
                <p>新会话{{ i }}</p>
                <div class="dropdown dropdown-end">
                  <div tabindex="1" role="button" class="btn btn-sm">
                    <moreRoomIcon />
                  </div>
                  <ul
                    tabindex="1"
                    class="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-2 shadow"
                  >
                    <li>
                      <a class="text-error"
                        ><deleteIcon class="w-[18px]" /> 删除</a
                      >
                    </li>

                    <li>
                      <a class="text-base-content">
                        <renameIcon class="w-[18px]" />重命名</a
                      >
                    </li>
                  </ul>
                </div>
              </a>
            </li>

            <li class="menu-title px-[10px]">更早</li>
            <li v-for="i in 10" class="no-bg-click">
              <a class="flex justify-between px-[10px]">
                <p>新会话{{ i }}</p>
                <div class="dropdown dropdown-end">
                  <div tabindex="1" role="button" class="btn btn-sm">
                    <moreRoomIcon />
                  </div>
                  <ul
                    tabindex="1"
                    class="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-2 shadow"
                  >
                    <li>
                      <a class="text-error"
                        ><deleteIcon class="w-[18px]" /> 删除</a
                      >
                    </li>

                    <li>
                      <a class="text-base-content">
                        <renameIcon class="w-[18px]" />重命名</a
                      >
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style></style>
