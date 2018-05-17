/**
 *
 * @author  56477
 * @create 2018-05-17 14:19
 * @PROJECT_NAME vueDemo
 * @note 请阐述当前文件的作用
 **/
import axios from 'axios'
let corsAPI = {
  getCorsData() {
    return axios({
      type: 'GET',
      url: 'http://localhost:3000/qyNative?callback=cb'
    })
  },
  getCorsDataNotSimple() {
    var url = 'http://localhost:3000/qyNative?callback=cb'
    var xhr = new XMLHttpRequest()
    xhr.open('PUT', url, true)
    xhr.setRequestHeader('X-Custom-Header', 'value')
    xhr.send()
    /* return axios({
      type: 'DELETE',
      url: 'http://localhost:3000/qyNative?callback=cb'
    })*/
  }
}
export default corsAPI
