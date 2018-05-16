/**
 *  created by qingyun
 *  time: 2018/4/22  12:51
 *  note : 描述作用
 */
export const getAny = (from, to) =>
  Math.floor(Math.random() * (to - from + 1) + from)
export const getList = param => {
  // 取22 到33 的随机数吧
  let a = []
  for (let i = 0; i < 3; i++) {
    a.push(getAny(22, 33))
  }
  console.log('a', a)
  switch (param) {
    case 1:
      a = [1, 2, 3]
      break
    case 2:
      // return [10,20,30];
      break
    default:
      return []
  }
  return a
}
