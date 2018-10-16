<template>
  <div>
    <div>下面是子组件的内容：</div>
    父组件传递过来的名字：<input type="text" v-model="fromParent.name">
    父组件传递过来的年龄：<input type="text" v-model="fromParent.age"><span>{{fromParent.age}}</span>
    父组件传递过来的性别：<input type="text" v-model="c_sex">
    <div>运用computed计算的内容：</div>
    父组件传递过来的名字：<input type="text" v-model="pinfofromComputed.name">
    父组件传递过来的年龄：<input type="text" v-model="pinfofromComputed.age">
    父组件传递过来的年龄：<span>{{pinfofromComputed.age}}</span>
    父组件传递过来的性特别：<input type="text" v-model="com_sex">
  </div>
</template>

<script>
  export default {
    name: "my-child",
    data(){
      return {
        fromParent:JSON.parse(JSON.stringify(this.parentInfo)),
        c_sex:this.sex//父组件的值作为初始值
      }
    },
    props: {
      parentInfo: {
        type: Object
      },
      sex:{
        type:String
      }
    },
    computed:{
      pinfofromComputed(){
        return  Object.assign({},this.parentInfo)
      },
      com_sex(){
        return this.sex
      }
    },
    watch:{
      sex:{
        deep:true,
        handler:function(newVal){
          this.c_sex=this.sex;
        }
      },
      parentInfo:{
        deep:true,
        handler:function(newVal){
          this.fromParent=JSON.parse(JSON.stringify(newVal));
        }
      }
    }

  }
</script>

<style scoped>

</style>
