import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "sweetalert2/src/sweetalert2.scss";
import "@vueform/slider/themes/default.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import VueApexCharts from "vue3-apexcharts";
import VueFeather from "vue-feather"; //feather icon
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(VueApexCharts);
app.use(createPinia());
app.use(router);
app.component(VueFeather.type, VueFeather);

app.mount("#app");
