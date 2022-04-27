// 安装所有依赖
const childProcess = require("child_process");
const path = require("path");

const filePath = {
  vue: path.join(__dirname, "../module-vue"),
  react: path.join(__dirname, "../module-react"),
  base: path.join(__dirname, "../qiankun-base"),
};

function install() {
  Object.values(filePath).forEach((item) => {
    childProcess.spawn(`cd ${item} && yarn`, {
      stdio: "inherit", //显示在终端
      shell: true, //判断shell脚本
    });
  });
}
install();
