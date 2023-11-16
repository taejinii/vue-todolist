import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApexCharts from "vue3-apexcharts";

createApp(App).use(router).use(store).use(VueApexCharts).mount("#app");
