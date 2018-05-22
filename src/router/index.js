import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/pages/HelloWorld'
// let HelloWorld = r => require(['@/page/HelloWorld'], r);
let CrossOrigin = r => require(['@page/crossOrigin/index'], r);
let Login = r => require(['@page/login'], r);
let Layout = r => require(['@page/layout'], r);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      component: Layout,
      path: '/crossOrigin',
      name: 'Layout',
      children: [{
        path: '/',
        component: CrossOrigin,
        meta: {
          name: '奖金录入'
        }
      }]
    }
  ]
})
