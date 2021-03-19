const { whenDev } = require("@craco/craco");

module.exports = {
  babel: {},
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Entry
      webpackConfig.entry = {
        index: "./src/index.tsx",
      };

      // Output
      webpackConfig.output = {
        filename: whenDev(() => "bundle.js", "[name].js"),
      };

      webpackConfig.devtool = false;
    },
  },
};
