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
    return axios({
      method: 'post',
      url: `/qyTest/login`,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      data: {name, pwd}
    })
  }
}
export default login
