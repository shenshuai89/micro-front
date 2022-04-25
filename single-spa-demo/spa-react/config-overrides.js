module.exports = {
  webpack: (config) => {
    config.output.library = "singleReact";
    config.output.libraryTarget = "umd";
    config.output.publicPath = "http://localhost:8002/";
    return config;
  },
  devServer: (configFn) => {
    return function (proxy, allowedHost) {
      const config = configFn(proxy, allowedHost);
      config.headers = {
        "Accsss-Control-Allow-Origin": "*",
      };
      return config;
    };
  },
};