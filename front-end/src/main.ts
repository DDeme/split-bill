import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./index.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const iconPack = [faUserSecret,faHome]
library.add(...iconPack)


createApp(App).use(store).use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");
