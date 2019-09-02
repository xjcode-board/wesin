<template>
  <div class="cart-page" v-if="init">
    <view-box ref="viewBox">
      <div class="c-list" v-if="list.length>0">
        <div class="c-item" v-for="(item,index) in list" :key="index" @click="checkClick(item.id,$event)">
          <check-icon :value="toggleCheck(item.id)" class="vux-1px-b">
            <swipeout>
              <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow" class="vux-1px-b">
                <div slot="right-menu">
                  <swipeout-button @click.native="onButtonClick(item.id)" type="warn">删除</swipeout-button>
                </div>
                <div slot="content" class="demo-content c-container">
                  <div class="pro-img">
                    <img :src="item.pic" />
                  </div>
                    <div class="pro-info">
                      <div class="pro-desc">
                        {{item.desc}}
                      </div>
                      <div class="price-container">
                        <div class="price-info">价格：<span class="price">{{item.price}}</span></div>
                        <group class="pro-count">
                          <x-number v-model="item.count" :min="1" fillable @on-change="change"></x-number>
                        </group>
                      </div>
                    </div>
                  </div>
              </swipeout-item>
            </swipeout>
          </check-icon>
        </div>
      </div>
    </view-box>
    <div class="settle-container vux-1px-t">
      <div class="all-select" @click="toggleAll">
        <check-icon :value.sync="checkAll">全选</check-icon>
      </div>
      <div class="settle-box">
        <div class="total-amount">合计：<span class="amount">￥{{totalPrice}}</span></div>
        <div class="settle-btn" @click="$router.push({name: 'ConfirmOrder', query: {id: item.id}})">结算({{checkList.length}})</div>
      </div>
    </div>
    <div v-transfer-dom>
      <confirm v-model="deleteModal" title="操作提示" @on-cancel="onCancel" @on-confirm="onConfirm">
        <p style="text-align:center;">确定删除该订单吗？</p>
      </confirm>
    </div>
  </div>
</template>
<script>
import {
  ViewBox,
  Group,
  XNumber,
  Swipeout,
  SwipeoutItem,
  SwipeoutButton,
  CheckIcon,
  Confirm,
  TransferDomDirective as TransferDom
} from 'vux'
var lodash = require('lodash')
export default {
  directives: {
    TransferDom
  },
  components: {
    ViewBox,
    Group,
    XNumber,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    CheckIcon,
    Confirm
  },
  data() {
    return {
      init: false,
      list: [],
      changeValue: 0,
      checkTag: 0,
      checkList: [],
      checkAll: false,
      totalPrice: 0,
      deleteModal: false,
      deleteId: ''
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      // const data = this.$api.

    },
    checkClick(item, e) {
      if (e && (e.target.tagName.toLocaleUpperCase() == "SVG" || e.target.tagName.toLocaleUpperCase() == "INPUT" || e.target
          .tagName.toLocaleUpperCase() == "PATH" || e.target.tagName.toLocaleUpperCase() == "A" || e.target.tagName.toLocaleUpperCase() == "BUTTON")) {
        return;
      }
      if (this.checkList.indexOf(item) === -1) {
        this.checkList.push(item)
        if (this.checkList.length === this.list.length) {
          this.checkAll = true
        }
      } else {
        const index = this.checkList.indexOf(item);
        this.checkList.splice(index, 1);
        this.checkAll = false;
      }
      this.countPrice()
    },
    toggleAll() {
      if (this.checkAll) {
        this.list.forEach((item, index) => {
          this.checkList.push(item.id)
        });
      } else {
        this.checkList = [];
      }
      this.countPrice()
    },
    countPrice() {
      let num = 0
      this.list.forEach((item, index) => {
        if (this.checkList.indexOf(item.id) > -1) {
          num += item.count * item.price;
        }
      });
      this.totalPrice = num
    },
    toggleCheck(id) {
      return this.checkList.indexOf(id) > -1;
    },
    onButtonClick(id) {
      this.deleteModal = true;
      this.deleteId = id;
    },
    handleEvents(type) {

    },
    change(value) {
      this.countPrice()
    },
    onCancel() {
      this.deleteModal = false
    },
    onConfirm() {
      this.list.forEach((item, index) => {
        if (item.id == this.deleteId) {
          this.checkList.splice(this.checkList.indexOf(item.id), 1);
          this.list.splice(index, 1)
        }
      })
    }
  }
}

</script>
<style lang="less">
@ph: 100vh;

html,
body {
  height: 100%;
  width: 100%;
  background: #ebf0ef;
  overflow-x: hidden;
}

.cart-page {
  background: #ebf0ef;

  .c-item {
    background: #fff;

    .vux-check-icon>.weui-icon-success:before,
    .vux-check-icon>.weui-icon-success-circle:before {
      color: #12c9b4;
    }

    .vux-check-icon {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-left: 0.2rem;
    }

    .c-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 0.32rem 0.32rem 0.32rem 0;

      .select-box {
        width: 0.586666rem;
        height: 0.586666rem;
        padding: 0.08rem;
        text-align: center;
      }

      .selected {
        background: url(../../assets/selected.png) no-repeat;
        background-size: 0.586666rem 0.586666rem;
        background-position: center center;
      }

      .pro-img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 6px;
        margin-left: 0.266666rem;
        margin-right: 0.133333rem;

        img {
          display: block;
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 6px;
        }
      }

      .pro-info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .pro-desc {
          font-size: 0.373333rem;
          color: #666;
          margin-bottom: 0.133333rem;
        }

        .price-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          height: 0.72rem;
          width: 100%;

          .price-info {
            font-size: 0.32rem;
            color: #666;

            .price {
              font-size: 0.373333rem;
              color: #ff6d00;
            }
          }

          .pro-count {

            // height: 0.72rem;
            .vux-no-group-title {
              margin-top: 0;
            }

            .weui-cells {
              margin-top: 0;

              .weui-cell {
                border-radius: 10px;
                height: 0.72rem;
                line-height: 0.72rem;
                padding-right: 0;
              }

              &::before {
                border-top: 0;
              }

              &::after {
                border-bottom: 0;
              }

              .vux-number-selector-sub {
                border-top-left-radius: 50%;
                border-bottom-left-radius: 50%;
              }

              input {
                font-size: 0.426666rem;
              }

              .vux-number-selector-plus {
                border-top-right-radius: 50%;
                border-bottom-right-radius: 50%;
              }
            }
          }
        }
      }
    }
  }

  .c-list:last-child {
    margin-bottom: 54px;
  }

  .settle-container {
    width: 100%;
    height: 1.466666rem;
    background: #fff;
    box-sizing: border-box;
    padding-right: 0.48rem;
    padding-left: 0.266666rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 54px;
    z-index: 100;

    .vux-check-icon>.weui-icon-success:before,
    .vux-check-icon>.weui-icon-success-circle:before {
      color: #12c9b4;
    }

    .all-select span {
      font-size: 0.32rem;
      color: #666;
    }


    .settle-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      .total-amount {
        font-size: 0.32rem;
        color: #666;
        margin-right: 0.32rem;

        .amount {
          font-size: 0.373333rem;
          color: #ff3d24;
        }
      }

      .settle-btn {
        width: 2.666666rem;
        height: 1.173333rem;
        line-height: 1.173333rem;
        text-align: center;
        font-size: 0.426666rem;
        color: #fff;
        border-radius: 40px;
        //        background: -webkit-linear-gradient(left top, red , blue); /* Safari 5.1 - 6.0 */
        //          background: -o-linear-gradient(bottom right, red, blue); /* Opera 11.1 - 12.0 */
        //          background: -moz-linear-gradient(bottom right, red, blue); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #ff580d, #fe973d);
      }
    }
  }
}

</style>
