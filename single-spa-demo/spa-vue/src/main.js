import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from "single-spa-vue";


// 在非子应用中正常挂载应用
if (!window.singleSpaNavigate) {
  //   delete appOptions.el;
  createApp(App).use(router).mount("#app");
}
// 如果在父应用中引用的子引用，当路由发生调整时，做绝对路径设置
if (window.singleSpaNavigate) {
  __webpack_public_path__ = "http://localhost:8001/";
}
const vueLifeCycle = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
      });
    },
  },
  handleInstance: (app) => {
    app.use(router);
  },
});
// 子应用必须导出 以下生命周期 bootstrap、mount、unmount
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;
export default vueLifeCycle;
