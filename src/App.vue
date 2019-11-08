<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {},
  created() {
    console.log(
      '这里是 我是APPVue》created 的结果-------------',
      '我是APPVue》created'
    )
  },
  mounted() {
    console.log(
      '这里是 我是APPVue》mounted 的结果-------------',
      '我是APPVue》mounted'
    )
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.programImg {
  width: 80%;
  height: 80%;
}
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.row-height {
  height: 100%;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 755px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
}
.layout-menu-left {
  background: #464c5b;
}

.header-button {
  padding: 15px 15px;
  float: right;
}


.layout-logo-left {
  width: 100px;
  height: 100px;
  /*background: #5b6270;*/
  border-radius: 3px;
  margin: 15px auto;
  text-align: center;
}

.layout-logo-left p {
  color: white;
}

.layout-logo-left img {
  border-radius: 50%;
}

.layout-ceiling-main a {
  color: #9ba7b5;
}

.layout-hide-text .layout-text {
  display: none;
}

.ivu-col {
  transition: width 0.2s ease-in-out;
}

.content-layout {
  overflow-y: auto;
}

span.layout-hide-text {
  display: none;
}
.layout-quit {
  float: right;
  line-height: 60px;
  margin-right: 30px;
  color: #9ba7b5;
  font-weight: bolder;
  cursor: pointer;
}
</style>
