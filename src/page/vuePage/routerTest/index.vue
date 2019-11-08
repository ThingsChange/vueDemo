<template>
  <div>
    <div class="layout-content">
      <div class="layout-content-main">
        <Content>
          <div class="app">
            <div ref="msgDiv">{{ msg }}</div>
            <div v-if="msg1">Message got outside $nextTick: {{ msg1 }}</div>
            <div v-if="msg2">Message got inside $nextTick: {{ msg2 }}</div>
            <div v-if="msg3">Message got outside $nextTick: {{ msg3 }}</div>
            <button @click="changeMsg">
              Change the Message
            </button>
          </div>

          <p>
            <i-input
              v-model="value14"
              placeholder="Enter something..."
              @on-click="guess"
              icon="close-circled"
              clearable
              style="width: 200px"
            ></i-input>
            <span>这是测试路由守卫的页面</span>
            <span v-text="id"></span>
          </p>
          <p>生命周期图片：</p>
          <p>
            <span>
              1:new Vue({option})的操作; init 的过程：
            </span>
            <span>
              首先执行了init，该函数是vue组简历默认执行的,再改过程中，首先调用beforeCreate,然后在injections(注射)和reactivity(反应性)的时候，去调用
              created。所以，在你init的时候，事件已经调用了，我么在beforeCreated的时候千万不要修改data里面复制的数据，最早操作也要放在created里去做（添加一些行为，比如loading）
            </span>
          </p>
          <p>
            2:当created完成之后，他会去判断，instance 里面是否能含有
            ‘el’选项，如果没有，它会调用vm.$mount(el)这个方法，然后执行下一步。
            如果有的话，直接执行下一步，紧接着会判断是否含有“template”这个选项，如果有的话，它会吧template解析成一个render
            function ,这是一个 template编译的过程，结果是解析成了render 函数
            render(h){ return h('div',{},this.text) } render里面的h
            q其实就是Vue里面的createElement 方法，return 返回一个
            createElement方法，其中要传3个参数， 第一个参数就是创建的div标签；
            第二个参数传了一个对象，对象里面可以是我们组件上面的props，或者是事件之类的东西；
            第三个参数就是div标签里面的内容，这里我们指向了data里面的text。
            使用render函数的结果和我们之前使用template解析出来的结果是一样的，render函数是发生在
            beforeMount 和mounted之间的额。
            这也就从侧面说明了，在beforeMount的时候，$el还只是我们写在html
            里面的节点，然后到mounted的时候，它就吧渲染出来的内容挂在到了
            DOM接点水，这中间的过程其实是执行了render function 的内容
          </p>
          <p>
            在使用.vue文件开发的过程当中，我们在里面写了template模板，在经过了vue-loader的处理之后，就变成了render
            function，最终放到了vue-loader解析过的文件里面。这样做有什么好处呢？原因是由于在解析template变成render
            function的过程，是一个非常耗时的过程，vue-loader帮我们处理了这些内容之后，当我们在页面上执行vue代码的时候，效率会变得更高。
          </p>
          <p>
            beforeMount在有了render function的时候才会执行，当执行完render
            function之后，就会调用mounted这个钩子，
            在mounted挂载完毕之后，这个实例就算是走完流程了。
            后续的钩子函数执行的过程都是需要外部的触发才会执行。比如说有数据的变化，会调用beforeUpdate，然后经过Virtual
            DOM，最后updated更新完毕。当组件被销毁的时候，它会调用beforeDestory，以及destoryed。
            这就是vue实例从新建到销毁的一个完整流程，以及在这个过程中它会触发哪些生命周期的钩子函数。那说到这儿，可能很多童鞋会问，钩子函数是什么意思？
            钩子函数，其实和回调是一个概念，当系统执行到某处时，检查是否有hook，有则回调。说的更直白一点，每个组件都有属性，方法和事件。所有的生命周期都归于事件，在某个时刻自动执行。
            其实，当你跟面试官阐述到这儿的时候，面试官基本上已经满意你的回答了，隐约看到了你的技术功底。当然，如果你还想更进一步，让面试官对你刮目相看，达到加分的效果，你还可以这样说：
          </p>
          <div>
            <img src="@/assets/vuePage/lifecycle.png" alt="" />
          </div>
        </Content>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      id: 0,
      value14: 'Hello World',

      msg: 'Hello Vue.',
      msg1: '',
      msg2: '',
      msg3: ''
    }
  },
  methods: {
    changeMsg() {
      this.msg = 'Hello world.'
      this.msg1 = this.$refs.msgDiv.innerHTML
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
      this.msg3 = this.$refs.msgDiv.innerHTML
    },
    guess() {
      console.log('我就是点击方法')
    }
  },
  sada() {},
  watch: {
    $route: function(to, from) {
      console.log(to, from)
    }
  },
  beforeRouteUpdate() {
    console.log('进入beforRouteUpdate钩子函数')
  },
  render(h) {
    throw new TypeError('render error')
  },
  renderError(h, err) {
    return h('div', {}, err.stack)
  },
  beforeCreate() {
    console.group('进入beforCreate的钩子函数')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', 'this.$el的值是' + this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是' + this.$data)
    console.groupEnd()
  },
  created() {
    console.group('created创建后的状态')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', 'this.$el的值是' + this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是' + this.$data)
    console.groupEnd()
    this.id = this.$route.params.id
  },
  beforeMount() {
    console.group('beforeMount 挂载前状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) // 已被初始化
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
    console.groupEnd()
  },
  mounted() {
    console.group('mounted挂在之后的状态')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', 'this.$el的值是' + this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是' + this.$data)
    console.groupEnd()
  }
  /* beforeRouteEnter(to,from,next){
        sessionStorage.setItem('nowIndex',+sessionStorage.getItem('nowIndex')+1)
        console.group('路由守卫测试：这里是beforeRouteEnter',sessionStorage.getItem('nowIndex'));
        console.log('beforeRouterEnter的执行顺序是第几名呢');
          console.log(to,from,next);
          next();
        // next('/')
      }
*/
}
</script>

<style scoped></style>
