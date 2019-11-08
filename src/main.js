// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App.vue'
// import store from './store'
// import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui' // UI插件

import iview from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/css/common.scss'
import router from './router'
import axios from './common/axiosConfig'
import './components/SvgIcon/registerSvg'

// 注册全局组件
// import './components/SvgIcon/registerSvg'

import bread from './components/bread'
import menu from './components/menu'
import treeMmenu from './page/vuePage/tree/index1'

import './assets/js/debug'
// const Vue = require('vue')
Vue.component('Bread', bread)
Vue.component('MenuSelf', menu)
Vue.component('jsonTree', treeMmenu)
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.prototype.$axios = axios
Vue.use(iview)
Vue.use(ElementUI)
router.beforeEach((to, from, next) => {
  console.log('这里是 .a 的结果-------------', sessionStorage.setItem('b', +sessionStorage.getItem('b') + 1))
  next()
})
// Vue 2.20++可用
/* Vue.config.errorHandler = function (err, vm, info) {
  // handler error
  // info 是Vue特定的错误信息，比如错误所在的生命周期钩子

}*/
// sync(store, router)

new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>',
  /*  render: function() {
    throw new Error('error')
  },*/
  data: {
    bus: new Vue()
  }
})

// export { router, store }
