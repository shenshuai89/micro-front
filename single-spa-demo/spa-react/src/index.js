import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import singleSpaReact from "single-spa-react";

// 在非子应用中正常挂载应用
if (!window.singleSpaNavigate) {
  ReactDOM.render(<App />, document.getElementById("root"))
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return <div>This renders when a catastrophic error occurs</div>;
  },
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;