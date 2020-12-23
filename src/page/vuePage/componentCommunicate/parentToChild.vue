<template>
  <div>
    <div>下面是父组件的内容</div>
    名字：<input type="text" v-model="parentInfo.name" />
    年龄：<input type="text" v-model="parentInfo.age"  />
    性别：<input type="text" v-model="sex" />
    <my-child :parent-info="parentInfo" :extral-obj="extralObj"
              :sex="sex" v-on:timeFlies="timeFlies"
    ></my-child>
  </div>
</template>

<script>
import myChild from './my-child'
export default {
  name: 'parentToChild',
  data() {
    return {
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
    'my-child': myChild
  },
  methods: {
    timeFlies(data) {
      console.log('这里是 父组件的方法 的结果-------------', data)
      this.parentInfo.age += data
    }
  }
}
</script>

<style scoped></style>
