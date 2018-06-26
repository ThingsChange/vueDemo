import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/pages/HelloWorld'
let HelloWorld = r => require(['@/page/HelloWorld'], r);
let CrossOrigin = r => require(['@page/crossOrigin/index'], r);
let Login = r => require(['@page/login'], r);
let Layout = r => require(['@page/layout'], r);
let LifeCycle = r => require(['@page/vuePage/lifeCycle'], r);
let RouterTest = r => require(['@page/vuePage/routerTest'], r);
let ObjectTest = r => require(['@page/vuePage/objectTest'], r);
let ComponentCommunicate = r => require(['@page/vuePage/componentCommunicate'], r);

Vue.use(Router)
let routerList = new Router({
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
      },
      {
        path: '/componentCommunicate',
        name: '组件通信',
        meta: {
          name: '组件通信'
        },
        component: ComponentCommunicate
      },
      {
        path: '/objectTest',
        name: '引用数据类型',
        meta: {
          name: '引用数据类型'
        },
        component: ObjectTest
      },
      {
        path: '/routerTest',
        name: '路由导航守卫测试',
        meta: {
          name: '路由导航守卫测试'
        },
        component: RouterTest,
        beforeEnter(to, from, next) {
          console.group('路由守卫测试：这里是beforeEnter')
          console.log(to, from, next);
        }
      }
      ]
    }
  ]
})
routerList.beforeEach((to, from, next) => {
  console.log('路由守卫测试：这里是beforeEach')
  next();
})
export default routerList;
