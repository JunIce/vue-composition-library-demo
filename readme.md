# `vue2` use `@vue/composition-api `  to release a library and The business project usage minimal demo 



## Create a vue2 library package



- init project

```bash
vue create library
```



- install `@vue/composition-api`

```bash
yarn add @vue/composition-api
```



- package usage

```js
import vueCompositionApi from '@vue/composition-api'
Vue.use(vueCompositionApi)
```



- create a demo component

```vue
<template>
  <input type="text" v-model="computedValue" />
</template>

<script>
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ElInput",
  setup(props, ctx) {
    const computedValue = computed({
      get: () => props.value,
      set: val => {
        ctx.emit("change", val);
      }
    });

    return {
      computedValue
    };
  }
});
</script>
```



- **build library**

create install entry file

```js
import DemoInput from "./composable/demo-input.vue";

export default {
  install(Vue) {
    Vue.component("el-input", DemoInput);
  },
};
```



add script to `package.json` 

```json
 "scripts": {
	// ....
    "library": "vue-cli-service build --target lib --name usd ./src/index.js"
  }
```



- config webpack **externals**

Edit `vue.config.js`.  We config the `@vue/composition-api` to **externals**  and  dependence by the business package usage.

```js
chainWebpack: config => {
    config.externals(["vue", "@vue/composition-api"])
}
```



- Then run the script to build

```bash
yarn build
```



- set `package.json` package dist link

```js
  "main": "dist/usd.umd.js",
```



## Business project usage



- Init the project is same to the library project
- Use the library

​	Here because this is the local project, we just need to install the local project

```bash
yarn add "../library"
```

 

- Business usage

```js
import vueCompositionApi from '@vue/composition-api'
Vue.use(vueCompositionApi)

import ElInput from "el-input"
Vue.use(ElInput)
```



This is the normal step usage of the plugin.

But you would get **the Error in browser**

```bash
[Vue warn]: Error in data(): "Error: [vue-composition-api] must call Vue.use(plugin) before using any function.
```



But we had install the plugin before the usage



So we need to **set the webpack alias config**

```js
chainWebpack: config => {
    config.resolve.alias.set("@vue/composition-api", path.join(__dirname, "./node_modules/@vue/composition-api/dist/vue-composition-api.esm.js"))
}
```

**This step is very important.**





## Reference



[https://github.com/vuejs/composition-api/issues/239](https://github.com/vuejs/composition-api/issues/239)

[https://github.com/vuejs/composition-api/issues/228](https://github.com/vuejs/composition-api/issues/228)

[https://github.com/vuejs/composition-api/issues/372](https://github.com/vuejs/composition-api/issues/372)

[https://github.com/vuejs/composition-api/issues/340](https://github.com/vuejs/composition-api/issues/340)



## License

MIT
