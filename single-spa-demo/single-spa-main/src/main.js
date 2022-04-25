import { createApp } from "vue";
import App from "./App.vue";
import { registerApplication, start } from "single-spa";
import router from "./router"

createApp(App).use(router).mount("#app");

// 动态加载js文件
function loadScript(url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
}
// singleSpa 缺陷：样式不隔离，不能动态加载js，没有js沙箱机制
registerApplication(
  "myVueApp",
  async () => {
      console.log('object');
    await loadScript("http://localhost:8001/js/chunk-vendors.js");
    await loadScript("http://localhost:8001/js/app.js");
    return window.singleVue;
  },
  (location) => location.pathname.startsWith("/vue")
);

registerApplication(
  "myReactApp",
  async () => {
    await loadScript("http://localhost:8002/static/js/bundle.js");
    return window.singleReact;
  },
  (location) => location.pathname.startsWith("/react")
);

start();