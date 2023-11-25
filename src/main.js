import { createApp } from "vue";
import App from "./App.vue";
import VueLazyLoad from "vue3-lazyload";
import "./assets/style.css";

createApp(App).use(VueLazyLoad).mount("#app");
