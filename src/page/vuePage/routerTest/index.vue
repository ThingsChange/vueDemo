<template>
    <div>
      <Content>
        <p>
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
