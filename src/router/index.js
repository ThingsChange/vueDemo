import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/pages/HelloWorld'
let HelloWorld = r => require(['@/page/HelloWorld'], r);
let Index = r => require(['@page/index'], r);
let Login = r => require(['@page/login'], r);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index/:id',
      name: 'index',
      component: Index
    }
  ]
})
