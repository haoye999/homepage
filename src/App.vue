<template>
  <div id="app">
    <div class="bg-container">
      <bg />
    </div>
    <navg />
    <projects />
  </div>
</template>

<script>
import Bg from 'components/bg/bg.vue';
import Navg from 'components/navg/navg.vue';
import Projects from 'components/projects/projects.vue';

export default {
  components: {
    Bg,
    Navg,
    Projects
  }
};
</script>


<style lang="less">
@import 'assets/style/reset.less';
@import 'assets/style/base.less';

.bg-container {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
}
</style>
