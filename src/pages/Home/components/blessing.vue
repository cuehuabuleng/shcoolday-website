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
                <li v-for="(item, index) in item" :key="index">
                  <div class="infon">{{ item.name }}</div>
                  <div class="ms">{{ item.ms }}</div>
                </li>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <div :class="[clientW <=768 ? 'want_lytan want_lytan_mobile' : 'want_lytan']" v-if="messageForm">
        <div class="close" @click="showForm">x</div>
        <div class="my_message">
          <div class="my_message_title">
            <img src="../../../assets/images/icon/con21.png" alt="留言" />
            我要留言
          </div>
          <div class="my_message_form">
            <div class="info">
              <div>
                <span>署名</span>
                <input type="text" />
              </div>
              <div>
                <span>届数</span>
                <input type="text" />
              </div>
              <div>
                <span>院系</span>
                <input type="text" />
              </div>
              <div>
                <span>我想对你说</span>
                <textarea rows="5" />
              </div>
            </div>
            <div class="submit">
              <button>提交</button>
              <button>重置</button>
            </div>
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
      <div class="zzc" v-if="messageForm" @click="showForm"></div>
    </div>
  </div>
</template>

<script>
import Util from "../../../utils";
export default {
  name: "BlessingSchool",
  props:{
    clientW:{
      type:Number,
      default:1200
    }
  },
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
      messageForm: false,
    };
  },
  methods: {
    showForm() {
      this.messageForm = !this.messageForm;
    },
  }
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
      cursor: pointer;
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
  transform: translateY(-25%);
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
  }
  .my_message {
    padding: 0rem 0px;
    .my_message_title {
      line-height: 32px;
      color: #a41c4c;
      margin-bottom: 16px;
      img {
        vertical-align: middle;
        width: 32px;
        margin-right: 12px;
        float: left;
      }
    }
    .my_message_form {
      width: 100%;
      .info {
        div {
          margin: 10px 0px;
          span {
            width: 30%;
            display: inline-block;
            text-align: right;
            padding-right: 35px;
            box-sizing: border-box;
            vertical-align: middle;
          }
          input {
            background: none;
            border: 1px solid #dfdfdf;
            line-height: 30px;
            font-size: 0.875rem;
            width: 60%;
            padding-left: 1rem;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            -o-box-sizing: border-box;
            height: 30px;
            line-height: 30px;
            color: #000;
            font-size: 0.875rem;
          }
          textarea {
            vertical-align: middle;
            width: 60%;
            height: 100%;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            -o-box-sizing: border-box;
            padding: 0.5rem 1rem;
            background: none;
            color: #000;
            font-size: 0.875rem;
          }
        }
      }
      .submit {
        text-align: center;
        margin-top: 55px;
        button {
          width: 9.125rem;
          height: 2rem;
          line-height: 2rem;
          text-align: center;
          color: #a41c4c;
          border: 1px solid #a41c4c;
          border-radius: 30px;
          -webkit-border-radius: 30px;
          -moz-border-radius: 30px;
          -ms-border-radius: 30px;
          -o-border-radius: 30px;
          transition: all 0.5s;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -ms-transition: all 0.5s;
          -o-transition: all 0.5s;
          background: none;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }
}

// 移动样式
.want_lytan_mobile {
  width: 90%;
  left: 5%;
  margin-left: 0px;
}
</style>