<script setup lang="ts">
import ContactIcon from "@/assets/icons/contact.svg?component";
import MessageIcon from "@/assets/icons/message.svg?component";
import ChatIcon from "@/assets/icons/chat.svg?component";

const sidebarList = [
  { icon: ContactIcon, text: "联系我" },
  { icon: MessageIcon, text: "反馈BUG" },
];
</script>
<template>
  <ul
    class="menu bg-base-100 !m-0 flex flex-col h-full border-r-[1px] border-base-300"
  >
    <!-- Sidebar content here -->
    <li>
      <a v-for="item in sidebarList">
        <component :is="item.icon" class="w-[16px]" />
        {{ item.text }}
      </a>
    </li>
    <div class="divider">功能</div>

    <li>
      <a>
        <component :is="ChatIcon" class="w-[16px]" />
        CHATGPT
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
