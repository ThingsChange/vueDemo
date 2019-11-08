<template>
  <transition name="alert-fade">
    <div class="alert_state">
      <div class="content">
        <section class="state">
          <aside>
            <SvgIcon
              name="InvoiceSuccess"
              width="1.72"
              height="2.22"
              :color="mainColor"
            ></SvgIcon>
          </aside>
          <h3>{{ pageCont.stateCont }}</h3>
          <p v-html="pageCont.contExamine">{{ pageCont.contExamine }}</p>
        </section>
        <section class="btns" v-if="pageCont.isShowBtns ? false : true">
          <aside
            class="go"
            @click="go"
            :style="{
              background: mainColor,
              'box-shadow': `0px 0px 14px 0px ${colorRgb(mainColor)}`
            }"
          >
            {{ pageCont.btnCont }}
          </aside>
          <aside class="back" @click="back" v-if="ua === 'wechat' && !ismp">
            {{ pageCont.paySuccess ? pageCont.paySuccess : '返回公众号' }}
          </aside>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import { Bridge, ua } from '../../helpers/index'
import { colorRgb } from '../../helpers/utils'
import SvgIcon from '../SvgIcon/SvgIcon'

const { mp, closeWindow } = Bridge

export default {
  data() {
    return {
      ua,
      ismp: false,
      hideStatePage: false // 隐藏当前状态页面
    }
  },
  // pageCont: 该状态页面内容
  props: ['pageCont'],
  components: { SvgIcon },
  computed: { ...mapState(['mainColor']) },
  mounted() {
    this.isMp()
  },
  methods: {
    colorRgb,
    async go() {
      // 前往下一页面并隐藏当前状态页面
      const ismp = await mp.isMp()
      if (ismp) {
        mp.switchTab({
          url: '/pages/my'
        })
      } else {
        this.$emit('go', this.hideStatePage)
      }
    },
    back() {
      // 返回公众号
      closeWindow.exec()
    },
    async isMp() {
      this.ismp = await mp.isMp()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixin';
@import '../../assets/styles/common';
.alert_state {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  background: #ffffff;
  justify-content: center;
  .content {
    width: 100%;
    margin-top: -1.2rem;
  }
  .state {
    text-align: center;
    margin: 0 auto 1.6rem;
    aside {
      height: 2.22rem;
      margin-bottom: 1.2rem;
    }
    h3 {
      font-weight: normal;
      margin-bottom: $spacing3;
      @include sc($fontSize2, $fontColor1);
    }
    p {
      @include sc($fontSize3, $fontColor3);
    }
  }
  .btns {
    margin: 0 $spacing1;
    .go {
      text-align: center;
      line-height: 1.2rem;
      border-radius: 0.1rem;
      @include wh(100%, 1.2rem);
      margin-bottom: $spacing1;
      @include sc($fontSize2, #ffffff);
    }
    .back {
      width: 100%;
      text-align: center;
      @include sc($fontSize2, $fontColor3);
    }
  }
}
.alertFade-enter-active,
.alertFade-leave-active {
  transition: opacity 0.5s;
}
.alertFade-leave-to {
  opacity: 0;
}
</style>
