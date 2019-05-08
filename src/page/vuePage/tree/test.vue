<template>
  <json-tree ref="abc" :json-object="jsonObject" @original-json="getInputJson" @create-json="createJson"
             :original-button="originalButton" :create-button="createButton">
    <template slot="createJson">
      <span>生成JSON</span>
    </template>
    <template slot="originalData">
      <span>原始数据</span>
    </template>
  </json-tree>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        jsonObject: {},
        originalButton: true,
        createButton: true
      }
    },
    methods: {
      getInputJson(obj) {
        console.log('嘿嘿：', obj);
        console.log('嘿嘿2：', this.jsonObject);
        console.log(this.$refs, this.$refs['abc'].tree)
      },
      createJson(obj) {
        console.log('嘿嘿3：', obj);
      },
    }
  }
</script>

<style scoped>

</style>
