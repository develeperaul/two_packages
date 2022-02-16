const routes = [
  {
    path: "/",
    meta: { auth: true },
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  //авторизация
  {
    path: "/auth",
    component: () => import("layouts/Auth/AuthLayout.vue"),
    children: [
      {
        path: "",
        name: "auth",
        component: () => import("pages/Auth/Auth.vue"),
      },
    ],
  },
  //регистрация и вход
  {
    path: "/",
    component: () => import("layouts/Auth/RegLogLayout.vue"),
    children: [
      { path: "/register", component: () => import("pages/Auth/Reg.vue") },
      { path: "/login", component: () => import("pages/Auth/Log.vue") },
    ],
  },
  //вступление
  {
    path: "/introduction",
    component: () => import("layouts/Introduction/IntroductionLayout.vue"),
    children: [
      {
        path: "courier",
        name: "courier",
        component: () => import("pages/Introduction/Сourier.vue"),
      },
      {
        path: "sender",
        name: "sender",
        component: () => import("pages/Introduction/Sender.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
