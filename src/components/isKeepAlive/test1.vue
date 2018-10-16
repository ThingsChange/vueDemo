<template>
    <Content class="people-wrap">
      人数：<Input class="test-deep-class"  type="text" placeholder="纯粹为了验证深度样式-深度作用选择器" v-model="peopleNum"/>
    </Content>
</template>

<script>
    export default {
        name: "test1",
      data(){
          return {
            peopleNum:''
          }
      },
      activated(){
          console.log('test1组件激活');
      },
      deactivated(){
        console.log('test1组件停用');
      }
    }
</script>

<style scoped>
  .people-wrap{
  margin-top: 50px;
  }
/*  .people-wrap /deep/ .test-deep-class{
     width: 18%;
     background: aquamarine;
   }*/
  .people-wrap >>> .test-deep-class{
    width: 18%;
    background: red;
  }
</style>
