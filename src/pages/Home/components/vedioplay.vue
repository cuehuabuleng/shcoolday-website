<template>
  <div>
    <div class="commonbox">
      <a class="index2" @click="showVedio(true)">
        <div class="btn">
          <i class="iconfont">&#xe66a;</i>
        </div>
      </a>
    </div>
    <div class="bg" v-if="vedioShow" @click="showVedio(false)"></div>
    <div class="box8" v-if="vedioShow">
      <div class="hjtan_box">
        <div class="pic_box">
          <div class="guanbi" @click="showVedio(false)">x</div>
          <div class="pic_name">85周年开幕仪式</div>
          <div class="pic">
            <div class="picn">
              <video
                src="http://60.wmu.edu.cn/video/zadfs.mp4"
                controls
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VedioPlay",
  data() {
    return {
      vedioShow: false,
    };
  },
  methods: {
    showVedio(state) {
        console.log('1')
        this.vedioShow = state
    },
  },
};
</script>
<style lang="less" scoped>
.index2 {
  background-image: url("../../../assets/images/vedio/vedio.jpg");
  margin: 24px auto;
  display: block;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -ms-background-size: cover;
  -o-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  padding-bottom: 27%;
  position: relative;
  .btn {
    cursor: pointer;
    width: 84px;
    height: 84px;
    position: absolute;
    top: 50%;
    margin-top: -34px;
    left: 50%;
    margin-left: -34px;
    line-height: 84px;
    text-align: center;
    color: #fff;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    i{
        font-size: 80px;
    }
    &:hover {
      color: #ab1f4c;
    }
  }
}
.bg {
  background-color: #000;
  position: absolute;
  z-index: 900;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  height: 2791px;
}
.box8 {
  top: 1300px;
  display: block;
  padding: 0px;
  position: absolute;
  width: 100%;
  z-index: 1000;
  left: 0%;
  margin-left: 0px;
  .hjtan_box {
    width: 90%;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    .pic_box {
      width: 100%;
      max-width: 834px;
      margin: 0 auto;
      background: #fff;
      border-radius: 15px;
      -moz-border-radius: 15px;
      -ms-border-radius: 15px;
      -o-border-radius: 15px;
      -webkit-border-radius: 15px;
      padding: 30px 0px;
      position: relative;
      .guanbi {
        position: absolute;
        top: 20px;
        width: 36px;
        height: 36px;
        z-index: 100;
        cursor: pointer;
        color: #c0bebe;
        font-size: 36px;
        line-height: 36px;
        text-align: center;
        right: 3%;
      }
      .pic_name {
        padding: 0px 3% 24px;
        border-bottom: 1px solid #d1d1d1;
        line-height: 30px;
        color: #a51b4c;
      }
      .pic {
        padding: 15px 3% 0px;
        .picn {
          position: relative;
          video {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>