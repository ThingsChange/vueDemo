<template>
    <Content>
      人数：<input type="text" v-model="peopleNum">
    </Content>
</template>

<script>
    export default {
        name: "test1",
      data(){
          return {
            peopleNum:100
          }
      }
    }
</script>

<style scoped>

</style>
