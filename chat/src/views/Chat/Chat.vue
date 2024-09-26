<script setup lang="ts">
import Footer from "@/components/Footer/Footer.vue";
import Message from "./Message.vue";
import Room from "./Room.vue";

import DleftIcon from "@/assets/icons/d_left.svg?component";

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
      <label for="my-drawer"
        class="drawer-button rounded-tl-lg rounded-bl-lg rounded-none px-1 btn btn-sm absolute right-0 z-[1] shadow-none">
        <DleftIcon />
      </label>

      <div class="drawer w-0 drawer-end relative">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />

        <div class="drawer-content"></div>

        <div class="drawer-side absolute w-[240px] h-full ms-[-240px]">
         <Room/>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
/* 禁用单击、聚焦或悬停时的背景和字体颜色改变 */
.no-style-click > a:focus,
.no-style-click > a:active,
.no-style-click > a:hover {
  background-color: transparent !important; /* 禁止背景颜色改变 */
  box-shadow: none !important;             /* 禁止阴影效果 */
  color: inherit !important;               /* 保持原有字体颜色 */
}
</style>
