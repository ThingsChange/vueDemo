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
          <div class="icon-change">
            <Icon type="ios-person-outline"></Icon>
            <Icon style="color:#4183c4" type="android-contact"></Icon>
            <Icon type="ios-home-outline"></Icon>
          </div>
          <div>
            <div>
              查找出下面这个数组中的第一个素数：
            </div>
            <span v-text="shujujiegou"></span>
            <p>查询结果是：<span>{{firstSushu}}</span></p>
          </div>
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
      msg:'我是生命周期页面',
      shujujiegou:[4,6,7,8,16],
      firstSushu:''
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
  },
    created(){
      console.log('vuex 的created的周期函数')
      function isPrime(element, index, array) {
        var start = 2;
        while (start <= Math.sqrt(element)) {
          var a=element % start++;
          console.log(a);
          if (a< 1) {
            return false;
          }
        }
        return element > 1;
      }
      function isPrimeBetter(element,index,array){
        if(element==2||element==3){
          return 1;
        }
        //将大于5的自然数表示如下
        // 6x-1, 6x, 6x+1, 6x+2, 6x+3, 6x+4
        //再细分，6x肯定不是素数，对于后三项  由于2(3x+1)，3(2x+1)，2(3x+2)  所以也不是
        //所以只能是 6x两侧的数才可能是素数，单不全是 比如6*4+1=25
        if( element%6!=1&&element%6!=5){//排出后三项
          return 0;
        }
        let temp=Math.sqrt(element);
        for(let i=5;i<=temp;i+=6){
          if(element%i==0||element%(i+2)==0){
            return 0
          }
        }
        return 1;
      }
      this.firstSushu=this.shujujiegou.find(isPrimeBetter);
    },
    mounted(){
      console.log('vuex 的mounted的周期函数')
    }
  }
</script>

<style scoped>
.icon-change{
  font-size: 120px;
}
</style>
