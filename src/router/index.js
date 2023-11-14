import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import StatisticsView from "../views/StatisticsView.vue";

const routes = [
  {
    path: "/",
    component: MainView,
  },
  {
    path: "/statistics",
    component: StatisticsView,
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
  linkActiveClass: "active",
});
export default router;
