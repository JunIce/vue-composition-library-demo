import Vue from 'vue'

import vueCompositionApi from '@vue/composition-api'
Vue.use(vueCompositionApi)

import ElInput from "el-input"
Vue.use(ElInput)
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
