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
  //регистрация
  {
    path: "/register",
    component: () => import("layouts/Auth/RegLogLayout.vue"),
    children: [
      //регистрация курьера
      {
        path: "courier",
        name: "reg_courier",
        component: () => import("pages/Auth/RegCourier.vue"),
      },
      //регистрация отправителя
      {
        path: "agreement",
        name: "agreement_sender",
        props: true,
        component: () => import("pages/Auth/AgreementSender.vue"),
      },
      {
        path: "sender",
        name: "reg_sender",
        component: () => import("pages/Auth/RegSender.vue"),
        meta: { agreement: true },
        beforeEnter: (to, from, next) => {
          if (to.matched.some((r) => r.meta.agreement)) {
            if (
              localStorage.getItem("agreement") == null ||
              !localStorage.getItem("agreement")
            ) {
              next({ name: "agreement_sender" });
            } else {
              next();
            }
          } else {
            next();
          }
        },
      },
      {
        path: "/register/confirmation",
        name: "confirmation",
        component: () => import("pages/Auth/Confirmation.vue"),
      },
      //вход
    ],
  },
  //вход
  {
    path: "/login",
    component: () => import("layouts/Auth/RegLogLayout.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("pages/Auth/Login.vue"),
      },
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

  //отправитель
  {
    path: "/sender",
    meta: { auth: true, role: "sender" },
    component: () => import("layouts/Sender/SenderLayout.vue"),

    children: [
      {
        path: "",
        name: "sending",
        component: () => import("pages/sender/sending/Sending.vue"),
        // children: [
        //   {
        //     path: "",
        //     alias: ["/:id", ""],
        //     component: () => import("pages/sender/sending/SendingActual.vue"),
        //   },
        //   {
        //     path: "history",
        //     component: () => import("pages/sender/sending/SendingHistory.vue"),
        //   },
        // ],
      },
      {
        path: "notice",
        name: "notice",
        component: () => import("pages/sender/notice/Notice.vue"),
      },
      {
        path: "search",
        name: "search",
        component: () => import("pages/sender/search/Search.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("pages/sender/profile/Profile.vue"),
      },
    ],
  },
  //курьер
  {
    path: "/courier",
    name: "courier",
    meta: { auth: true, role: "courier" },
    component: () => import("layouts/Courier/CourierLayout.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
