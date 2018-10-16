import { url } from '../../helpers'

const loadVconsole = () => {
  require.ensure([], (require) => {
    let VConsole = require('./vconsole');
    console.log(VConsole.VConsole);
    let a=VConsole.VConsole;
    window.vConsole = new a();
  }, 'mapshop');
}

// 浏览器 console 中开启 debug
// eslint-disable-next-line
(function(){
  window.utils = {}
  Object.defineProperty(window.utils, 'debug', {
    set(newVal) {
      if (newVal) {
        loadVconsole()
      }
    }
  });
})()

// url query 中开启 debug
const params = url.query2Dict(window.location.href);

if (params.debug) {
  loadVconsole()
}
