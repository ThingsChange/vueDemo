/**
 *
 * @author  晴云
 * @create 2020-04-23 11:02
 * @note 干什么的呢？
 **/

/* 此文件未使用，只是为了让idea可以识别实际位置 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.svg'],
    alias: {
      '@': resolve('./src'),
      '@c': resolve('./src/components'),
      'vue$': 'vue/dist/vue.esm.js',
      '@h': resolve('./src/helpers'),
      '@v': resolve('./src/vuex'),
      '@page': resolve('./src/page')
    }
  }
}
