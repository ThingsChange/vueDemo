/**
 *  created by qingyun
 *  time: 2018/5/23  23:49
 *  note : 描述作用
 */
export let increaseModifyTimes = (context, times) => {
  context.commit('INCREASE_MODIFY', times);
}
