<template>
  <div class="cover " @click="closeChildWin" >
    <section @click.stop  class="inner ">
      <div @click="closeChildWin" v-show="closeBtn" class="info-name_close model-close">
        <!--<SvgIcon :color="getSvgColor(5)" height="0.33" name="menuDetailClose" width="0.33"></SvgIcon>-->
      </div>
      <slot name="content"></slot>
    </section>
  </div>
</template>

<script>
// import SvgIcon from '../SvgIcon';

export default {
  // components: { SvgIcon },
  props: {
    closeBtn: { type: Boolean, default: true }
  },
  methods: {
    closeChildWin() {
      console.log('这里是 this.$parent 的结果-------------', this.$parent)
      this.$parent.$emit('input', false);
    }
  },
};
</script>

<style scoped lang="scss">
  .cover{
    background: rgba(0,0,0,.6);
    position: fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    height:100vh;
    display: flex;
    /*justify-content: center;*/
    /*align-items: center;*/
    /*flex-direction: column;*/
    overflow: hidden;
    .inner{
      width: 100%;
      position: absolute;
      bottom: 0;
      background: #fff;
    }
    .info-name_close {
      top: 0;
      right: 0;
      display: flex;
      padding: 0.48rem;
      position: absolute;
    }
    .info-name_close:before {
      padding: 0.6rem 0.6rem;
      top: 50%;
      z-index: 10;
      content: '';
      position: absolute;
      transform: translateY(-50%);
    }
  }
</style>
