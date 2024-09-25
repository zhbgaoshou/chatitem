<script setup lang="ts">
import Footer from "@/components/Footer/Footer.vue";
import Message from "./Message.vue";

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
      <label for="my-drawer" class="drawer-button rounded-tl-lg rounded-bl-lg rounded-none px-1  btn  btn-sm absolute right-0 z-[1]">
        <DleftIcon />
      </label>

      <div class="drawer w-0 drawer-end relative">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />

        <div class="drawer-content"></div>

        <div class="drawer-side absolute w-[180px] h-full ms-[-180px]">
          <ul class="menu bg-base-200 h-full w-[160px] rounded-tl-box rounded-bl-box">
            <li class="menu-title">今天</li>
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>

            <li class="menu-title">昨天</li>
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
