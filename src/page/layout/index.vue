<template>
  <div class="layout"  :class="{'layout-hide-text': expandLeft}">
    <Row  type="flex" class="row-height">
      <Col :span="spanLeft" class="layout-menu-left">
        <div class="layout-logo-left">
          <img class="programImg" src="@/assets/zhongzhi.jpg" alt="">
          <p>各种DEMO</p>
        </div>
        <MenuSelf :menu-show="menuIsShow"/>
      </Col>
      <Col :span="spanRight">
        <div class="layout-header">
          <Button type="text" @click="toggleClick" span="2">
            <Icon type="navicon" size="32"></Icon>
          </Button>
          <div class="layout-quit" @click="quitLogin">
            退出登录
          </div>
        </div>
        <router-view :key="$route.path+'/'+new Date()">
         </router-view>
        <div class="layout-copy">
          2018 &copy;QY-NeedStudyHard
        </div>
      </Col>

    </Row>
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
      menuIsShow: true,
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
/*    console.log(this)
    console.log(to, from, next)
    console.log(+this.getStatus(to.path))*/
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
        this.menuIsShow=false;
        this.spanLeft = 2;
        this.spanRight = 22;
      } else {
        this.menuIsShow=true;
        this.spanLeft = 3;
        this.spanRight = 21;
      }
    },
    selectMenu(data) {
      console.log(routeConfig, 123);
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
  /*beforeCreate() {
    console.group('beforeCreate创建前的状态')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', `this.$el的值是${this.$el}`)
    console.log('%c%s', 'color: red', `this.$data的值是 ${this.$data}`)
    console.groupEnd()
  },*/
  created() {
   /* console.log('*******************************************************');
    console.log(this.getStatus(this.$route.path))
    console.group('created创建后的状态11111111111111111')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', 'this.$el的值是' + this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是' + this.$data)
    console.groupEnd()*/
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
    /* this.$nextTick(() => {
      if (!this.$refs.length) return;// 未登录页面所改
      this.$refs.menus.updateOpened();
      this.$refs.menus.updateActiveName();
    });*/
  },
  beforeMount() {
  /*  console.group('beforeMount 挂载前状态111111111111111===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) // 已被初始化
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
    console.groupEnd()*/
  },
  mounted() {
  /*  console.log(this.$route)
    console.group('mounted挂载完毕之后的状态11111111111111111111')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', 'this.$el的值是' + this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是' + this.$data)
    console.groupEnd();*/
  }
}
</script>
