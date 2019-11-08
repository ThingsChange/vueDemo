/**
 *
 *  @author  56477
 *  @create 2018-05-15 14:02
 *  @note 干什么的呢？
 * */
import axios from 'axios'
axios.interceptors.request.use(
  config => {
    console.log('config', config)
    return config // 添加这一行
  },
  error => {
    return Promise.reject(error)
  }
)
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    console.log('response', response)
    return response // 有且必须有一个response对象被返回
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default axios
