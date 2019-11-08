<template>
  <div>
    <Bread />
    <div class="layout-content">
      <div class="layout-content-main">
        <content>
          <Row>
            <Col>
              {{ msg }}
            </Col>
            <!--            <button @click="addPMT">点我异步增加2</button>
            <button @click="minusPMT({amount:3})">点我直接减少3</button>
            <div @click="change(msg)" v-text="msg" class="title"></div>-->
          </Row>
        </content>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'index',
  data() {
    return {
      age: 1,
      msg: '我是生命周期页面'
    }
  },
  computed: {},
  beforeCreate() {
    console.group('beforeCreate创建前的状态')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', `this.$el的值是`, this.$el)
    console.log('%c%s', 'color: red', `this.$data的值是`, this.$data)
    console.log('%c%s', 'color: red', `this.$data的值是`, this)
    console.groupEnd()
  },
  created() {
    console.log(this.getStatus(this.$route.path))
    console.group('created创建后的状态')
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', `this.$el的值是`, this.$el)
    console.log('%c%s', 'color: red', `this.$data的值是`, this.$data)
    console.groupEnd()
  },
  beforeMount() {
    console.group('beforeMount 挂载前状态===============》')
    console.log('%c%s', 'color:red', 'el     : ', this.$el) // 已被初始化
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ', this.$data) // 已被初始化
    console.log('%c%s', 'color:red', 'message: ', this.message) // 已被初始化
    console.groupEnd()
  },
  mounted() {
    console.log(this.$route)
    console.group('mounted挂载完毕之后的状态')
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.log('%c%s', 'color: red', 'this.$el的值是', this.$el)
    console.log('%c%s', 'color: red', 'this.$data的值是', this.$data)
    console.groupEnd()
  },
  methods: {
    getStatus(urlStr) {
      const urlStrArr = urlStr.split('/')
      return urlStrArr[urlStrArr.length - 1]
    }
  }
}
</script>

<style scoped></style>
