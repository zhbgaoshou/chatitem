<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useChatStore } from "@/store/modules/chat";
import Footer from "@/components/Footer/Footer.vue";
import Message from "./Message.vue";
import Room from "./Room.vue";
import DleftIcon from "@/assets/icons/d_left.svg?component";
import DrIcon from "@/assets/icons/d_r.svg?component";

const chatStore = useChatStore();

onMounted(() => {
  chatStore.getRoomList();
});

let isOpen = ref(false);
const openRoom = () => {
  isOpen.value = !isOpen.value;
};
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
        @click="openRoom"
        for="my-drawer"
        class="drawer-button bg-base-100 no-animation rounded-tl-[2px] rounded-bl-[2px] rounded-none px-1 btn btn-sm absolute right-0 z-[1] shadow-none"
      >
        <component :is="isOpen ? DrIcon : DleftIcon"></component>
      </label>

      <div class="drawer w-0 drawer-end relative">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />

        <div class="drawer-content"></div>

        <div class="drawer-side absolute w-[240px] h-full ms-[-240px]">
          <Room />
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
  box-shadow: none !important; /* 禁止阴影效果 */
  color: inherit !important; /* 保持原有字体颜色 */
}
</style>
