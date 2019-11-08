/**
 *  created by qingyun
 *  time: 2018/5/23  23:42
 *  note : Mutation里面必须是同步函数
 */
import * as types from './mutation-types'
let mutations = {
  [types.INCREASE_MODIFY](state, time) {
    state.modifyTimes += time
  },
  [types.SYNC_MINUS_MODIFY](state, obj) {
    state.modifyTimes -= obj.amount
  }
}
export default mutations
