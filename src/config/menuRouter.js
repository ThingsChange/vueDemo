/**
 * @author  56477
 * @create 2018-05-22 10:31
 * @PROJECT_NAME vueDemo
 * @note 一二级导航对应的路由地址
 **/

/* export const routeConfig = {
  '1-1': '/crossOrigin',
  '1-2': '',
  '1-3': '/welcome',
  '2': '/vueTest',
  '2-1': '/lifeCycle'
}*/
export const routeConfig = [
  {id: '1',
    path: '/',
    text: '域的知识',
    child: [
      {id: '1-1', path: '/crossOrigin', text: '跨域实现'},
      {id: '1-2', path: '', text: '首页'},
      {id: '1-3', path: '/welcome', text: '欢迎页'}
    ]
  },
  {id: '2',
    path: '/vueTest',
    text: 'vue测试',
    child: [
      {id: '2-1', path: '/lifeCycle', text: '生命周期'}
    ]}
]
