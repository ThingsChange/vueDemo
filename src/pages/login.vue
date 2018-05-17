<template>
  <div  style="height: 100%; background-color: #0d6aad">
    <Form ref="loginForm" :model="loginForm"   style="width: 366px;top:50%;margin-top:-85px;left: 50%;margin-left: -183px;position: absolute"  :rules="ruleCustom" :label-width="80">
      <Header class="header">登&nbsp;&nbsp;&nbsp;&nbsp;陆</Header>

      <FormItem label="用户名" :label-width="80"  style="height: 40px;color:red"  label-for="name" prop="name">
        <Input v-model="loginForm.name" element-id="name" placeholder="请输入用户名"/>
      </FormItem>
      <FormItem label="密码" prop="password" placeholder="请输入密码">
        <Input type="password" v-model="loginForm.password"/>
      </FormItem>
      <FormItem style="text-align: center;">
        <Button type="primary"  style="width: 100px" @click="handleSubmit('loginForm')">登陆</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import '@/common/particles'
import { loginAPI } from '@/api'
export default {
  components: {
    // DateChoose
  },
  data() {
    return {
      loginForm: {
        name: '',
        password: ''
      },
      ruleCustom: {}
    }
  },
  created() {},
  methods: {
    handleSubmit() {
      loginAPI
        .login(this.loginForm.name, this.loginForm.password)
        .then(res => {
          let { data, headers } = res
          if (data.code === 1) {
            window.loginStaus = true
            sessionStorage.setItem('loginStaus', true)
            let AUTH_TOKEN = headers['x-auth-token']
            window.axios.defaults.headers.common['x-auth-token'] = AUTH_TOKEN

            location.href = '/'
          } else if (data.code === 0) {
            this.$Notice.error({
              title: '登录提示',
              desc: JSON.parse(data.data).message
            })
          }
        })
        .catch(error => {
          throw new Error(error)
        })
    }
  },
  mounted() {
    var a = [...document.querySelectorAll('label')]
    a.forEach(v => {
      v.style.color = '#f7f7f7'
    })
    document.querySelector('canvas').style.display = 'block'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-size: 30px;
  left: 50%;
  margin: 0 0 30px 183px;
  color: #f7f7f7;
}

.sql-query-table {
  margin-top: 20px;
}
.description {
  margin-top: 20px;
  display: inline-block;
  font-size: 14px;
  color: #2d8cf0;
  font-weight: 600;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.particles {
  position: absolute;
  width: 100%;
  top: 200px;
  bottom: 0;
  z-index: 0;
}
canvas {
}
</style>
