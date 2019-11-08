/* eslint-disable */
import Vue from 'vue'

const IconList = [
  {
    name: 'Logo',
    loader: r => require(['../../components/SvgIcon/Svg/Logo.vue'], r)
  },
  {
    name: 'Add',
    loader: r => require(['../../components/SvgIcon/Svg/Add.vue'], r)
  }
]

const register = (name, loader) => {
  Vue.component(name, resolve => {
    loader(resolve)
  })
}

IconList.forEach(item => {
  register(item.name, item.loader)
})
