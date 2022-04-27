// 安装所有依赖
const childProcess = require("child_process");
const path = require("path");

const filePath = {
  vue: path.join(__dirname, "../spa-vue"),
  react: path.join(__dirname, "../spa-react"),
  base: path.join(__dirname, "../single-spa-main"),
};

function start() {
  Object.values(filePath).forEach((item) => {
    // 无法实时输出执行进度到控制台
    // childProcess.exec(`cd ${item} && yarn run start`, {
    //   stdio: "inherit",
    // });
    childProcess.spawn(`cd ${item} && yarn run start`, {
      stdio: "inherit", //显示在终端
      shell: true, //判断shell脚本
    });
  });
}
start();
