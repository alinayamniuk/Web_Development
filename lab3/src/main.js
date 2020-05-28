import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use({
  install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'http://127.0.0.1:8000/api/'
    })
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
