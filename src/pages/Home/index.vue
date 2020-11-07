// 首页组件

<template>
  <div class="home-content">
    <top-carousel :client-w="clientW"></top-carousel>
    <school-dynamics :client-w="clientW"></school-dynamics>
    <vedio-play></vedio-play>
    <blessing-school :client-w="clientW"></blessing-school>
    <time-line></time-line>
  </div>
</template>
<script>
const TopCarousel = (resolve) =>
  require(["./components/carousel.vue"], resolve);
const BlessingSchool = (resolve) =>
  require(["./components/blessing.vue"], resolve);
const SchoolDynamics = (resolve) =>
  require(["./components/dynamics.vue"], resolve);
const VedioPlay = (resolve) => require(["./components/vedioplay.vue"], resolve);
const TimeLine = (resolve) => require(["../../components/timeline"], resolve);
import Util from "../../utils";
export default {
  name: "Home",
  components: {
    TopCarousel,
    BlessingSchool,
    SchoolDynamics,
    VedioPlay,
    TimeLine,
  },
  data() {
      return {
          clientW: 1200
      }
  },
  methods: {
    setSize: Util.throttle(function () {
      this.clientW = document.body.clientWidth;
    }, 200),
  },
  mounted() {
    this.setSize();
    window.addEventListener("resize", this.setSize);
  },
  activated() {
    this.setSize();
    window.addEventListener("resize", this.setSize);
  },
  deactivated() {
    window.removeEventListener("resize", this.setSize);
  },
};
</script>

<style lang="less" scoped>
</style>