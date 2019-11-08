import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import combine from './combine'
import * as Theme from './theme/theme.vuex'
import * as Menu from './menu/menu.vuex'
import * as MorePeople from './menu/morePeople.vuex'
import * as Address from './address/address.vuex'
import * as Invoice from './invoice/invoice.vuex'
import * as NearbyShop from './nearbyShop/nearbyShop.vuex'
import * as Member from './member/member.vuex'
import * as MyOrder from './order/order.vuex'
import * as Loading from './loading/loading.vuex'

Vue.use(Vuex)

const { state, getters, actions, mutations } = combine(
  Theme,
  Menu,
  Address,
  Invoice,
  Member,
  MyOrder,
  Loading,
  NearbyShop,
  MorePeople
)

const plugins = process.env.NODE_ENV === 'development' ? [createLogger()] : []

const store = new Vuex.Store({
  plugins,
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})

export default store

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    // 使 actions 和 mutations 成为可热重载模块
    module.hot.accept(['./theme/theme.vuex'], () => {
      // 获取更新后的模块
      // eslint-disable-next-line
      const { getters, actions, mutations } = combine(
        require('./theme/theme.vuex')
      )
      // 加载新模块
      store.hotUpdate({
        getters,
        actions,
        mutations
      })
    })
  }
}
