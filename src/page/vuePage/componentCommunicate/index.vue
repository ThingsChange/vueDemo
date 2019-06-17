<template>
    <div>
      <Bread></Bread>
      <div class="layout-content">
        <div class="layout-main-content">
          <Content>
            <Row>
              <Col  span="16"  >这里是一个父子组件传值的例子，大河小河，你懂得啊1</Col>
            </Row>
            <div>
                <Row>
                  <Col span="12">
                    这里是大河
                  </Col>
                  <Col>
                    <Button @click="adjustSmallDisCharge(1)">大河有水小河满</Button>
                    <Button @click="adjustSmallDisCharge(2)">大河没水小河干</Button>
                    <Button @click="deleteArray">删除数组</Button>
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
                  <small-river ref="river" :dis-charge="smallDisCharge" @waterToggle="waterToggle" :students="students" :teachers="teachers">
                    <h1>不具名插槽</h1>
                    <button slot="button" @click="adjustSmallDisCharge(3)">这是slot在父元素生成的button,作用是关水</button>
                    <button slot="button" @click="adjustSmallDisCharge(4)">这是slot在父元素生成的button,作用是暂停</button>
                    <template slot="slotScopeTest" scope="props">
                      <li class="abc">{{props.text2}}</li>
                    </template>
                    <template slot="slotScopeTest" scope="props">
                      <button class="bc-green">{{props.text2}}</button>
                    </template>

                    <template slot="slotScopeSelf" scope="props">
                      <ul>
                        <li  class="bc-red" v-text="props.teacher"></li>
                      </ul>
                      <span></span>
                    </template>
                  </small-river>
                </Col>
              </Row>
              <Row>
                <Col>
                  <RadioGroup v-model="changeTab" type="button">
                    <Radio label="北京"></Radio>
                    <Radio label="上海"></Radio>
                    <Radio label="深圳"></Radio>
                  </RadioGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                 <keep-alive>
                   <component v-bind:is="tabView"></component>
                 </keep-alive>
                </Col>
              </Row>
            </div>
          </Content>
          <SvgIcon name="Logo" width="38.16" height="35.16" color="white" class="text" ></SvgIcon>

        </div>
      </div>
    </div>
</template>

<script>
  import  SmallRiver from  '@/components/smallRiver'
  import  test1 from '@/components/isKeepAlive/test1'
  import  test2 from '@/components/isKeepAlive/test2'
  import  test3 from '@/components/isKeepAlive/test3'
  import  SvgIcon from '@/components/SvgIcon'
    export default {
        name: "index",
      data(){
          return{
              timer:null,
              riverLength:3000,
              riverWidth:128,
              bigDisChage:888,
              smallDisCharge:333,
              students:[
                  {name:'小A'},
                  {name:'小B'},
                  {name:'小C'},
              ],
            teachers:[],
            tabView:'test1',
            changeTab:'北京'
          }
      },
      watch:{
        changeTab(newVal,oldVal){
          switch (newVal){
            case '北京':
              this.tabView='test1';
              break;
            case '上海':
              this.tabView='test2';
              break;
              break;
            case '深圳':
              this.tabView='test3';
              break;
            default:
              this.tabView='test1';
              break ;
          }
        }
      },
      components:{
        'small-river':SmallRiver,
        'test1':test1,
        'test2':test2,
        'test3':test3,
        SvgIcon
      },
      created(){
        this.teachers=[
          {name:'小A老师'},
          {name:'小B老师'},
          {name:'小C老师'},
        ];
        this.students.length=1;
      },
      methods:{
        adjustSmallDisCharge(type){
          this.students.length=2;
          this.students[1]=   {name:'小D'};
          this.students[2]=   {name:'小f'};

          this.teachers.map(v=>{
            console.log(v.name);
          })

          let that=this;
          if(type===3){
            clearInterval(that.timer);
            that.timer=null;
            return false;
          }
          if(type===4){
            clearInterval(that.timer);
            that.timer=null;
            return false;
          }
          this.timer=setInterval(()=>{
              if(type==1){
                if(that.smallDisCharge>=500){
                  clearInterval(that.timer);
                  that.timer=null;
                  return ;
                }
                that.smallDisCharge++;
              }else{
                if(that.smallDisCharge<=0){
                  clearInterval(that.timer);
                  that.timer=null;
                  return ;
                }
                that.smallDisCharge--;
              }
            },200)
        },
        deleteArray(){
          this.students.length=1;
        },
        waterToggle(item){
          console.log('到底是防水吗');
          this.adjustSmallDisCharge(item);
        }
      }
    }
</script>

<style scoped>
.bc-green{
  background: rgba(32, 195, 47, .5)
}
.bc-red{
  background: rgba(255, 0, 0, .5)
}
</style>
