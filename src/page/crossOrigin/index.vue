<template>
    <div>
      <Bread/>
      <div class='layout-content'>
        <div class='layout-content-main'>
      <Content>
        <h1 :label="msg">{{msg}}</h1>
        <h1 v-text="studyList"></h1>
        <Row>
          <Col>
            <label>这里是从vuex中取到的值</label><span v-text="modifyTimes"></span>
            <label>这里是从bus中传来的的值:</label><span style="color:red" v-text="busMsg"></span>
          </Col>
        </Row>

        <button @click="refresh(1)" v-text="button1"></button>
        <button @click="refresh(2)" v-text="button2"></button>
        <button @click="refresh(3)" v-text="button3"></button>
        <button @click="getDataNotSimple" v-text="button5"></button>
        <button @click="getData" v-text="button4"></button>
        <button @click="getDataBy$" v-text="button6"></button>
        <button @click="nativeCrosDomain" v-text="button7"></button>
        <button @click="postMessage" v-text="button8"></button>
        <button @click="socketIo" v-text="button9"></button>
        <router-view :key="$route.fullpath" v-text="button3"></router-view>
        <router-link to="2" :key="$route.fullpath" >About</router-link>
        <iframe  id="otherOrign" src="http://localhost:3000"></iframe>
        <h1 v-text="whichOne"></h1>
        <ul>
          <li v-for="item in name" v-text="item" :key="item"></li>
        </ul>
      </Content>
        </div>
      </div>
    </div>
</template>

<script>
import { getList } from '@/common/commonConst'
import { mapState, mapMutations, mapActions } from 'vuex'

import { corsAPI } from '@/api/index'
export default {
  name: 'index',
  data() {
    return {
      busMsg:'busTest原始值',
      theme2: 'dark',
      msg: '我是首页',
      studyList: '生命周期',
      button1: '去1',
      button2: '去2',
      button3: '在2',
      button4: '我要跨域请求数据',
      button5: '非简单跨域请求数据',
      button6: 'JQUERY跨域请求数据',
      button7: 'jsonP  Script跨域请求数据',
      button8: 'H5 POSTmessage跨域请求数据',
      button9: 'H5 socket.io 新协议 跨域请求数据',
      name: [0]

      //      whichOne:whichOne,
    }
  },
  computed: {
    whichOne() {
      console.log(this.$route.matched)
      return this.$route.params.id
    },
    ...mapState({
      modifyTimes:'modifyTimes'
    })
  },
  /*  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log(to,from);
     console.log(typeof this.getStatus(this.$route.path))
      this.name=getList(+this.getStatus(this.$route.path));
    }
  }, */
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(this)
    console.log(to, from, next)
    console.log(+this.getStatus(to.path))
    this.name = getList(+this.getStatus(to.path))
    next()
    //    this.$router.push({path:to.path});
  },
  methods: {
    socketIo() {
      corsAPI.socketIo()
    },
    postMessage() {
      corsAPI.postMessage()
    },
    // jsonp是get请求
    nativeCrosDomain() {
      corsAPI.nativeCrosDomain()
    },
    getDataBy$() {
      corsAPI.$crosDomain()
    },
    getDataNotSimple() {
      corsAPI.getCorsDataNotSimple()
    },
    getData() {
      corsAPI.getCorsData().then(data => {
        console.log(data)
      })
    },
    refresh(params) {
      if (params === 3) {
        console.log(params)
        this.$router.go(-1)
        return
      }
      this.$router.push({ name: 'index', params: { id: params } })
    },
    getStatus(urlStr) {
      const urlStrArr = urlStr.split('/')
      return urlStrArr[urlStrArr.length - 1]
    }
  },
  created(){
    console.log('他么的不进来吗');
    // debugger;
    let that=this;
    this.$root.bus.$on('busTest',t=>{
      // debugger;
      that.busMsg+=t;
    })
  }
  /* beforeCreate() {
    console.group('beforeCreate创建前的状态')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', `this.$el的值是${this.$el}`)
    console.log('%c%s', 'color: red', `this.$data的值是 ${this.$data}`)
    console.groupEnd()
  },
  created() {
    console.log(this.getStatus(this.$route.path))
    console.group('created创建后的状态')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', 'this.$el的值是' + this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是' + this.$data)
    console.groupEnd()
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
    console.log(this.$route)
    console.group('mounted挂载完毕之后的状态')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', 'this.$el的值是' + this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是' + this.$data)
    console.groupEnd();
  }*/
}
</script>
