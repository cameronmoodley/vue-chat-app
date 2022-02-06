import App from "./App.vue";
import router from "./router";
import store from "./store";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import { createApp } from "vue";

const socketConnection = SocketIO("http://localhost:3023");

const optionsVueIO = {
  debug: true,
  connection: socketConnection,
};

const app = createApp(App)
  .use(store)
  .use(router)
  .use(new VueSocketIO(optionsVueIO));
app.mount("#app");
