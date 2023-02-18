// import vue from "rollup-plugin-vue";
const vue = require("rollup-plugin-vue");
const styles = require("rollup-plugin-styles");
const compiler = require("vue-template-compiler");

module.exports = {
  //   external: ["vue", "@vue/composition-api"],
  input: "./src/index.js",
  output: [
    {
      file: "dist2/umd.js",
      format: "cjs",
    },
    {
      file: "dist2/umd.mjs",
      format: "es",
    },
  ],
  plugins: [
    vue({
      compiler: compiler,
    }),
    styles(),
  ],
};
