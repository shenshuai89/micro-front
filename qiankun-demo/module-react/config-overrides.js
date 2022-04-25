module.exports = {
  webpack: (config) => {
    config.output.library = `reactApp`;
    config.output.libraryTarget = "umd";
    config.output.publicPath = "http://localhost:8002/";
    return config;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      return config;
    };
  },
};
