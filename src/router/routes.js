export default [
  {
    path: "/",
    name: "login",
    component: () => import("@/views/auth/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/auth/RegisterView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import("@/views/FormView.vue"),
  },
  {
    path: "/data",
    name: "data",
    component: () => import("@/views/DataView.vue"),
  },
  {
    path: "/data/:id",
    name: "data.detail",
    component: () => import("@/views/DataDetail.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("@/views/UsersView.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("@/views/SettingsView.vue"),
  },
];
