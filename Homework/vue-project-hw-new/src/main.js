import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueCarousel from 'vue-carousel'
import router from './router'

Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
