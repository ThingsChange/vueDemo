// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
// import store from './store'
// import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui' // UI插件

import iview from 'iview'
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';
// import SentryRRWeb from '@sentry/rrweb';
import 'iview/dist/styles/iview.css'
import './assets/css/common.scss'
import router from './router'
import axios from './common/axiosConfig'
import './components/SvgIcon/registerSvg';

// 注册全局组件
// import './components/SvgIcon/registerSvg'

import bread from './components/bread'
import menu from './components/menu'
import treeMmenu from './page/vuePage/tree/index1'

import './assets/js/debug'
const person = {
  name: '小明',
  age: 22
};

Vue.directive('button', {
  inserted(el, binding) {
    el.style.background = 'green';
  },
  update(el, binding) {
    console.log('这里是 binding 的结果-------------', binding);
    el.style.background = binding.value ? '#f6f6f6' : 'green'
    el.toggleAttribute('disabled', binding.value)
    el.style.pointerEvents = binding.value ? 'none' : 'auto';
    console.log('这里是 el 的结果-------------', el);
    console.log('这里是  的结果-------------', getComputedStyle(el).pointerEvents);
  }
})

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

if (process.env.NODE_ENV === 'production') {
  Sentry.setTag('shop-GroupID', 123)
  Sentry.setTag('shop-ShopID', 234)
  Sentry.init({
    Vue,
    dsn: process.env.VUE_APP_SENTRY_DSN,
    release: process.env.VUE_APP_SENTRY_RELEASE,
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: [process.env.VUE_APP_HOST_URL, /^\//]
      })
      /* new SentryRRWeb({
        // default is empty
        checkoutEveryNth: 100,
        // default is 5 minutes
        // checkoutEveryNms: 15 * 60 * 1000,
        // on by default
        maskAllInputs: false,
      }), */
    ],
    ignoreErrors: ['AbortError', 'junnuli'],
    maxBreadcrumbs: 30,
    tracesSampleRate: 0.01,
    beforeSend(event, hint) {
      const currentRouteQuery = router.currentRoute.query;
      event.tags['shop-GroupID'] = currentRouteQuery.groupID || currentRouteQuery.g
      event.tags['shop-ShopID'] = router.currentRoute.params.shopID || currentRouteQuery.shopID
      // event.tags.ma_h5 = Cookie.get('ma_h5').split(':')[1];
      // event.tags.qy_currentPage= router.currentRoute
      console.log('这里是   event  ------------', event);
      console.log('这里是   hint  ------------', hint);
      // const error = hint.originalException;
      const error2 = hint.originalException;
      if (
        error2 &&
        error2.message &&
        error2.message.match(/AbortError|aborted /i)
      ) {
        // 用来做分组
        event.fingerprint = ['取消'];
        // 不要该事件
        // return null
      }
      return event;
    }
  });
}

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
