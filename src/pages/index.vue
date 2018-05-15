<template>
  <div>
    <h1 :label="msg">{{msg}}</h1>
    <h1 v-text="studyList"></h1>
    <button @click="refresh(1)" v-text="button1"></button>
    <button @click="refresh(2)" v-text="button2"></button>
    <button @click="refresh(3)" v-text="button3"></button>
    <router-view :key="$route.fullpath" v-text="button3"></router-view>
    <router-link to="2" :key="$route.fullpath" >About</router-link>
    <h1 v-text="whichOne"></h1>
    <ul>
      <li v-for="item in name" v-text="item"></li>
    </ul>
  </div>
</template>
<script>
  import  {getList} from '@/common/commonConst'
export default{
  name: 'index',
  data () {
    return {
      msg: '我是首页',
      studyList: '生命周期',
      button1:'去1',
      button2:'去2',
      button3:'在2',
      name:[0],

//      whichOne:whichOne,
    }
  },
  computed:{
    whichOne:function (){
      console.log(this.$route.matched)
      return this.$route.params.id;
    }
  },
/*  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log(to,from);
     console.log(typeof this.getStatus(this.$route.path))
      this.name=getList(+this.getStatus(this.$route.path));
    }
  },*/
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(this)
    console.log(to, from, next);
    console.log(+this.getStatus(to.path));
    this.name=getList(+this.getStatus(to.path));
    next()
//    this.$router.push({path:to.path});
  },
  methods:{
    refresh(params){
      if (params === 3) {
        console.log(params)
        this.$router.go(-1)
        return
      }
      this.$router.push({name:'index',params:{id:params}})
    },
    getStatus (urlStr) {
      var urlStrArr = urlStr.split('/')
      return urlStrArr[urlStrArr.length - 1]
    }
  },
  beforeCreate ()  {
    console.group('beforeCreate创建前的状态')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', 'this.$el的值是' + this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是' + this.$data)
    console.groupEnd()

  },
  created () {
    console.log(this.getStatus(this.$route.path))
    console.group('created创建后的状态')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', 'this.$el的值是' + this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是' + this.$data)
    console.groupEnd()
  },
  beforeMount: function () {
    console.group('beforeMount 挂载前状态===============》');
    console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    console.groupEnd()

  },
  mounted () {
    console.log(this.$route)
    console.group('mounted挂载完毕之后的状态')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', 'this.$el的值是' + this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是' + this.$data)
    console.groupEnd()

  }
}
</script>
