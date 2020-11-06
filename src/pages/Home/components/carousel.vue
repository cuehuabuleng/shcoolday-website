<template>
  <div>
    <el-carousel :autoplay="true" :interval="2000" :height="carouselH">
      <el-carousel-item v-for="(item, index) in imgSrc" :key="index">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import Util from "../../../utils";
export default {
  name: "TopCarousel",
  data() {
    return {
      imgSrc: [
        require("../../../assets/images/topcarousel/01.jpg"),
        require("../../../assets/images/topcarousel/02.jpg"),
        require("../../../assets/images/topcarousel/03.jpg"),
        require("../../../assets/images/topcarousel/04.jpg"),
      ],
      clientW: 1200,
    };
  },
  methods: {
    setSize: Util.throttle(function () {
      this.clientW = document.body.clientWidth;
    }, 200),
  },
  computed: {
    carouselH() {
      return this.clientW / 2.6 + "px";
    },
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
.el-carousel__item {
  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
}
</style>