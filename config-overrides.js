const { override, fixBabelImports, addLessLoader } = require("customize-cra");
const theme = require("./src/app/styles/antd-theme.js");

/**
 * Configurations to override the CRA's webpack.
 * ---
 * This is needed to change the theme variables
 * of Ant Design.
 */
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme
  })
);
