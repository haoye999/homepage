<template>
  <div class="projects">
    <div class="swiper-container">
      <div class="swiper-wrapper" ref="wrapper">
        <a class="swiper-slide" v-for="project in projects" :key="project.title" :href="project.href">
          <div class="swiper-slide-bg" :style="`background-image: url(${project.bg})`"></div>
          <h3 class="swiper-slide-title">{{ project.title }}</h3>
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
  data() {
    return {
      projects: [
        {
          title: 'HY MUSIC',
          href: 'https://music.godhaoye.com',
          bg: './piano_640.jpg'
        },
        {
          title: 'HY BLOG',
          href: 'https://haoye999.github.io',
          bg: './beverage_640.jpg'
        },
        {
          title: 'GITHUB',
          href: 'https://github.com/haoye999',
          bg: './programmer_640.png'
        }
      ]
    }
  },
  mounted() {
    this.initSwiper();
    // this.initBackgroundColor();
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
      background: center / cover;
      color: black;
      @media screen and (max-width: 450px) {
        width: 80vw;
        height: 50vw;
        font-size: .5em;
      }
      .swiper-slide-bg {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        transition: all .5s;
        background: center / cover no-repeat;
      }
      .swiper-slide-title {
        z-index: 1;
        opacity: 0;
        color: black;
        transform: translate(0, -500px) scale(.8);
        transition: all .5s;
      }
      &:hover {
        .swiper-slide-bg {
          filter: blur(2px);
          transform: scale(1.1);
          opacity: .8;
        }
        .swiper-slide-title {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }
      }
    }
  }
}
</style>
