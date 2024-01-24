const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: false,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },

    output: {
      filename: "main.js",
    },
  },
 filenameHashing: false,
});
