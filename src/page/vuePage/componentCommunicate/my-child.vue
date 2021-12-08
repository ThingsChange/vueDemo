<template>
  <div>
    <button @click="xiugaiAge">MyChild手动修改</button>
    <button @click="changeSex">泰国如何不服军役------子</button>
    <button @click="xiugaiAge">修改年龄------子</button>
    <p>{{sex}}</p>
<!--    <p>{{parentInfo.age}}</p>-->
<!--    <p>{{age}}</p>-->
    <!--    <div>下面是子组件的内容：</div>
    父组件传递过来的名字：<input type="text" v-model="fromParent.name">
    父组件传递过来的年龄：<input type="text" v-model="fromParent.age"><span>{{fromParent.age}}</span>
    父组件传递过来的性别：<input type="text" v-model="c_sex">
    <div>运用computed计算的内容：</div>
    父组件传递过来的名字：<input type="text" v-model="pinfofromComputed.name">
    父组件传递过来的年龄：<input type="text" v-model="pinfofromComputed.age">
    父组件传递过来的年龄：<span>{{pinfofromComputed.age}}</span>
    父组件传递过来的性特别：<input type="text" v-model="com_sex">-->
    <H1>MyChild页面</H1>$attrs：包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。
    <p>$attrs: {{ $attrs }}</p>
    <p>$props: {{ $props }}</p><b>$props：当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象属性的访问。</b>
    <p>$listeners: {{ $listeners }}</p> <b>$listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。</b>
    <p>my-Child-1组件</p>
    <my-child1 v-bind="$attrs" v-on="$listeners"></my-child1>
  </div>
</template>

<!--理论上$attrs会包含所有的父组件绑定到子组件，（不包含class  style 的特性，
但是如果本身组件有从父组件中单独用props接收的，
$attrs就会移除此属性-->
<script>
import myChild1 from './my-child-1'
export default {
  name: 'my-child',
  inheritAttrs: false,
  data() {
    return {
      // fromParent:JSON.parse(JSON.stringify(this.parentInfo)),
      // c_sex:this.sex//父组件的值作为初始值
    }
  },
  props: {
      parentInfo: {
        type: Object
      },
      sex:{
        type:String
      },
    age:['String']
    },
  computed: {
    pinfofromComputed() {
      return Object.assign({}, this.parentInfo)
    },
    com_sex() {
      return this.sex
    }
  },
  methods: {
    changeSex(){
      this.sex=this.sex==="男"?'女':'男'
      this.$emit('update:sex', this.sex)
    },
    xiugaiAge() {
      // this.age++;
      // this.$emit('update:age', this.age)
      // this.sex='女'
      // this.parentInfo.age++
        this.$emit('timeFlies', 1)
    }
  },
  watch: {
    sex: {
      deep: true,
      handler: function(newVal) {
        // this.c_sex = this.sex
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
    'my-child1': myChild1
  },
  mounted() {
    console.log('这里是 this.$props 的结果-------------', this.$props,this.$listeners)
  }
}
</script>

<style scoped></style>
