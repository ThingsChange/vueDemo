// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iview from 'iview'
import 'iview/dist/styles/iview.css';
import router from './router'
import axios from './common/axiosConfig'

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.prototype.$axios = axios
Vue.use(iview);
/* router.beforeEach((to, from, next) => {
  if (true) {
    next()
  } else {
    next('login')
  }
})*/
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
