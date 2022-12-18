import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "/src/assets/bootstrap/bootstrap.min.css";

createApp(App).use(store).use(router).mount("#app");
