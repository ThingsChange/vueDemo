<template>
  <div>
    <Bread/>
    <div class='layout-content'>
      <div class='layout-content-main'>
        <content>
          <Row>
            <Col>
              1
            </Col>
            <Col>
            {{programModifyTimes}}
            </Col>
            <button @click="addPMT">点我异步增加2</button>
            <button @click="minusPMT({amount:3})">点我直接减少3</button>
            <div @click="change(msg)" v-text="msg" class="title"></div>
          </Row>
        </content>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  export default {
  name: 'index',
  data () {
    return {
      age: 1,
      msg:'我是生命周期页面'
    }
  },
  computed:{
    ...mapState({
      programModifyTimes: 'modifyTimes',
    }),
  },
  methods:{
    ...mapMutations({minusPMT:'SYNC_MINUS_MODIFY'}),
    ...mapActions(['increaseModifyTimes']),
    addPMT(){
      console.log(123,this.$store);
      this.increaseModifyTimes({amount:2});
      // this.increaseModifyTimes({amount:2});
    },
    change(text){
      this.$root.bus.$emit('busTest',text)
    }
  }
}
</script>

<style scoped>

</style>
