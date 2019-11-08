<template>
  <div class="hello">
    <Bread></Bread>
    <div class="layout-content">
      <div class="layout-content-main">
        <content>
          <h2>{{ msg }}</h2>
          <ul ref="abc">
            <li @click="goToIndex">点我去首页</li>
          </ul></content
        >
        <Button class="btn-color">我就是测试</Button>
        <Button type="primary" @click="changeColor">换色</Button>
        <button class="liti-button">按钮</button>
        <div class="lvjing"></div>
        <div class="jianbianse"></div>
      </div>
      <!--<SvgIcon name="orderDiscount" width=".16" height=".16" :color="'green'" class="text" ></SvgIcon>-->
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
      flag: false
    }
  },
  computed: {
    // ...mapState(['mainColor'])
  },
  methods: {
    goToIndex() {
      console.log(this.$router)
      console.log(this.$router.push({ name: 'index', params: { id: 1 } }))
      //      console.log(this.$router.push('index'))
    },
    changeColor() {
      const RandomColor = () =>
        '#' +
        Math.floor(Math.random() * 0xffffff)
          .toString(16)
          .padEnd(6, '0')
      //这个地方加了一个88是为了添加一个透明度的效果
      const color = RandomColor() + '88'
      if (this.flag) {
        this.loadCssCode(' :root {--btnColor: green; --c :' + color + '}')
      } else {
        this.loadCssCode(' :root {--btnColor: yellow;--c :' + color + '}')
      }
      this.flag = !this.flag
    },
    loadCssCode(code) {
      var style = document.createElement('style')
      style.type = 'text/css'
      style.rel = 'stylesheet'
      //for Chrome Firefox Opera Safari
      style.appendChild(document.createTextNode(code))
      //for IE
      //style.styleSheet.cssText = code;
      var head = document.getElementsByTagName('head')[0]
      head.appendChild(style)
    }
  },
  components: {
    // SvgIcon
  },
  created() {
    // this.loadCssCode(' :root {--btnColor: green;}')
    console.log('这里是 this.$refs[] 的结果-------------', this.$refs.abc)
    // console.log('这里是 lixiu 的结果-------------', process.env.lixiu)
    setTimeout(()=>{
      sessionStorage.setItem('a',+sessionStorage.getItem('a')+1)
      // location.reload()
    },1000)
  },
  mounted() {
    console.log('这里是HelloWord mounted 的结果-------------', 'mounted')
  },
  updated() {
    console.log('这里是 this.$refs[] 的结果-------------', this.$refs.abc)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
.btn-color {
  color: blue;
  background-color: var(--btnColor);
}
.liti-button {
  outline: none;
  border: none;
  color: white;
  padding: 0.3rem 0.1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  background: linear-gradient(#3de5fb, #26acbd);
  text-shadow: 0 1px 1px grey;
  /*位置的三个参数
          1  X轴方向扩散，负值在左，正值在右
          2 Y轴方向扩散，正值向下，负值向上
          3 模糊半径   0时不模糊，就正常的阴影，越大越模糊 类似0实体阴影，数值大的变成了模糊阴影
          4，颜色可放在这三个数字前面，也可以放在这三个数字后面，这四个参数为一组，可以设置多组。
          */
  box-shadow: 0 0.2rem 0 #068494, 0 0.2rem 0.2rem grey;
}
.liti-button:active {
  box-shadow: 0 0.1rem 0 #068494, 0 0.1rem 0.1rem grey;
  transform: translate(0, 0.05rem);
}

.lvjing {
  width: 225px;
  height: 225px;
  /*如果放开下一行，那么--c取值就会就近取值，而不是全局的那个*/
  /*--c: #ff000088;*/
  background: linear-gradient(var(--c), var(--c)),
    url('../assets/老子不干了.jpg');
}
.jianbianse {
  background-color: #ffffff;
  border: 0 none;
  height: 120px;
  margin: 40px auto;
  padding: 0.5em;
  width: 80%;
  -moz-border-radius: 1em;
  -webkit-border-radius: 1em;
  border-radius: 1em;
  line-height: 2;
  font-size: 18px;
  /*
    webkit内核的safari、 Chrome的Linear Gradients (线性渐变) 基本语法：background-image:-webkit-gradient(type,x1 y1, x2 y2, from(开始颜色值),to(结束颜色值), [color-stop(偏移量小数,停靠颜色值),...] );
-webkit-gradient是background的一个属性值；
webkit内核的Linear Gradients (线性渐变) 第一组参数type（类型）为 linear；
第二组参数是,x1 y1, x2 y2,当成颜色渐变体的两个点的坐标就是。x1,x2,y1,y2的取值范围为0%-100%，
      当x1,x2,y1,y2取值为极值的时候，x1和x2可以取值left（或0%）或right（或100%），
      y1和y2可以取值top（或0%）或bottom（或100%）；
      值正向向下，渲染方向，垂直向下渲染，0, 5% ,0,6%
当x1等于x2，y1不等于y2，实现垂直渐变，调整y1，y2的值可以调整渐变半径大小；
当y1等于y2，x1不等于x2，实现水平渐变，调整x1，x2的值可以调整渐变半径大小；
当y1不等于y2，x1不等于x2，实现角度渐变，当x1,x2,y1,y2取值为极值的时候接近垂直渐变或水平渐变；
当x1等于x2，y1等于y2，实现没有渐变，取from色，即“ from(颜色值) ”；
实现垂直渐变和水平渐变渐变时，x1和x2可以最简单的取值是left（或0%）或right（或100%）,y1和y2可以最简单的取值是top（或0%）或bottom（或100%）；
from(开始颜色值),to(结束颜色值)是两个渐变颜色值；
[color-stop(偏移量<小数>,停靠颜色值),...]：可以使用多个color-stop，如果渐变只有2个颜色，那么可以不使用该参数；偏移量必须为小数，如果偏移量>=1,那么该color-stop相当于无效；
firefox下的Linear Gradients (线性渐变) 请参阅：
ie下可以使用渐变滤镜，请参阅： http://msdn.microsoft.com/en-us/library/ms532997(VS.85).aspx
    */
  background-image: -webkit-gradient(
    linear,
    0% 50%,
    0% 50%,
    from(rgb(153, 153, 153)),
    to(rgb(250, 17, 33))
  );
}
</style>
