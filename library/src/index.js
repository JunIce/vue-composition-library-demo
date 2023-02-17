import DemoInput from "./composable/demo-input.vue";

export default {
  install(Vue) {
    Vue.component("el-input", DemoInput);
  },
};
