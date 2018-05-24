<template>
    <div>
      <Bread></Bread>
      <div class="layout-content">
        <div class="layout-main-content">
          <Content>
            <Row>
              <Col  span="16"  >这里是一个父子组件传值的例子，大河小河，你懂得</Col>
            </Row>
            <div>
                <Row>
                  <Col span="12">
                    这里是大河
                  </Col>
                  <Col>
                    <Button @click="adjustSmallDisCharge(1)">大河有水小河满</Button>
                    <Button @click="adjustSmallDisCharge(2)">大河没水小河干</Button>
                  </Col>
                </Row>
              <Row  :gutter="10">
                <Col span="6">
                  <div>
                    <label>大河水的流量：</label>
                    <span v-text="bigDisChage"></span>
                  </div>
                </Col>
                <Col span="6">
                  <div>
                    <label>大河的宽度：</label>
                    <span v-text="riverWidth"></span>
                  </div>
                </Col>
                <Col span="6">
                  <div>
                    <label>大河的长度：</label>
                    <span v-text="riverLength"></span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span="12">
                  <small-river ref="river" :dis-charge="smallDisCharge" @waterToggle="waterToggle"></small-river>
                </Col>
              </Row>
            </div>
          </Content>
        </div>
      </div>
    </div>
</template>

<script>
  import  SmallRiver from  '@/components/smallRiver'
    export default {
        name: "index",
      data(){
          return{
          riverLength:3000,
          riverWidth:128,
          bigDisChage:888,
          smallDisCharge:333,
          }
      },
      components:{
        'small-river':SmallRiver
      },
      methods:{
        adjustSmallDisCharge(type){
          let that=this;
          let timer=setInterval(()=>{
              if(type==1){
                if(that.smallDisCharge>=500){
                  clearInterval(timer);
                  timer=null;
                  return ;
                }
                that.smallDisCharge++;
              }else{
                if(that.smallDisCharge<=0){
                  clearInterval(timer);
                  timer=null;
                  return ;
                }
                that.smallDisCharge--;
              }
            },200)
        },
        waterToggle(item){
          console.log('到底是防水吗');
          this.adjustSmallDisCharge(item);
        }
      }
    }
</script>

<style scoped>

</style>
