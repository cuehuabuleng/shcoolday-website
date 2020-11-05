<template>
  <div>
    <div class="nav">
      <div class="top1">
        <div class="commonbox">
          <div :class="[cleintW >= 980 ? 'top1_right' : 'top1_right_mobile']">
            <a>返校预约</a>
            <a>enGLISH</a>
            <a>icon1</a>
            <a>icon2</a>
            <a>学校主页</a>
          </div>
          <h1 :class="[cleintW <= 980 ? 'logo_mobile' : '']">
            <a>广东海洋大学</a>
            <span v-if="cleintW >= 980 ? false : true" @click="showMune">
              <img src="../../assets/images/nav/iconfont-caidan.png" />
            </span>
          </h1>
          <div class="clear"></div>
        </div>
      </div>
      <div class="top2" v-if="cleintW >= 980 ? true : false">
        <div class="commonbox">
          <h2
            v-for="(item, index) in navData"
            :key="index"
            @click="changeRoute(index, item.route)"
            :class="[activeIndex === index ? 'on' : '']"
          >
            <a>
              <p>{{ item.zh }}</p>
              <p>{{ item.en }}</p>
            </a>
          </h2>
          <div class="clear"></div>
        </div>
      </div>
    </div>

    <!-- 手机导航 -->
    <div class="zzc" v-if="menu_show" @click="function(){menu_show = false}"></div>
    <ul :class="[menu_show == true ? 'menu_show menu_top' : 'menu_top']">
      <li
        v-for="(item, index) in navData"
        :key="index"
        @click="changeRoute(index, item.route)"
      >
        <a>{{ item.zh }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import Util from "../../utils";
export default {
  data() {
    return {
      activeIndex: 0,
      navData: [
        {
          zh: "首页",
          en: "Home",
          route: "/",
        },
        {
          zh: "活动布置",
          en: "Arrangement",
          route: "arrangement",
        },
        {
          zh: "校庆动态",
          en: "News",
          route: "news",
        },
        {
          zh: "今日海大",
          en: "School Today",
          route: "schoolday",
        },
        {
          zh: "光影重温",
          en: "Memory",
          route: "memory",
        },
        {
          zh: "校友风采",
          en: "Style",
          route: "style",
        },
        {
          zh: "校友会",
          en: "Association",
          route: "association",
        },
        {
          zh: "祝福母校",
          en: "Blessing GDOU",
          route: "blessing",
        },
      ],
      cleintW: 981,
      menu_show: false,
    };
  },
  methods: {

    // 切换路由
    changeRoute(index, route) {
      this.activeIndex = index;
      this.$router.push({ path: route });
    },
    setSise: Util.throttle(function () {
      this.cleintW = document.body.clientWidth;
    }, 200),

    // 召唤移动端导航
    showMune(){
        this.menu_show = !this.menu_show
    }
  },
  mounted() {
    this.setSise();
    window.addEventListener("resize", this.setSise);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSise);
  },
};
</script>

<style lang="less" scoped>
.nav {
  background-color: @mainColor;
  width: 100%;
  .top1 {
    padding: 16px 0px;
    border-bottom: 2px solid @borderColor;
    h1 {
      width: 32%;
      float: left;
      position: relative;
      a {
        text-decoration: none;
        font-size: @font30;
        color: @fontColor1;
        display: block;
        width: 100%;
        max-width: 350px;
        height: 54px;
        line-height: 54px;
      }
    }
    .logo_mobile {
      width: 100%;
      float: none;
      position: relative;
      span {
        color: white;
        width: 24px;
        position: absolute;
        top: 50%;
        margin-top: -8px;
        right: 0px;
        img {
          display: block;
          border: 0px;
          width: 100%;
        }
      }
    }
    .top1_right {
      width: 60%;
      float: right;
      max-width: 640px;
      float: right;
      padding-top: 24px;
      line-height: 24px;
      text-align: right;
      color: @fontColor1;
      a {
        display: inline-block;
        color: @fontColor1;
        margin: 0px 12px;
        position: relative;
        text-decoration: none;
        font-size: @font14;
      }
    }
    .top1_right_mobile {
      width: 100%;
      float: none;
      padding-top: 24px;
      line-height: 24px;
      text-align: right;
      color: @fontColor1;
      a {
        display: inline-block;
        color: @fontColor1;
        margin: 0px 12px;
        position: relative;
        text-decoration: none;
        font-size: @font14;
      }
    }
  }
  .top2 {
    font-size: @font14;
    h2 {
      width: 12.5%;
      float: left;
      position: relative;
      a {
        color: @fontColor1;
        display: block;
        line-height: 20px;
        text-align: center;
        padding: 12px 0px 15px;
        position: relative;
        &:after {
          content: "";
          width: 0px;
          height: 84%;
          position: absolute;
          top: 8%;
          right: 0px;
          border-left: 2px solid #9d1c44;
          border-right: 2px solid #b71859;
          z-index: 10;
        }
      }
    }
  }
}

// 手机导航
.zzc {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
}

.menu_top {
  position: fixed !important;
  z-index: 999999999;
  max-height: 428px;
  width: 300px !important;
  left: 50%;
  top: -500px;
  margin-left: -150px;
  border: solid 1px #cacaca;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 1);
  overflow: scroll !important;
  transition: all 350ms ease;
  height: 100%;
  border-radius: 10px;
  li {
    list-style: none;
    margin-bottom: 0px;
    a {
      font-size: 13px;
      font-weight: 500;
      padding-left: 70px;
      color: #3b4043;
      line-height: 60px;
      display: block;
      border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    }
  }
}
.menu_show {
  top: 50%;
  margin-top: -210px;
  transition: all 350ms ease;
}

</style>