module.exports = {
  configureWebpack: {
    output: {
      library: "singleVue",
      libraryTarget: "umd",
    },
    devServer: {
      port: 8001,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  },
};