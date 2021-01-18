import { createWebHistory, createRouter } from "vue-router";
import Home from "@/App.vue";
import AddMovie from "@/components/layout/AddMovie.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "AddMovie",
    component: AddMovie,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;