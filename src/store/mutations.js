/**
 *  created by qingyun
 *  time: 2018/5/23  23:42
 *  note : 描述作用
 */
import * as types from './mutation-types'

export let stateMu = {
  [types.INCREASE_MODIFY](state, time) {
    state.modifyTimes += time;
  }
}
