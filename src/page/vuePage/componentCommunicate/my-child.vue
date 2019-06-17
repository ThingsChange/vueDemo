<template>
  <div>
    <button @click="xiugaiAge">手动修改</button>
<!--    <div>下面是子组件的内容：</div>
    父组件传递过来的名字：<input type="text" v-model="fromParent.name">
    父组件传递过来的年龄：<input type="text" v-model="fromParent.age"><span>{{fromParent.age}}</span>
    父组件传递过来的性别：<input type="text" v-model="c_sex">
    <div>运用computed计算的内容：</div>
    父组件传递过来的名字：<input type="text" v-model="pinfofromComputed.name">
    父组件传递过来的年龄：<input type="text" v-model="pinfofromComputed.age">
    父组件传递过来的年龄：<span>{{pinfofromComputed.age}}</span>
    父组件传递过来的性特别：<input type="text" v-model="com_sex">-->
    <p>$attrs: {{$attrs}}</p>
    <p>$listeners: {{$listeners}}</p>
    <p>my-Child-1组件</p>
    <my-child1 v-bind="$attrs" v-on="$listeners" ></my-child1>

  </div>

</template>

<!--理论上$attrs会包含所有的父组件绑定到子组件，（不包含class  style 的特性，
但是如果本身组件有从父组件中单独用props接收的，
$attrs就会移除此属性-->
<script>
import myChild1 from './my-child-1'
  export default {
    name: "my-child",
    inheritAttrs:false,
    data(){
      return {
        // fromParent:JSON.parse(JSON.stringify(this.parentInfo)),
        // c_sex:this.sex//父组件的值作为初始值
      }
    },
    /*props: {
      parentInfo: {
        type: Object
      },
      sex:{
        type:String
      }
    },*/
    computed:{
      pinfofromComputed(){
        return  Object.assign({},this.parentInfo)
      },
      com_sex(){
        return this.sex
      }
    },
    methods:{
      xiugaiAge(){
        // this.sex='女'
        // this.parentInfo.age++
      }
    },
    watch:{
      sex:{
        deep:true,
        handler:function(newVal){
          this.c_sex=this.sex;
        }
      },
      parentInfo:{//此乃推荐写法，父组件变更数据，子组件可以收到，子组件变更不影响父组件
        deep:true,
        handler:function(newVal){
          this.fromParent=JSON.parse(JSON.stringify(newVal));
        }
      }
    },
    components:{
      "my-child1":myChild1
    }

  }
</script>

<style scoped>

</style>
