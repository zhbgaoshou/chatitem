import { createWebHistory, createRouter } from "vue-router";

import store from "@/store";
import { useUserStore } from "@/store/modules/user";

const whiteList = ["/", "/register", "/login", "/chat"];

const init_router = () => {
  return createRouter({
    history: createWebHistory(),
    routes: [
      // chat 首页
      {
        path: "/",
        component: () => import("@/drawer/index.vue"),
        name: "drawer",
        redirect: "/chat",
        children: [
          {
            path: "chat",
            component: () => import("@/views/Chat/Chat.vue"),
            name: "chat",
          },
        ],
      },
      // user login
      {
        path: "/login",
        component: () => import("@/views/User/Login.vue"),
        name: "login",
      },
      // user register
      {
        path: "/register",
        component: () => import("@/views/User/Register.vue"),
        name: "register",
      },
    ],
  });
};

const router = init_router();
const userStore = useUserStore(store);

router.beforeEach(async (to, from, next) => {
  const token = userStore.token;
  const firstName = userStore.firstName;

  if (token) {
    if (to.path === "/login" || to.path === "/register") {
      next("/");
    } else {
      if (firstName) {
        next();
      } else {
        await userStore.getUserInfo();
        next({ ...to, replace: true });
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      to.path === "/login" ? next() : next("/login");
    }
  }
});

export default router;
