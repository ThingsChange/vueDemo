<template>
  <Menu @on-select="selectMenu"  :active-name="AC" theme="dark" width="auto" accordion :open-names="onames" ref="menus">
    <Submenu  v-for="(item,index) in routeConfig" :name="item.id" :key="index">
      <template slot="title">
        <Icon type="ios-paper"></Icon>
        <span :class="{'layout-hide-text':expandLeft}" v-text="item.text"></span>
      </template>
      <MenuItem  v-for="(secondItem,index) in item.child" :name="secondItem.id" :key="index" v-text="secondItem.text">跨域实现</MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
import {routeConfig} from '@/config/menuRouter'
export default {
  name: 'index',
  data() {
    return {
      AC: '',
      onames: [],
      spanLeft: 3,
      spanRight: 21,
      theme2: 'dark',
      routeConfig: routeConfig
    }
  },
  computed: {
    expandLeft() {
      return this.spanLeft < 3
    }
  },
  methods: {
    selectMenu(data) {
      let firstMenum = data.slice(0, data.indexOf('-'))
      let toUrl = '';
      console.log(1234);
      routeConfig.filter(v => {
        if (v.id === firstMenum) {
          v.child.filter(x => {
            if (x.id === data) {
              toUrl = x.path;
            }
          })
        }
      })
      this.$router.push(toUrl);
    }
  },
  created() {
    const path = this.$route.path;
    let submenu = '';
    for (let key in routeConfig) {
      if (routeConfig[key] === path) {
        submenu = key;
      }
    }
    this.AC = submenu;
    let arr = [];
    arr[0] = submenu[0];
    this.onames = arr;
    /* this.$nextTick(() => {
  if (!this.$refs.length) return;// 未登录页面所改
  this.$refs.menus.updateOpened();
  this.$refs.menus.updateActiveName();
});*/
  }
}
</script>

<style scoped>

</style>
