import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 注意：子应用和主应用都使用了vue，不能挂载到同一个节点，否则会报错。把子应用挂载到vueapp，并修改public/index.html
// 不在qiankun框架下启动
if (!window.__POWERED_BY_QIANKUN__) {
  createApp(App).use(router).mount("#vueapp");
} else {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {}
export async function mount(props) {
  createApp(App).use(router).mount("#vueapp");
}
export async function unmount() {}