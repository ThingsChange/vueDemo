// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
// import store from './store'
import store from './vuex'
import {sync} from 'vuex-router-sync'
import ElementUI from 'element-ui'// UI插件

import iview from 'iview'
import 'iview/dist/styles/iview.css';
import router from './router'
import axios from './common/axiosConfig'
// 注册全局组件
import './components/SvgIcon/registerSvg'

// eslint-disable-next-line
import bread from './components/bread'
// eslint-disable-next-line
import menu from './components/menu'

import './assets/js/debug';
Vue.component('Bread', bread);
Vue.component('MenuSelf', menu);
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.prototype.$axios = axios
Vue.use(iview);
Vue.use(ElementUI);
/* router.beforeEach((to, from, next) => {
  if (true) {
    next()
  } else {
    next('login')
  }
})*/
// Vue 2.20++可用
/* Vue.config.errorHandler = function (err, vm, info) {
  // handler error
  // info 是Vue特定的错误信息，比如错误所在的生命周期钩子

}*/
sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  /*  render: function() {
    throw new Error('error')
  },*/
  data: {
    bus: new Vue()
  }
})

// export { router, store }
