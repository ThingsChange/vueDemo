<template>
  <div class="hello">
    <Bread></Bread>
    <div class='layout-content'>
      <div class='layout-content-main'>
        <content>
          <h2>{{ msg }}</h2>
          <ul>
            <li @click="goToIndex">点我去首页</li>
          </ul></content>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goToIndex() {
      console.log(this.$router)
      console.log(this.$router.push({ name: 'index', params: { id: 1 } }))
      //      console.log(this.$router.push('index'))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
