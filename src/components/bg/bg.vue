<template>
  <div class="bg-wrapper">
    <div class="bg" ref="bg" :style="`background-color: ${bgColor}`"></div>
  </div>
</template>

<script>
import { getRandom } from 'assets/js/utils';
import { setInterval } from 'timers';

export default {
  data() {
    return {
      bgImgs: [],
      interval: 30000,
      imgIndex: 0,
      transitionDuration: 3000,
      bgColor: ''
    };
  },
  created() {
    this.autoChangeBg();
  },
  methods: {
    /**
     * 获取随机背景渐变色
     */
    getRandomLinearGradient(min = 3, max = 5) {
      let num = getRandom(min, max);
      let result = '';

      while (num--) {
        result += `linear-gradient(${getRandom(
          0,
          360
        )}deg, ${this.getRandomRGBA()}, ${this.getRandomRGBA()})`;
        if (num !== 0) {
          result += ', ';
        }
      }

      return result;
    },
    /**
     * 获取随机颜色值
     */
    getRandomRGBA() {
      return `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(
        0,
        255
      )})`;
    },
    autoChangeBg() {
      this.$nextTick(() => {
        this.bgColor = this.getRandomRGBA();
      });
      setInterval(() => {
        this.bgColor = this.getRandomRGBA();
      }, 5000);
    }
  }
};
</script>

<style lang="less" scoped>
.bg-wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .bg {
    height: 100%;
    width: 100%;
    background: linear-gradient(
        217deg,
        rgba(255, 0, 0, 0.3),
        rgba(255, 0, 0, 0) 70.71%
      ),
      linear-gradient(127deg, rgba(0, 255, 0, 0.5), rgba(0, 255, 0, 0) 70.71%),
      linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
    transition: all 5s;
  }
}
</style>
