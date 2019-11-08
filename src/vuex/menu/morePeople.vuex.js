// 禁用 eslint
/* eslint-disable no-param-reassign */

import initState from './initialState'
import {
  set_is_more_people,
  add_or_sub_food_hint_info,
  show_more_people_shop_cart,
  hide_more_people_shop_cart,
  hide_more_people_shop_cart_box,
  flash_more_people_shop_cart_box,
  show_or_hide_more_people_realTimeMarket
} from './constant'

export const States = initState
export const Actions = {}
export const Mutations = {}
export const Getter = {}

// 是否是多人点餐
Mutations[set_is_more_people] = (state, bool) => {
  state.isMorePeople = bool
}

// 菜品增删提示内容
Mutations[add_or_sub_food_hint_info] = (state, foodInfo) => {
  state.foodHintInfo = foodInfo
}

// 刷新删除菜品的弹框
Mutations[flash_more_people_shop_cart_box] = (state, foods) => {
  state.reductionFood = foods
}

// 点击弹窗的遮罩层隐藏弹窗
Mutations[hide_more_people_shop_cart_box] = state => {
  state.isShowMorePeopleShowCartBox = false
}
// 点击弹窗的遮罩层隐藏弹窗
Mutations[show_or_hide_more_people_realTimeMarket] = (state, obj) => {
  state.isShowrealTimeMarket = obj
}
// 显示多人点餐购物车
Mutations[show_more_people_shop_cart] = state => {
  state.isShowMorePeopleShowCart = true
}
// 点击购物车的遮罩层隐藏购物车
Mutations[hide_more_people_shop_cart] = state => {
  state.isShowMorePeopleShowCart = false
}
