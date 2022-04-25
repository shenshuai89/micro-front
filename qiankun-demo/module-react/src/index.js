import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
if (window.__POWERED_BY_QIANKUN__) {
}

export async function bootstrap() {}
export async function mount(props) {
  render();
}
export async function unmount() {}