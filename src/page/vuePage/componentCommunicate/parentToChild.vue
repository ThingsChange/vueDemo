<template>
  <div>
    <div>下面是父组件的内容</div>
    名字：<input type="text" v-model="parentInfo.name" />
    年龄：<input type="text" v-model="parentInfo.age"  />
    性别：<input type="text" v-model="sex" />
    <button @click="changeSex">泰国如何不服军役</button>
    <my-child v-if="showChild" :parent-info="parentInfo" :extral-obj="extralObj"
              v-bind:sex.sync="sex" v-on:timeFlies="timeFlies"
              :age.sync="parentInfo.age"
    ></my-child>
    <button @click="showChild=true">及哈哈哈哈</button>
  </div>
</template>

<script>
// import myChild from './my-child'
import(
  /*  webpackPrefetch: true */
  /* webpackChunkName: "myChild" */
  './my-child.vue'
  )
export default {
  name: 'parentToChild',
  data() {
    return {
      showChild:false,
      parentSelf: {
        context: 'parent专用属性'
      },
      extralObj: {
        title: '测试间隔传值',
        content: '不被直接子组件认作Props的属性，即子组件的props中并没有这个值'
      },
      parentInfo: {
        name: '逗比',
        age: 18
      },
      sex: '男'
    }
  },
  components: {
    'my-child': ()=>import(/* webpackChunkName: "myChild" */ './my-child.vue')
  },
  methods: {
    timeFlies(data) {
      console.log('这里是 父组件的方法 的结果-------------', data)
      this.parentInfo.age += data
    },
    changeSex(data) {
      console.log('这里是 父组件的方法 的结果-------------', data)
      this.sex=this.sex==="男"?'女':'男'
    }
  }
}
</script>

<style scoped></style>
