<template>
    <div>
      <Content>
        <p>
          <i-input v-model="value14" placeholder="Enter something..." clearable style="width: 200px"></i-input>
          <span>这是测试路由守卫的页面</span>
          <span v-text="id"></span>
        </p>
      </Content>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            id:0,
            value14: 'Hello World'
          }
      },
      beforeRouteEnter(to,from,next){
          console.group('路由守卫测试：这里是beforeRouteEnter');
          console.log(to,from,next);
        next(vm=>{
          vm.id='我被beforeRouteEnter的回调函数修改了'
        })
      }

    }
</script>

<style scoped>

</style>
