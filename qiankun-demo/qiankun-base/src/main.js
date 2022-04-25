import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun";
import ElementUI from "element-plus";
import "element-plus/dist/index.css";
// 加载多个子应用
let apps = [
  {
    name: "vueApp",
    entry: "http://localhost:8001",
    container: "#vue",
    activeRule: "/vue",
  },
  {
    name: "reactApp",
    entry: "http://localhost:8002",
    container: "#react",
    activeRule: "/react",
  },
];
// registerMicroApps注册子应用
registerMicroApps(apps);
// 启动主应用
start();

createApp(App).use(router).use(ElementUI).mount("#app");