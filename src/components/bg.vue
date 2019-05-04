<template>
  <div class="bg-container">
    <div class="bg" ref="bg" :style="`background-image: url(${curBgImg})`"></div>
  </div>
</template>

<script>
import { bgImg } from 'api/bgImg';

export default {
  data() {
    return {
      bgImgs: [],
      interval: 30000,
      imgIndex: 0,
      curBgImg:
        'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4794e07fe3dd11b60c4090f5c771aee4b1bbda_1280.jpg',
      transitionDuration: 3000
    };
  },
  created() {
    this.getbgImg();
    this.changeImageCycle();
  },
  methods: {
    getbgImg() {
      bgImg({
        category: 'backgrounds'
      }).then(data => {
        this.bgImgs = data.hits;
      });
    },
    changeImageCycle() {
      clearInterval(this.timer);
      this.timer = setInterval(this.changeImageCycleHandle, this.interval);
    },
    changeImageCycleHandle() {
      this.imgIndex = (this.imgIndex + 1) % this.bgImgs.length;
    },
    setBgImg(url) {
      this.$refs.bg.style.transition = `all ${this.transitionDuration / 2}ms`;
      this.$refs.bg.style.transform = 'scale(1)';
      setTimeout(() => {
        this.curBgImg = url;
        this.$refs.bg.style.transform = 'scale(1.2)';
        setTimeout(() => {
          this.$refs.bg.style.transition = '';
        }, this.transitionDuration / 2);
      }, this.transitionDuration / 2);
    }
  },
  watch: {
    imgIndex() {
      const image = new Image();
      const url = this.bgImgs[this.imgIndex].largeImageURL;
      image.onload = () => {
        this.setBgImg(url);
      };
      image.src = url;
    }
  }
};
</script>

<style lang="less" scoped>
.bg-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .bg {
    height: 100%;
    width: 100%;
    background: center / cover no-repeat
      url(https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4794e07fe3dd11b60c4090f5c771aee4b1bbda_1280.jpg);
    filter: blur(5px);
    transform: scale(1.2);
    opacity: 0.9;
  }
}
</style>
