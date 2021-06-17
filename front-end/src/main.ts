import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./index.css";

import VueApexCharts from "vue3-apexcharts";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faHome,
  faCog,
  faUserFriends,
  faChartArea,
  faArrowRight,
  faChevronUp,
  faChevronDown,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const iconPack = [
  faUserSecret,
  faHome,
  faCog,
  faUserFriends,
  faChartArea,
  faArrowRight,
  faChevronUp,
  faChevronDown,
  faMinus,
];
library.add(...iconPack);

createApp(App)
  .use(store)
  .use(router)
  .use(VueApexCharts)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
