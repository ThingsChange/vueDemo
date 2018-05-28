<template>
  <div class='layout-content'>
    <div class='layout-content-main'>
    <Content>
      <ul>
        <li v-for="(item,index) in students" v-text="item.name" :key="index"></li>
      </ul>
      <ul>
        <li v-text="teacher.name"></li>
        <li v-text="teacher.age"></li>
      </ul>
      <button @click="handleObject(1)" v-text="'删除'"></button>
      <button @click="handleTeacher" v-text="'修改教师属性'"></button>
    </Content>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            students:[
              {name:'张三',id:1},
              {name:'李四',id:2},
              {name:'王五',id:3},
              {name:'赵六',id:4},
            ],
            teacher:{
              name:'金兴胜'
            }
          }
      },
      methods:{
        handleObject(type){
          console.log(typeof type);
            if(type===1){
                  // this.students=[{name:'赵六',id:4}];
              // this.students[0].name='哎呀'
              // this.students[4]={name:'哎呀',id:5}//不可以
              this.students.push({name:'哎呀',id:5});
              this.$set(this.students,5,{name:'新的',id:6})
            }
        },
        handleTeacher(){
          // this.teacher['age']=38;//错
          // Object.assign({},this.teacher,{age:38})//错
          //下面是对的
          // this.$set(this.teacher,'age',38)//对
          // this.teacher=Object.assign({},this.teacher,{age:38})
        }
      }
    }
</script>

<style scoped>

</style>
