// 禁用 eslint
/* eslint-disable */

import Vue from 'vue'
import initState from './initialState'
import {
  init_nearby_params,
  change_shop_pagenum,
  init_nearby_data,
  change_distance_format
} from './constant'

export const State = initState
export const Actions = {}
export const Mutations = {}
export const Getter = {}

Mutations[init_nearby_params] = (state, opts) => {
  // 附近的店接口参数
  state.nearbyShopParams = opts
}
Mutations[init_nearby_data] = (state, nearbyData) => {
  // 附近的店接口数据
  state.nearbyData = nearbyData
}
Mutations[change_shop_pagenum] = state => {
  // 附近的店接口参数
  state.nearbyShopParams.pageSize += 2
}
Mutations[change_distance_format] = state => {
  // 修改距离
  state.nearbyData.forEach(item => {
    if (Number(item.distance) < 1000) {
      Vue.set(item, 'distance', item.distance + 'm')
    } else {
      Vue.set(item, 'distance', item.distance / 1000 + 'km')
    }
  })
}
