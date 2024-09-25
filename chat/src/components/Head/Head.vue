<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

// icons import
import DownIcon from "@/assets/icons/down.svg?component";
import EditIcon from "@/assets/icons/edit.svg?component";
import LogoutIcon from "@/assets/icons/logout.svg?component";
import SettingIcon from "@/assets/icons/setting.svg?component";
import LoginIcon from "@/assets/icons/login.svg?component";
import InfoIcon from "@/assets/icons/info.svg?component";
import MoreLeftIcon from "@/assets/icons/more-left.svg?component";

// 组件
import ToggleTheme from "./components/ToggleTheme.vue";

// store
import { useSettingsStore } from "@/store/modules/settings";
import { useUserStore } from "@/store/modules/user";

const settingsStore = useSettingsStore();
const userStore = useUserStore();

const router = useRouter();
const route = useRoute();

const handleLogOut = () => {
  userStore.logout();
  router.replace("/login");
  // location.reload()
};
</script>

<template>
  <div class="navbar bg-base-100">
    <!-- Head left -->
    <div class="navbar-start">
      <div class="flex-none md:hidden">
        <label
          for="drawer"
          aria-label="open sidebar"
          class="btn btn-ghost btn-circle"
        >
          <MoreLeftIcon />
        </label>
      </div>

      <!-- 切换模型 -->
      <div v-show="route.path === '/chat'" class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn m-1 btn-sm btn-ghost rounded-box w-max"
        >
          ChatGPT 4o
          <DownIcon />
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 border-[1px] border-base-300 rounded-box z-[1] w-max p-2 shadow"
        >
          <li><a>ChatGPT 4o</a></li>
          <li><a>ChatGPT 4</a></li>
          <li><a>ChatGPT 4o mini</a></li>
        </ul>
      </div>
    </div>

    <!-- Head center -->
    <div class="navbar-center"></div>
    <!-- Head right -->
    <div class="navbar-end">
      <div class="dropdown dropdown-end mx-[5px]">
        <div tabindex="0" role="button" class="btn btn-circle btn-ghost btn-sm">
          <SettingIcon class="w-[18px]" />
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 border-[1px] border-base-300 rounded-box z-[1] w-60 p-2 shadow"
        >
          <li>
            <a class="flex justify-between">
              暗夜模式
              <ToggleTheme />
            </a>
          </li>

          <li class="hidden md:block">
            <a class="flex justify-between">
              全屏宽
              <input
                type="checkbox"
                class="toggle toggle-info"
                v-model="settingsStore.isFullScreen"
              />
            </a>
          </li>
        </ul>
      </div>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-circle btn-sm">
          <div class="avatar placeholder">
            <div class="bg-neutral text-neutral-content w-8 rounded-full">
              <span class="text-xs">登录</span>
            </div>
          </div>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content border-base-300 border-[1px] menu bg-base-100 rounded-box z-10 shadow-sm"
        >
          <!-- 已登陆 -->
          <div v-if="userStore.token">
            <div class="stats stats-vertical">
              <div class="stat">
                <div class="stat-figure text-secondary">
                  <div class="avatar online placeholder">
                    <div
                      class="bg-neutral text-neutral-content w-16 rounded-full"
                    >
                      <span class="text-xl">AI</span>
                    </div>
                  </div>
                </div>
                <div class="stat-title">Tasks done</div>
                <div class="stat-desc text-secondary">31 tasks remaining</div>
                <div class="stat-value">第一天</div>
              </div>
            </div>
            <div class="divider">OR</div>
            <button class="btn w-full" @click="handleLogOut">
              退出登录
              <LogoutIcon class="w-[18px]" />
            </button>
          </div>

          <!-- 未登录 -->
          <div v-else class="w-[150px]">
            <span class="flex flex-col justify-center items-center">
              <InfoIcon class="w-[16px] mr-[3px]" />
              没有登录
            </span>
            <div class="divider">OR</div>
            <div class="flex justify-end mb-[5px]">
              <button
                class="btn btn-sm w-full"
                @click="router.replace('/login')"
              >
                登录
                <LoginIcon class="w-[18px]" />
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
