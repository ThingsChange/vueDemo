<template>
  <div class="hello">
    <Bread></Bread>
    <div class='layout-content'>
      <div class='layout-content-main'>
        <content>
          <h2>{{ msg }}</h2>
          <ul ref="abc" >
            <li @click="goToIndex">点我去首页</li>
          </ul></content>
        <Button class="btn-color">我就是测试</Button>
        <Button type="primary" @click="changeColor">换色</Button>
        <button>按钮</button>
      </div>
      <SvgIcon name="orderDiscount" width=".16" height=".16" :color="mainColor" class="text" ></SvgIcon>
    </div>

  </div>
</template>

<script>
  // import {mapState} from  'vuex'
  // import SvgIcon from '@/components/SvgIcon/index';
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      flag:false
    }
  },
  computed:{
    // ...mapState(['mainColor'])
  },
  methods: {
    goToIndex() {
      console.log(this.$router)
      console.log(this.$router.push({ name: 'index', params: { id: 1 } }))
      //      console.log(this.$router.push('index'))
    },
    changeColor(){
      if(this.flag){
        this.loadCssCode(' :root {--btnColor: green;}')
      }else{
        this.loadCssCode(' :root {--btnColor: yellow;}')
      }
      this.flag=!this.flag
    },
     loadCssCode(code){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    //for Chrome Firefox Opera Safari
    style.appendChild(document.createTextNode(code));
    //for IE
    //style.styleSheet.cssText = code;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
  }
  },
  components:{
    // SvgIcon
  },
  created(){
    // this.loadCssCode(' :root {--btnColor: green;}')
    // console.log('这里是 this.$refs[] 的结果-------------', this.$refs.abc)
    // console.log('这里是 lixiu 的结果-------------', process.env.lixiu)
  },
  mounted() {
    console.log('这里是 mounted 的结果-------------', 'mounted')
  },
  updated() {
    console.log('这里是 this.$refs[] 的结果-------------', this.$refs.abc)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .btn-color{
    color: blue;
    background-color: var(--btnColor)
  }
  button{
    outline: none;
    border: none;
    color: white;
    padding: .3rem .1rem;
    border-radius: .2rem;
    cursor: pointer;
    background: linear-gradient(#3de5fb,#26acbd);
    text-shadow: 0 1px 1px grey;
    /*位置的三个参数
          1  X轴方向扩散，负值在左，正值在右
          2 Y轴方向扩散，正值向下，负值向上
          3 模糊半径   0时不模糊，就正常的阴影，越大越模糊 类似0实体阴影，数值大的变成了模糊阴影
          4，颜色可放在这三个数字前面，也可以放在这三个数字后面，这四个参数为一组，可以设置多组。
          */
    box-shadow: 0  .2rem 0 #068494,
                            0 .2rem .2rem grey;
  }
  button:active{
    box-shadow: 0  .1rem 0 #068494,
    0 .1rem .1rem grey;
    transform: translate(0,.05rem);
  }
</style>
