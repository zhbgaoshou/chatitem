<script setup lang="ts">
import FolderIcon from "@/assets/icons/folder.svg?component";
import SendIcon from "@/assets/icons/send.svg?component";

import { ref } from "vue";

const textarea = ref("");
</script>

<template>
  <form @submit="(e) => e.preventDefault()" class="join p-3">
    <textarea
      v-model="textarea"
      class="textarea rounded-l-full bg-base-200 textarea-bordered w-full resize-none !outline-0 border-none join-item h-0"
      placeholder="想问点什么..."
    >
    </textarea>
    <button class="btn btn-circle join-item rounded-r-full shadow-none w-[64px]">
      <SendIcon class="w-[25px]" />
    </button>
  </form>
</template>
