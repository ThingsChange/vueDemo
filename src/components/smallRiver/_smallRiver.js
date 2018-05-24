/**
 *
 * @author  56477
 * @create 2018-05-24 14:33
 * @PROJECT_NAME vueDemo
 * @note 请阐述当前文件的作用
 **/
export default {
  data() {
    return {
      riverWidth: 1,
      riverLength: 2
    }
  },
  props: {
    disCharge: [String, Number]
  },
  methods: {
    askForWater(item) {
      console.log('这里干嘛的', item);
      this.$emit('waterToggle', item);
    }
  }
}
