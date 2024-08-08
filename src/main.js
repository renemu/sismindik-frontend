import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "sweetalert2/src/sweetalert2.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
// import JlDatatable from "jl-datatable";
import VueApexCharts from "vue3-apexcharts";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// app.component("jl-datatable", JlDatatable);
app.use(VueApexCharts);
app.use(createPinia());
app.use(router);

app.mount("#app");
