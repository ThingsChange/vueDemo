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
            <button @click="addPMT">点我</button>
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
      age: 1
    }
  },
  computed:{
    ...mapState({
      programModifyTimes: 'modifyTimes',
    }),
  },
  methods:{
    ...mapActions(['increaseModifyTimes']),
    addPMT(){
      console.log(123,this.$store);
      this.increaseModifyTimes(2);
    }
  }
}
</script>

<style scoped>

</style>
