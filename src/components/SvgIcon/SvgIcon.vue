<template>
  <span
    :style="{ width: `${width}rem`, height: `${height}rem` }"
    class="svg_wrapper"
    @click="emitClick"
  >
    <component
      :is="name"
      :name="name"
      :width="_rem2px(width)"
      :height="_rem2px(height)"
      :color="color"
    ></component>
  </span>
</template>

<script>
import { rem2px } from '@/helpers/utils.js'
export default {
  name: 'SvgIcon',
  data() {
    return {}
  },
  props: ['name', 'width', 'height', 'color'],
  methods: {
    emitClick(event) {
      this.$emit('click', event)
    },
    _rem2px(rem) {
      return rem2px(rem)
    }
  },
  created() {
    console.log(this.name, this.height, this.width)
  }
}
</script>

<style lang="scss">
.svg_wrapper {
  position: relative;
  display: inline-block; // float: left;
  letter-spacing: -3px;
  text-align: initial;
}

.svg_wrapper > svg {
  position: absolute;
}

.st2 {
  fill: none;
  stroke: #b16c9a;
  stroke-width: 0;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
</style>
