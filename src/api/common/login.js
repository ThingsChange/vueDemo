/**
 *
 * @author  56477
 * @create 2018-05-16 15:07
 * @PROJECT_NAME vueDemo
 * @note 请阐述当前文件的作用
 **/

import axios from 'axios'
const login = {
  login: (name, pwd) => {
    // let loginInfo = Base64.encode(name + ':' + pwd)
    let loginInfo = ''
    return axios({
      method: 'post',
      url: `/kydc-zuul/login`,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Basic ' + loginInfo
      }
    })
  }
}
export default login
