import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/pages/HelloWorld'
let HelloWorld = r => require(['@/page/HelloWorld'], r);
let CrossOrigin = r => require(['@page/crossOrigin/index'], r);
let Login = r => require(['@page/login'], r);
let Layout = r => require(['@page/layout'], r);
let LifeCycle = r => require(['@page/lifeCycle'], r);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: '欢迎页2',
          component: HelloWorld,
          meta: {
            name: '欢迎页'
          }
        },
        {
          path: '/index',
          name: '欢迎页1',
          component: HelloWorld,
          meta: {
            name: '欢迎页'
          }
        },
        {
          path: '/welcome',
          name: '欢迎页3',
          component: HelloWorld,
          meta: {
            name: '欢迎页3'
          }
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      component: Layout,
      path: '/',
      name: 'Layout',
      children: [{
        path: '/crossOrigin',
        component: CrossOrigin,
        meta: {
          name: '跨域实现'
        }
      }]
    },
    {
      component: Layout,
      name: 'Layout',
      path: '/',
      children: [{
        path: '/lifeCycle',
        name: 'vue生命周期',
        meta: {
          name: 'vue生命周期'
        },
        component: LifeCycle
      }]
    }
  ]
})
