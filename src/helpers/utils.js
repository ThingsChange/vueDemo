/**
 * 给 setTimeout 换个名字
 * @param {*} args  fn, time, ...args
 */
export const delay = (...args) => {
  // eslint-disable-next-line
  setTimeout.apply(null, args)
}

/**
 * 获取当前屏幕宽度
 */
export const getScreenWidth = () => document.documentElement.clientWidth

/**
 * 得到当前屏幕的 rem 数值
 * @return {number} 当前屏幕的 rem 数值
 */
export const getRem = () => 100 * (getScreenWidth() / 1080)

/**
 * 将 rem 单位转换为 px
 * @param {number} rem    rem 的数值
 * @return {number} 转换为 px 之后的数值
 */
export const rem2px = rem => rem * getRem()

/**
 * 将 px 单位转换为 rem
 * @param {number} px    px 的数值
 * @return {number} 转换为 rem 之后的数值
 */
export const px2rem = px => px / getRem()

/**
 * 操作图片服务器的参数
 */
export const imgCenter = (url, w, h) => {
  if (!url) return url
  const reg = /\.(jpg|gif|png|jpeg)$/i
  const _w = Math.floor(w)
  const _h = Math.floor(h)
  // eslint-disable-next-line
  const rs = url.replace(reg, a => {
    return `=C${_w}x${_h}+1+1${a}`
  })
  return rs.replace('http://', 'https://')
}

// eslint-disable-next-line
export const shopLogoImg = (url, size) => {
  if (!url) return url
  let _url = url

  if (Array.isArray(url)) _url = url[0]

  const reg = /\.(jpg|gif|png)$/
  const _size = Math.floor(size)
  const rs = _url.replace(reg, $1 => `=${_size}x${_size}${$1}`)
  return rs.replace('http://', 'https://')
}

export const hashCode = str => {
  let h = 0
  const len = str.length
  const t = 2147483648
  for (let i = 0; i < len; i++) {
    h = 31 * h + str.charCodeAt(i)
    while (h > 2147483647) {
      h %= t
    }
  }
  return h
}
export const uuid = () => {
  let d = new Date().getTime()
  const _uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // eslint-disable-next-line
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    // eslint-disable-next-line
    return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16)
  })
  return _uuid
}

// 将十六进制颜色改为rgb
export const colorRgb = (color, opacity) => {
  let sColor = color.toLowerCase()
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    const sColorChange = []
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(window.parseInt(`0x${sColor.slice(i, i + 2)}`))
    }
    return `rgba(${sColorChange.join(',')},${opacity || 0.28})`
  }
  return sColor
}
// 对象深拷贝
export const deepcopy = (obj1, obj2) => {
  const obj = obj2 || {}
  Object.keys(obj1).forEach(name => {
    if (typeof obj1[name] === 'object' && obj1[name] !== null) {
      obj[name] = obj1[name].constructor === Array ? [] : {}
      deepcopy(obj1[name], obj[name])
    } else {
      obj[name] = obj1[name]
    }
  })
  return obj
}

/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position. A negative index will be treated as an offset from the end.
 * @param {number} [end=array.length] The end position. A negative index will be treated as an offset from the end.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * _.slice(array, 2)
 * // => [3, 4]
 */
export const slice = (array, start, end) => {
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  start = start == null ? 0 : start
  end = end === undefined ? length : end

  if (start < 0) {
    start = -start > length ? 0 : length + start
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  // eslint-disable-next-line
  length = start > end ? 0 : (end - start) >>> 0
  // eslint-disable-next-line
  start >>>= 0

  let index = -1
  const result = new Array(length)
  // eslint-disable-next-line
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

export const deepCopy = obj => JSON.parse(JSON.stringify(obj))

export const accAdd = (arg1, arg2) => {
  const tem1 = arg1 * 100
  const tem2 = arg2 * 100

  return (tem1 + tem2) / 100
}

export const accMul = (arg1, arg2) => {
  const tem = arg1 * 100 * arg2 * 100
  return tem / 10000
}

export const accSub = (arg1, arg2) => {
  // eslint-disable-next-line
  let tem = arg1 * 100 - arg2 * 100
  tem /= 100
  return tem
}

export const accDiv = (arg1, arg2) => {
  // eslint-disable-next-line
  var r1 = arg1.toString(),
    r2 = arg2.toString(),
    m,
    resultVal,
    d = arguments[2]
  // eslint-disable-next-line
  m =
    (r2.split('.')[1] ? r2.split('.')[1].length : 0) -
    (r1.split('.')[1] ? r1.split('.')[1].length : 0)
  // eslint-disable-next-line
  resultVal =
    (Number(r1.replace('.', '')) / Number(r2.replace('.', ''))) *
    Math.pow(10, m)
  // eslint-disable-next-line
  return typeof d !== 'number'
    ? Number(resultVal)
    : Number(resultVal.toFixed(parseInt(d)))
}
export const toFix = (n, g = 2) => Number(`${Math.round(`${n}e${g}`)}e-${g}`)

export const changeSize = (url, w, h, isTransfer) => {
  if (!url || /\.gif$/i.test(url)) return url
  if (isTransfer) {
    w = rem2px(w)
    h = rem2px(h)
  }
  return imgCenter(url, w * 2, h * 2)
}

const baseStr = (obj, v) =>
  (obj[v] || [])
    .reduce((a, b) => a.concat([`${b.foodName}#${b.unit}#${b.count}`]), [])
    .join('->')
const tcStr = obj =>
  (obj || [])
    .reduce((a, b) => a.concat([`${b.foodName}#${b.unit}#${b.count}`]), [])
    .join('->')
const tasteStr = (obj, v) =>
  (obj[v] || [])
    .reduce((a, b) => a.concat([`${b.key}#${(b.value || []).join()}`]), [])
    .join('->')
export const deepEqual = (obj1, obj2) => {
  // 比较foodName 和 unit
  if (obj1.foodName !== obj2.foodName || obj1.unit !== obj2.unit) {
    return false
  }

  // 比较人
  if ((obj1.personalInfo || {}).userID !== (obj2.personalInfo || {}).userID) {
    return false
  }

  // 轻比较优先  先过滤掉 一个有值 一个为空的情况
  if ((obj1.foodTastes || []).length !== (obj2.foodTastes || []).length) {
    return false
  }
  if (
    (obj1.foodSetCategories || []).length !==
    (obj2.foodSetCategories || []).length
  ) {
    return false
  }
  if ((obj1.sideDishes || []).length !== (obj2.sideDishes || []).length) {
    return false
  }
  return ['foodTastes', 'foodSetCategories', 'sideDishes'].every(v => {
    if (v === 'foodTastes') {
      return tasteStr(obj1, v) === tasteStr(obj2, v)
    }
    if (v === 'foodSetCategories') {
      return (
        tcStr(
          (obj1[v] || []).reduce((a, b) => a.concat(b.foodSetDetails), []),
          v
        ) ===
        tcStr(
          (obj2[v] || []).reduce((a, b) => a.concat(b.foodSetDetails), []),
          v
        )
      )
    }
    if (v === 'sideDishes') {
      return baseStr(obj1, v) === baseStr(obj2, v)
    }
    return true
  })
}

// eslint-disable-next-line
export const debounce = function(func, wait, immediate) {
  let timeout
  // eslint-disable-next-line
  return function(...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }, wait)
    if (immediate && !timeout) func.apply(context, args)
  }
}

// export const transcoord = ({lng,lat,longitude,latitude}) => {
//   let short = false
//   if(lng){
//     short = true
//   }
//   lng = lng || longitude
//   lat = lat || latitude
//   if(!lng || !lat){
//     return {
//       lng,
//       lat,
//       longitude:lng,
//       latitude:lat
//     }
//   }
//   const array = (coordtransform.gcj02tobd09(lng,lat)||[]).map(v => v.toFixed(7))
//   if(short){
//     return {
//       lng:array[0],
//       lat:array[1]
//     }
//   }
//   return {
//     longitude:array[0],
//     latitude:array[1]
//   }
// }

export const transcoord = obj => obj
