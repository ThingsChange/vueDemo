<template>
  <div>
    <div v-if="!loginStaus">
      <router-view ></router-view>
    </div>
    <div   v-if="loginStaus"   class="layout" :class="{'layout-hide-text': spanLeft < 4}">
      <Row  type="flex" class="row-height">
        <Col :span="spanLeft" class="layout-menu-left">
          <Menu @on-select="selectMenu" :active-name="AC" theme="dark" width="auto" accordion :open-names="onames" ref="menus">
            <div class="layout-logo-left">
              <img src="./assets/ky.png" alt="">
              <p>KYDC</p>
            </div>
            <Submenu name="1" v-if="showMoreMenu">
              <template slot="title">
                <Icon type="stats-bars" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">报表自助</span>
              </template>
              <MenuItem name="1-1">
                <Icon type="disc" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">自助查询</span>
              </MenuItem>
              <MenuItem name="1-2">
                <Icon type="ios-compose-outline" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">报表管理</span>
              </MenuItem>
              <MenuItem name="1-4">
                <Icon type="ios-compose-outline" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">创建中间表</span>
              </MenuItem>
            </Submenu>

            <Submenu name="4" v-if="showMoreMenu">
              <template slot="title">
                <Icon type="map" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">同步管理</span>
              </template>
              <MenuItem name="4-1">
                <Icon type="ios-compose-outline" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">同步管理</span>
              </MenuItem>
              <MenuItem name="4-7">
                <Icon type="ios-compose-outline" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">异常UMS处理</span>
              </MenuItem>
              <MenuItem name="4-2">
                <Icon type="ios-pulse" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">黑名单管理</span>
              </MenuItem>
              <MenuItem name="4-3">
                <Icon type="ios-pulse" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">数据库管理</span>
              </MenuItem>
              <MenuItem name="4-4">
                <Icon type="ios-pulse" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">同步任务管理</span>
              </MenuItem>
              <MenuItem name="4-5">
                <Icon type="ios-pulse" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">增量同步统计</span>
              </MenuItem>
              <MenuItem name="4-6">
                <Icon type="map" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">数据流向</span>
              </MenuItem>
              <MenuItem name="4-8">
                <Icon type="map" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">binlog位置</span>
              </MenuItem>
            </Submenu>

            <Submenu name="3" v-if="showMoreMenu">
              <template slot="title">
                <Icon type="ios-paper" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">任务管理</span>
              </template>
              <MenuItem name="3-1">
                <Icon type="stats-bars" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">任务自助</span>
              </MenuItem>
              <MenuItem name="3-2">
                <Icon type="stats-bars" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">Livy任务管理</span>
              </MenuItem>
            </Submenu>

            <Submenu name="2" v-if="showMoreMenu">
              <template slot="title">
                <Icon type="ios-paper" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">内容管理</span>
              </template>
              <MenuItem name="2-1">
                <Icon type="stats-bars" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">HDFS</span>
              </MenuItem>
              <MenuItem name="2-2">
                <Icon type="map" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">HBase</span>
              </MenuItem>
              <MenuItem name="2-3">
                <Icon type="social-buffer-outline" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">Hive</span>
              </MenuItem>
            </Submenu>
            <Submenu name="5">
              <template slot="title">
                <Icon type="arrow-graph-up-right" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">数据统计</span>
              </template>
              <MenuItem name="5-1">
                <Icon type="stats-bars" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">整体数据</span>
              </MenuItem>
              <MenuItem name="5-2">
                <Icon type="map" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">轻盈数据</span>
              </MenuItem>
              <MenuItem name="5-3">
                <Icon type="social-buffer-outline" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">月盈数据</span>
              </MenuItem>
              <MenuItem name="5-4">
                <Icon type="stats-bars" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">众盈数据</span>
              </MenuItem>
              <MenuItem name="5-5">
                <Icon type="map" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">新手标数据</span>
              </MenuItem>
              <!-- <MenuItem name="5-6">
              <Icon type="social-buffer-outline" :size="iconSize"></Icon>
              <span :class="{'layout-hide-text': spanLeft < 4}">稳盈数据</span>
              </MenuItem> -->
            </Submenu>
            <Submenu name="6" v-if="showMoreMenu">
              <template slot="title">
                <Icon type="stats-bars" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">数据字段</span>
              </template>
              <MenuItem name="6-1">
                <Icon type="disc" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">字段管理</span>
              </MenuItem>
              <MenuItem name="6-2">
                <Icon type="social-buffer-outline" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">字段审核</span>
              </MenuItem>
            </Submenu>
            <Submenu name="7" v-if="showMoreMenu">
              <template slot="title">
                <Icon type="stats-bars" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">数据维度</span>
              </template>
              <MenuItem name="7-1">
                <Icon type="disc" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">维度列表</span>
              </MenuItem>
              <MenuItem name="7-2">
                <Icon type="social-buffer-outline" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">维度审核列表</span>
              </MenuItem>
              <!--<MenuItem name="7-2">
                <Icon type="social-buffer-outline" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">维度审核</span>
              </MenuItem>-->
            </Submenu>
            <Submenu name="8" v-if="showMoreMenu">
              <template slot="title">
                <Icon type="stats-bars" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">指标管理</span>
              </template>
              <MenuItem name="8-1">
                <Icon type="disc" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">指标列表</span>
              </MenuItem>
              <MenuItem name="8-2">
                <Icon type="social-buffer-outline" :size="iconSize"></Icon>
                <span :class="{'layout-hide-text': spanLeft < 4}">指标审核列表</span>
              </MenuItem>
            </Submenu>
          </Menu>
        </Col>
        <Col :span="spanRight" class="content-layout">
          <div class="layout-header">
            <Button type="text" @click="toggleClick" span="2">
              <Icon type="navicon" size="32"></Icon>
            </Button>
            <div class="layout-quit" @click="quitLogin">
              退出登录
            </div>
          </div>

          <div  v-if="loginStaus">
            <router-view ></router-view>

          </div>
          <div class="layout-copy">
            2017 &copy; KY-DataCenter
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  import { routeConfig } from "./config";
  export default {
    data() {
      return {
        loginStaus:sessionStorage.getItem('loginStaus')==='true'||false,
        spanLeft: 4,
        spanRight: 20,
        AC: 1,
        onames: []
      };
    },
    computed: {
      iconSize() {
        return this.spanLeft === 4 ? 14 : 18;
      },
      location() {
        return this.$route.path;
      },
      showMoreMenu() {
        const path = this.$route.path;
        if (
          path === "/allData" ||
          path === "/qyData" ||
          path === "/yyData" ||
          path === "/zyData" ||
          path === "/xsbData"
        ) {
          return false;
        } else {
          return true;
        }
      }
    },
    methods: {
      toggleClick() {
        if (this.spanLeft === 4) {
          this.spanLeft = 2;
          this.spanRight = 22;
        } else {
          this.spanLeft = 4;
          this.spanRight = 20;
        }
      },
      selectMenu(data) {
        this.$router.push(routeConfig[data]);
      },
      // 退出登录
      quitLogin () {
        // 销毁cookie存储的token，此处待做

        // 销毁h5缓存
        sessionStorage.removeItem('loginStaus')
        location.reload()
      }
    },
    mounted() {
      this.loginStaus=sessionStorage.getItem('loginStaus')
      if(!this.loginStaus){
        location.href='#/login'
      }else{
        document.querySelector('canvas').style.display='none'
      }
      const path = this.$route.path;
      let submenu = "";
      for (let key in routeConfig) {
        if (routeConfig[key] === path) {
          submenu = key;
        }
      }
      this.AC = submenu;
      let arr = [];
      arr[0] = submenu[0];
      this.onames = arr;
      this.$nextTick(() => {
        if(!this.$refs.length) return;//未登录页面所改
        this.$refs.menus.updateOpened();
        this.$refs.menus.updateActiveName();
      });
    }
  };
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
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
    min-height: 600px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
  }

  .header-button {
    padding: 15px 15px;
    float: right;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
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
    display: none;C
  }
  .layout-quit{
    float:right;
    line-height:60px;
    margin-right:30px;
    color:#9ba7b5;
    font-weight:bolder;
  }
</style>
