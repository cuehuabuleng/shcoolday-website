<template>
  <div>
    <div class="footwai">
      <div class="commonbox">
        <div class="foot">
          <div :class="[cleintW >= 768 ? 'foot1' : 'foot1 mobile_foot']">
            <div class="foot1n">
              <h3 class="title">快速连接</h3>
              <ul>
                <li class="left">
                  <a>学校校历</a>
                  <a>校车时刻表</a>
                  <a>校园导航</a>
                </li>
                <li class="right">
                  <a>校园GIS</a>
                  <a>校园航拍全景</a>
                  <a>广海大新闻网</a>
                </li>
              </ul>
            </div>
          </div>
          <div :class="[cleintW >= 768 ? 'foot2' : 'foot2 mobile_foot']">
            <div class="foot2n">
              <h3 class="title">联系我们</h3>
              <p>广东海洋大学湖光校区</p>
              <p>地址：中华人民共和国 广东省 湛江市 麻章区 海大路1号</p>
              <p>电话：2383333（校办）、2396115（本科招生）、2396172（就业）</p>
            </div>
          </div>
          <div :class="[cleintW >= 768 ? 'foot3' : 'foot3 mobile_foot']">
            <div class="foot3n">
              <div class="foot3n_1">
                <img alt="" src="../../assets/images/footer/vx2.jpg" />
                <p>广海微信平台</p>
              </div>
              <div class="foot3n_1">
                <img alt="" src="../../assets/images/footer/hl.jpg" />
                <p>广海新浪微博</p>
              </div>
              <div class="clear"></div>
              <div class="foot3n_2">
                <select name="">
                  <option selected="" value="">常用链接</option>
                </select>
              </div>
            </div>
            <div class="foot3n_3">
              <p>Copyright ©版权所有：广东海洋大学</p>
              <p>粤ICP备06058882号 设计与技术支持：<a>领沃团队</a></p>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Util from "../../utils";
export default {
  data() {
    return {
      cleintW: 769,
    };
  },
  methods: {
    setSise: Util.throttle(function () {
      this.cleintW = document.body.clientWidth;
    }, 200),
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
<style lang="less">
.footwai {
  background-color: #a51b4c;
  .foot {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 4% 0px;
    color: #fff;
    .foot1 {
      width: 27.8%;
      float: left;
      font-size: 12px;
      line-height: 28px;
      .foot1n {
        width: 95%;
        max-width: 220px;
        .title {
          font-size: @font14;
          line-height: 32px;
          padding-bottom: 8px;
          margin-bottom: 8px;
          color: #fff;
          border-bottom: 1px solid #fff;
        }
        ul {
          margin: 0px;
          padding: 0px;
          text-decoration: none;
          list-style: none;
          font-family: 黑体;
          border: 0px;
          .left {
            width: 55%;
            float: left;
            a {
              color: #fff;
              display: block;
            }
          }
          .right {
            width: 40%;
            float: right;
            a {
              color: #fff;
              display: block;
            }
          }
        }
      }
    }
    .foot2 {
      width: 27.8%;
      float: left;
      font-size: 12px;
      line-height: 28px;
      .title {
        font-size: @font14;
        line-height: 32px;
        padding-bottom: 8px;
        margin-bottom: 8px;
        color: #fff;
        border-bottom: 1px solid #fff;
      }
    }

    .foot3 {
      width: 32%;
      float: right;
      .foot3n {
        width: 100%;
        max-width: 182px;
        .foot3n_1 {
          width: 48%;
          float: left;
          line-height: 32px;
          font-size: 12px;
          text-align: center;
          margin-right: 3px;
          img {
            display: block;
            text-align: center;
            border: 0px;
            width: 100%;
          }
        }
        .foot3n_2 {
          background: #fff;
          select {
            width: 100%;
            height: 26px;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            background: #fff url(../../assets/images/footer/con10.png) right
              center no-repeat;
            color: #5d5d5d;
            font-size: 12px;
            padding-left: 10px;
            background-size: 24px auto;
            -webkit-background-size: 24px auto;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none; /*去掉下拉箭头*/
          }
        }
      }
      .foot3n_3 {
        line-height: 24px;
        font-size: 12px;
        margin-top: 8px;
      }
    }

    .mobile_foot {
      overflow: hidden;
      width: 100%;
      float: none;
      font-size: 12px;
      line-height: 28px;
      margin-bottom: 16px;
      .foot1n{
          overflow: hidden;
          max-width: 100%;
      }
    }
  }
}
</style>