<template>
  <div class="projects">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/1)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/2)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/3)"></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  mounted() {
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
      },
    });
  }
}
</script>

<style lang="less" scoped>
.projects {
  padding: 20px;
  font-size: 2em;
  text-align: center;
  .swiper-container {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 50px;
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 500px;
      height: 300px;
    }
  }
}
</style>
