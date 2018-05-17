/**
 *
 *  @author  56477
 *  @create 2018-05-15 14:02
 *  @note 干什么的呢？
 * */
import axios from 'axios'
axios.interceptors.request.use(
  (config) => {
    return config // 添加这一行
  },
  error => {
    return Promise.reject(error)
  }
)
export default { axios }
