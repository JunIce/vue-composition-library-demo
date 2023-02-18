const { defineConfig } = require('@vue/cli-service')
const path = require("path")
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // config.resolve.alias.set("@vue/composition-api", path.join(__dirname, "./node_modules/@vue/composition-api/dist/vue-composition-api.esm.js"))
  }
})
