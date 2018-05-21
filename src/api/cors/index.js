/**
 *
 * @author  56477
 * @create 2018-05-17 14:19
 * @PROJECT_NAME vueDemo
 * @note 请阐述当前文件的作用
 **/
import axios from 'axios'
import $ from 'jquery'
import io from 'socket.io-client'

let cb = (...data) => {
  console.log(123);
  console.log(data, '我是回调')
}
window.cb = cb
console.log(cb)
let corsAPI = {
  getCorsData() {
    return axios({
      type: 'GET',
      url: 'http://localhost:3000/qyNative?callback=cb'
    })
  },
  getCorsDataNotSimple() {
    // var url = 'http://localhost:3000/qyNative?callback=cb'

    const config = {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      url: 'http://localhost:3000/qyNative?callback=cb'
    }
    axios(config)
  },
  $crosDomain() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/qyNativeJquery',
      dataType: 'jsonp',
      jsonpCallback: 'cb',
      success: function (data) {
        console.log(234)
        console.log(data, '我是成功的回调')
      }
    })
  },
  nativeCrosDomain() {
    let src = `http://localhost:3000/qyNativeJquery?callback=cb`
    var script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.src = src
    document.querySelector('head').appendChild(script)
  },
  postMessage() {
    console.log(window.iframes)
    window.frames['otherOrign'].contentWindow.postMessage(
      {text: '是'},
      'http://localhost:3000/index.html'
    )
  },
  socketIo() {
    let socket = io('http://localhost:8090');
    socket.on('news', function (data) {
      console.log(data)
      socket.emit('my other event', {text: '我是从端口过来的'})
    })
  }
}
export default corsAPI
