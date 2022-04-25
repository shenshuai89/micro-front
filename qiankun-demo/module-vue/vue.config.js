module.exports = {
  configureWebpack: {
    output: {
      library: "vueApp",
      libraryTarget: "umd",
    },
  },
  devServer: {
    port: 8001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
