<template>
  <div class="projects">
    <div class="swiper-container">
      <div class="swiper-wrapper" ref="wrapper">
        <a class="swiper-slide" href="https://music.godhaoye.com">
          HY MUSIC
        </a>
        <a class="swiper-slide">
          HY BLOG
        </a>
        <a class="swiper-slide">
          GITHUB
        </a>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import { getRandom } from 'assets/js/utils';

export default {
  mounted() {
    this.initSwiper();
    this.initBackgroundColor();
  },
  methods: {
    /**
     * swiper 实例初始化
     */
    initSwiper() {
      this.swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 40,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        }
      });
      this.swiper.slideTo(Math.floor(this.swiper.slides.length / 2));
    },
    /**
     * slider 背景随机化
     */
    initBackgroundColor() {
      [...this.$refs.wrapper.children].forEach(item => {
        const child = item;
        child.style.backgroundColor = this.getRandomColor();
      });
    },
    /**
     * 获取随机颜色值
     */
    getRandomColor() {
      return `rgba(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)}, ${Math.random() / 2 + 0.3})`;
    }
  }
};
</script>

<style lang="less" scoped>
.projects {
  padding: 30px 0 0 0;
  font-size: 4em;
  text-align: center;
  font-family: 'Caveat', cursive;
  .swiper-container {
    width: 100%;
    padding-top: 12vh;
    padding-bottom: 50px;
    .swiper-slide {
      width: 500px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1em;
      overflow: hidden;
      cursor: pointer;
      background: center / cover rgba(30, 90, 150, .5);
      @media screen and (max-width: 450px) {
        width: 80vw;
        height: 50vw;
        font-size: .5em;
      }
    }
    .current-pagination {
      background: green;
    }
  }
}
</style>
