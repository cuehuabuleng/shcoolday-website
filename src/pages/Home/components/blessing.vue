<template>
  <div class="my_message">
    <div class="commonbox">
      <div
        :class="[
          clientW <= 769
            ? 'my_message_left my_message_left_mobile'
            : 'my_message_left',
        ]"
      >
        <div class="my_message_title">
          <a class="newzfbtn" @click="showForm">
            <img src="../../../assets/images/icon/con20.png" alt="祝福" />
            祝福母校
          </a>
        </div>
        <div class="my_message_leftn">
          <div class="message_box">
            <el-carousel direction="vertical" :autoplay="true">
              <el-carousel-item v-for="(item, index) in blessData" :key="index">
                <li v-for="item in item" :key="item">
                  <div class="infon">{{ item.name }}</div>
                  <div class="ms">{{ item.ms }}</div>
                </li>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <div class="want_lytan">
        <div class="close">x</div>
        <div class="my_message">
          <div class="my_message_title">
            <img src="../../../assets/images/icon/con21.png" alt="留言" />
            我要留言
          </div>
          <div class="my_message_form">
            <form action="" method="post">
              <table class="winstyle51409" cellspacing="1" cellpadding="1">
                <tbody>
                  <tr>
                    <td>署名</td>
                    <td><input type="text" name="var1" /></td>
                  </tr>
                  <tr>
                    <td>届数</td>
                    <td><input type="text" name="var2" /></td>
                  </tr>
                  <tr>
                    <td>院系</td>
                    <td><input type="text" name="var3" /></td>
                  </tr>
                  <tr>
                    <td>我想对你说</td>
                    <td><textarea name="var19"></textarea></td>
                  </tr>
                  <tr>
                    <td colspan="2" align="center" class="form_btn">
                      <input
                        type="button"
                        value="提交"
                        class="buttonstyle51409"
                      />
                      <input
                        type="reset"
                        value="重置"
                        class="buttonstyle51409"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
      <div
        :class="[
          clientW <= 769
            ? 'my_message_right my_message_right_mobile'
            : 'my_message_right',
        ]"
      >
        <div class="my_message_rightn">
          <el-carousel indicator-position="none">
            <el-carousel-item v-for="item in 4" :key="item">
              <div class="jzpic">
                <p class="name">xxxxx用过的书本</p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="clear"></div>
      <div class="zzc"></div>
    </div>
  </div>
</template>

<script>
import Util from "../../../utils";
export default {
  name: "BlessingSchool",
  data() {
    return {
      blessData: [
        [
          {
            name: "jack",
            ms: "母校是我们的娘家，有娘的孩子才幸福！",
          },
          {
            name: "jack",
            ms: "母校是我们的娘家，有娘的孩子才幸福！",
          },
        ],
        [
          {
            name: "jack",
            ms: "母校是我们的娘家，有娘的孩子才幸福！",
          },
          {
            name: "jack",
            ms: "母校是我们的娘家，有娘的孩子才幸福！",
          },
        ],
        [
          {
            name: "jack",
            ms: "母校是我们的娘家，有娘的孩子才幸福！",
          },
        ],
      ],
      clientW: 1200,
      messageForm: false,
    };
  },
  methods: {
    setSize: Util.throttle(function () {
      this.clientW = document.body.clientWidth;
    }, 200),
    showForm() {},
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
.my_message_left {
  width: 49.2%;
  float: left;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  height: 320px;
  .my_message_title {
    line-height: 32px;
    color: #a41c4c;
    margin-bottom: 16px;
    .newzfbtn {
      color: #a41c4c;
      img {
        vertical-align: middle;
        width: 32px;
        margin-right: 12px;
        float: left;
      }
    }
  }
  .my_message_leftn {
    overflow-y: auto;
    outline: none;
    width: 100%;
    padding-right: 32px;
    height: 220px;
    overflow: hidden;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    .message_box {
      width: 100%;
      height: auto;
      font-size: @font14;
      li {
        width: 100%;
        float: none;
        margin-bottom: 24px;
        .infon {
          font-size: 13px;
          line-height: 24px;
          color: #a41c4c;
          margin-bottom: 4px;
        }
        .ms {
          line-height: 20px;
          height: 60px;
          overflow: hidden;
          color: #808080;
        }
      }
    }
  }
}
.my_message_right {
  width: 49.2%;
  float: right;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  height: 320px;
  .my_message_rightn {
    border: 0px;
    .jzpic {
      background-image: url("../../../assets/images/bless/jz_6.jpg");
      width: 100%;
      height: 280px;
      background-size: cover;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -ms-background-size: cover;
      -o-background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      .name {
        width: 90%;
        padding: 0px 5%;
        line-height: 32px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-text-overflow: ellipsis;
        -moz-text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        position: absolute;
        left: 0px;
        bottom: 0px;
        color: #fff;
        background: rgba(0, 0, 0, 0.6);
      }
    }
  }
}
.my_message_left_mobile {
  width: 100%;
  float: none;
}
.my_message_right_mobile {
  height: auto;
  width: 100%;
  float: none;
}
.want_lytan {
  width: 580px;
  position: fixed;
  left: 50%;
  margin-left: -290px;
  top: 50%;
  background: #f0f0f0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  padding: 32px 32px 32px;
  z-index: 1001;
  margin-top: -132px;
  .close {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 4px;
    right: 0px;
    cursor: pointer;
    line-height: 32px;
    text-align: center;
    color: #808080;
    .my_message {
      padding: 0rem 0px;
      .my_message_title {
        line-height: 32px;
        color: #a41c4c;
        margin-bottom: 16px;
      }
    }
  }
}
</style>