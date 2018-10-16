<template>
  <div>
    <div>下面是父组件的内容</div>
    名字：<input type="text" v-model="parent.name">
    年龄：<input type="text" v-model="parent.age">
    性别：<input type="text" v-model=sex>
    <my-child :parent-info="parent" :sex="sex"></my-child>
  </div>
</template>

<script>
  import  myChild from './my-child'
    export default {
      name: "parentToChild",
      data(){
        return{
          parent:{
            name:'逗比',
            age:'18'
          },
          sex:'男'
        }
      },
      components:{
        'my-child':myChild
      }
    }
</script>

<style scoped>

</style>
