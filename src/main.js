import Vue from 'vue'
import Store from '@/store'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  store: Store,
  render: h => h(App),
}).$mount('#app')
