<template>
  <div class="layout"  :class="{'layout-hide-text': expandLeft}">
    <Row  type="flex" class="row-height">
      <Col :span="spanLeft" class="layout-menu-left">
        <div class="layout-logo-left">
          <img class="programImg" src="@/assets/zhongzhi.jpg" alt="">
          <p>各种DEMO</p>
        </div>
        <Menu @on-select="selectMenu" :active-name="AC" theme="dark" width="auto" accordion :open-names="onames" ref="menus">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              <span :class="{'layout-hide-text':expandLeft}">域的知识</span>
            </template>
            <MenuItem  name="1-1">跨域实现</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"></Icon>
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="stats-bars"></Icon>
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
      </Col>
      <Col :span="spanRight" class="content-layout">
        <div class="layout-header">
          <Button type="text" @click="toggleClick" span="2">
            <Icon type="navicon" size="32"></Icon>
          </Button>
          <div class="layout-quit" @click="quitLogin">
            退出登录
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <router-view :key="$route.path+'/'+new Date()"></router-view>
        </transition>
        <div class="layout-copy">
          2018 &copy;QY-NeedStudyHard
        </div>
      </Col>

    </Row>
<!--    <Layout>
&lt;!&ndash;      <Sider hide-trigger>
        <Menu :theme="theme2" :open-names="['1']" accordion>

      </Menu>
      </Sider>&ndash;&gt;
      <Content>
        <Footer>Footer</Footer>
        <h1 :label="msg">{{msg}}</h1>
        <h1 v-text="studyList"></h1>
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
    </Layout>-->
  </div>
</template>

<script>
import { getList } from '@/common/commonConst'
import {routeConfig} from '@/config/menuRouter'
import { corsAPI } from '@/api/index'
export default {
  name: 'index',
  data() {
    return {
      AC: '',
      onames: [],
      spanLeft: 3,
      spanRight: 21,
      theme2: 'dark'
    }
  },
  computed: {
    expandLeft() {
      return this.spanLeft < 3
    }
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
    },
    toggleClick() {
      if (this.spanLeft === 3) {
        this.spanLeft = 2;
        this.spanRight = 22;
      } else {
        this.spanLeft = 3;
        this.spanRight = 21;
      }
    },
    selectMenu(data) {
      this.$router.push(routeConfig[data]);
    },
    // 退出登录
    quitLogin () {
      // 销毁cookie存储的token，此处待做

      // 销毁h5缓存
      sessionStorage.removeItem('loginStaus')
      location.reload()
    }
  },
  beforeCreate() {
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
    const path = this.$route.path;
    let submenu = '';
    for (let key in routeConfig) {
      if (routeConfig[key] === path) {
        submenu = key;
      }
    }
    this.AC = submenu;
    let arr = [];
    arr[0] = submenu[0];
    this.onames = arr;
    this.$nextTick(() => {
      if (!this.$refs.length) return;// 未登录页面所改
      this.$refs.menus.updateOpened();
      this.$refs.menus.updateActiveName();
    });
  }
}
</script>
<style scoped>
  .programImg{
    width: 80%;
    height: 80%;
  }
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }

  .row-height {
    height: 100%;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 600px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
  }

  .header-button {
    padding: 15px 15px;
    float: right;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  .layout-logo-left {
    width: 100px;
    height: 100px;
    /*background: #5b6270;*/
    border-radius: 3px;
    margin: 15px auto;
    text-align: center;
  }

  .layout-logo-left p {
    color: white;
  }

  .layout-logo-left img {
    border-radius: 50%;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .ivu-col {
    transition: width 0.2s ease-in-out;
  }

  .content-layout {
    overflow-y: auto;
  }

  span.layout-hide-text {
    display: none;
  }
  .layout-quit{
    float:right;
    line-height:60px;
    margin-right:30px;
    color:#9ba7b5;
    font-weight:bolder;
  }
</style>
