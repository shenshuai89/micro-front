// 安装所有依赖
const childProcess = require("child_process");
const exec = require('child_process').execSync;
const path = require("path");

const filePath = {
  vue: path.join(__dirname, "../spa-vue"),
  react: path.join(__dirname, "../spa-react"),
  base: path.join(__dirname, "../single-spa-main"),
};

function install() {
  Object.values(filePath).forEach((item) => {
    exec(`cd ${item} && yarn`, {
      stdio: "inherit", //显示在终端
      shell: true, //判断shell脚本
    });
  });
}
install();
