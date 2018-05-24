<template>
  <div class='layout-breadcrumb'>
    <Breadcrumb :style="{margin: '10px 0'}">
      <BreadcrumbItem to='/index' v-text="busMsg"></BreadcrumbItem>
      <BreadcrumbItem to='/index'>首页</BreadcrumbItem>
      <BreadcrumbItem v-for="(bread, index) in breads" :key="index" :to="bread.path">{{bread.name}}</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  data () {
    return {
      breads: [],
      busMsg:'原始值'
    }
  },
  methods: {
    _getBreads () {
      const { matched } = this.$route
      console.log(this.$route, this.$router);
      let breads = []
      matched.map((items) => {
        let bread = {}
        bread.name = items.meta.name
        bread.path = items.path
        items.meta.name && breads.push(bread)
      })
      return breads
    }
  },
  created () {
    let that=this;
    console.log(123);
    this.breads = this._getBreads();
    this.$root.bus.$on('busTest',t=>{
      that.busMsg+=t;
    })
  }
}
</script>

<style>

</style>
