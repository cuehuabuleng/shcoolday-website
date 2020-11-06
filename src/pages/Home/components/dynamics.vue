<template>
  <div class="index1">
    <div class="commonbox">
      <div
        :class="[
          clientW <= 769 ? 'index1_left index1_left_mobile' : 'index1_left',
        ]"
      >
        <div class="index1_tabt">
          <a @click="changeTap(1)" :class="[tapOn == false ? 'on' : '']">
            <span
              :style="{
                backgroundImage:
                  'url(' +
                  require('../../../assets/images/icon/con4_1.png') +
                  ')',
              }"
            >
              <img src="../../../assets/images/icon/con4.png" alt="公告" />
            </span>
            通知公告
          </a>
          <a @click="changeTap(2)" :class="[tapOn == true ? 'on' : '']">
            <span
              :style="{
                backgroundImage:
                  'url(' +
                  require('../../../assets/images/icon/con5_1.png') +
                  ')',
              }"
            >
              <img src="../../../assets/images/icon/con5.png" alt="今日海大" />
            </span>
            今日海大
          </a>
          <div class="clear"></div>
        </div>
        <div class="tabc" v-if="tapOn">
          <a class="new" v-for="(item, index) in noticeData" :key="index">
            <p class="name">{{ item.title }}</p>
            <p class="time">
              <span>{{ item.time }}</span>
            </p>
          </a>
          <a class="more">了解更多</a>
        </div>
        <div class="tabc" v-if="!tapOn">
          <a class="new" v-for="(item, index) in newData" :key="index">
            <p class="name">{{ item.title }}</p>
            <p class="time">
              <span>{{ item.time }}</span>
            </p>
          </a>
          <a class="more">了解更多</a>
        </div>
      </div>
      <div
        :class="[
          clientW <= 769 ? 'index1_right index1_right_mobile' : 'index1_right',
        ]"
      >
        <el-carousel
          indicator-position="outside"
          :interval="2000"
          :autoplay="true"
          :height="clientW <= 1086 ? '550px' : '650px'"
        >
          <el-carousel-item
            v-for="(item, index) in newsCarousel"
            :key="index"
            :label="item.time"
          >
            <img :src="item.imgsrc" alt="图片" />
            <div class="info">
              <h3 class="info_1">
                <a class="lable">校庆新闻</a>
                <div class="clear"></div>
              </h3>
              <a class="info_2">{{ item.title }}</a>
              <div class="info_3">
                {{ item.content }}
              </div>
              <a class="more">了解更多</a>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import Util from "../../../utils";
export default {
  name: "SchoolDynamics",
  data() {
    return {
      bgcon1: {
        backgroundImage:
          "url(" + require("@/assets/images/icon/con4_1.png") + ")",
      },
      tapOn: true,
      noticeData: [
        {
          route: "",
          title: "关于广东海洋大学建校85周年朗诵",
          time: "2020-11-24",
        },
        {
          route: "",
          title: "关于广东海洋大学建校85周年朗诵",
          time: "2020-11-24",
        },
        {
          route: "",
          title: "关于广东海洋大学建校85周年朗诵",
          time: "2020-11-24",
        },
        {
          route: "",
          title: "关于广东海洋大学建校85周年朗诵",
          time: "2020-11-24",
        },
        {
          route: "",
          title: "关于广东海洋大学建校85周年朗诵",
          time: "2020-11-24",
        },
      ],
      newData: [
        {
          route: "",
          title: "广东海洋大学第二次召开党代表会",
          time: "202011-24",
        },
        {
          route: "",
          title: "广东海洋大学第二次召开党代表会",
          time: "202011-24",
        },
        {
          route: "",
          title: "广东海洋大学第二次召开党代表会",
          time: "202011-24",
        },
        {
          route: "",
          title: "广东海洋大学第二次召开党代表会",
          time: "202011-24",
        },
        {
          route: "",
          title: "广东海洋大学第二次召开党代表会",
          time: "202011-24",
        },
      ],
      clientW: 1200,
      newsCarousel: [
        {
          imgsrc: require("../../../assets/images/topcarousel/car1.jpg"),
          title: "学校召开第13次校运会",
          content:
            "“时光可以带走青春年华，可以冲淡人生的悲欢离合，却带不走我们对母校的无比眷恋，带不走我们对老师的无限感激，带不走同学之间的深情厚谊。",
          time: "2020.11",
        },
        {
          imgsrc: require("../../../assets/images/topcarousel/car1.jpg"),
          title: "学校召开第13次校运会",
          content:
            "“时光可以带走青春年华，可以冲淡人生的悲欢离合，却带不走我们对母校的无比眷恋，带不走我们对老师的无限感激，带不走同学之间的深情厚谊。",
          time: "2020.11",
        },
        {
          imgsrc: require("../../../assets/images/topcarousel/car1.jpg"),
          title: "学校召开第13次校运会",
          content:
            "“时光可以带走青春年华，可以冲淡人生的悲欢离合，却带不走我们对母校的无比眷恋，带不走我们对老师的无限感激，带不走同学之间的深情厚谊。",
          time: "2020.11",
        },
        {
          imgsrc: require("../../../assets/images/topcarousel/car1.jpg"),
          title: "学校召开第13次校运会",
          content:
            "“时光可以带走青春年华，可以冲淡人生的悲欢离合，却带不走我们对母校的无比眷恋，带不走我们对老师的无限感激，带不走同学之间的深情厚谊。",
          time: "2020.11",
        },
      ],
    };
  },
  methods: {
    changeTap(state) {
      if (state === 1) {
        if (!this.tapOn) {
          this.tapOn = !this.tapOn;
        } else {
          this.tapOn = this.tapOn;
        }
      } else {
        if (this.tapOn) {
          this.tapOn = !this.tapOn;
        } else {
          this.tapOn = this.tapOn;
        }
      }
    },
    setSize: Util.throttle(function () {
      this.clientW = document.body.clientWidth;
    }, 200),
  },
  computed: {},
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
.index1 {
  width: 100%;
  margin: 20px 0px;
  .index1_left {
    width: 35.8%;
    float: left;
    background: #fff;
    padding-bottom: 15px;
    .index1_tabt {
      margin-bottom: 16px;
      a {
        width: 50%;
        float: left;
        line-height: 64px;
        height: 64px;
        text-align: center;
        color: #ab1f4c;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        span {
          display: inline-block;
          width: 32px;
          margin-right: 16px;
          position: relative;
          top: 10px;
          background-size: 100%;
          background-position: center;
          background-repeat: no-repeat;
          transition: all 0.5s;
          -webkit-transition: all 0.5s;
          img {
            display: block;
            opacity: 1;
            border: 0px;
            width: 100%;
          }
        }
      }
    }
    .tabc {
      padding: 0px 6.8% 22px;
      .new {
        display: block;
        padding-top: 16px;
        border-bottom: 1px solid #f3f3f3;
        color: #5d5d5d;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        padding-bottom: 0.48px;
        .name {
          font-size: 15px;
          height: 32px;
          line-height: 32px;
          overflow: hidden;
          white-space: normal;
          text-overflow: ellipsis;
        }
        .time {
          padding-left: 20px;
          line-height: 20px;
          background: url(../../../assets/images/icon/con6.png) left center
            no-repeat;
          background-size: 16px auto;
          -webkit-background-size: 16px auto;
          span {
            font-size: 12px;
            transform: scale(0.9);
            -webkit-transform: scale(0.9);
            -moz-transform: scale(0.9);
            -ms-transform: scale(0.9);
            -o-transform: scale(0.9);
            margin-left: 3px;
          }
        }
      }
    }
  }
  .index1_right {
    width: 62.7%;
    float: right;
    background: #fff;
    position: relative;
    .el-carousel__item img {
      width: 100%;
    }
    .info {
      padding: 9px 3.8% 22px;
      .info_1 {
        line-height: 32px;
        .lable {
          color: #ab1f4c;
        }
      }
      .info_2 {
        font-size: @font24;
        display: block;
        line-height: 32px;
        color: #ab1f4c;
        height: 32px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-text-overflow: ellipsis;
        -moz-text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        margin: 8px 0px;
      }
      .info_3 {
        line-height: 20px;
        font-size: 13px;
        color: #5d5d5d;
        height: 60px;
        overflow: hidden;
      }
    }
  }

  //   moble样式
  .index1_left_mobile {
    width: 100%;
    float: none;
    background: #fff;
    margin-bottom: 16px;
    .tabc {
      overflow: hidden;
    }
  }
  .index1_right_mobile {
    width: 100%;
    float: none;
    background: #fff;
    position: relative;
    .tabc {
      overflow: hidden;
    }
  }
}

// 公用样式
.more {
  display: block;
  width: 6.5rem;
  height: 2.25rem;
  line-height: 2.25rem;
  display: block;
  border: 1px solid #c62660;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  -o-border-radius: 30px;
  color: #c62660;
  background: #fff;
  float: right;
  margin-top: 1.25rem;
  text-align: center;
}
.on {
  color: #fff !important;
  background: #c62660;

  //   去掉全局on样式里面的after
  &:after {
    content: none;
  }
  img {
    opacity: 0 !important;
  }
}
</style>