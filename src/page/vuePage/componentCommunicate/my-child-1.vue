<template>
  <div>
    <div>下面是my-Child-1的内容：</div>
    <!-- 父组件传递过来的名字：<input type="text" v-model="fromParent.name">
    父组件传递过来的年龄：<input type="text" v-model="fromParent.age"><span>{{fromParent.age}}</span>
    父组件传递过来的性别：<input type="text" v-model="c_sex">
    <div>运用computed计算的内容：</div>
    父组件传递过来的名字：<input type="text" v-model="pinfofromComputed.name">
    父组件传递过来的年龄：<input type="text" v-model="pinfofromComputed.age">
    父组件传递过来的年龄：<span>{{pinfofromComputed.age}}</span>
    父组件传递过来的性特别：<input type="text" v-model="com_sex">-->
    <p>$attrs:{{ $attrs }}</p>
    <p>$listeners: {{ $listeners }}</p>
    <p>extralObj: {{ extralObj }}</p>
    <!--<p>  <button @click="addAge">年龄加1</button></p>-->
    <my-child-11 v-bind="$attrs" v-on="$listeners"></my-child-11>
  </div>
</template>
<script>
import myChild11 from './my-child-11'
export default {
  name: 'my-child',
  data() {
    return {}
  },
  props: {
    extralObj: {
      type: Object
    }
  },
  computed: {
    pinfofromComputed() {
      return Object.assign({}, this.parentInfo)
    },
    com_sex() {
      return this.sex
    }
  },
  watch: {
    sex: {
      deep: true,
      handler: function(newVal) {
        this.c_sex = this.sex
      }
    },
    parentInfo: {
      //此乃推荐写法，父组件变更数据，子组件可以收到，子组件变更不影响父组件
      deep: true,
      handler: function(newVal) {
        this.fromParent = JSON.parse(JSON.stringify(newVal))
      }
    }
  },
  components: {
    'my-child-11': myChild11
  },
  methods: {
    /*      addAge(){
        this.$emit('timeFlies',[123])
      }*/
  }
}
</script>

<style scoped></style>
