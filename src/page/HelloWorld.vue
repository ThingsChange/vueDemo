<template>
  <div class="hello">
    <Bread></Bread>
    <div class='layout-content'>
      <div class='layout-content-main'>
        <content>
          <h2>{{ msg }}</h2>
          <ul>
            <li @click="goToIndex">点我去首页</li>
          </ul></content>
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
    }
  },
  components:{
    // SvgIcon
  },
  created(){
    console.log('这里是 lixiu 的结果-------------', process.env.lixiu)
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
</style>
