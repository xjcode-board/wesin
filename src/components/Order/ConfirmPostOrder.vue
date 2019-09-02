<template>
  <div class="post-order-page" v-if="init">
    <view-box ref="viewBox">
      <div class="addr-form">
        <group gutter="0">
          <flexbox>
            <flexbox-item>
              <!-- <group gutter="0"> -->
              <x-input title="收货人:" placeholder="输入姓名"></x-input>
              <!-- </group> -->
            </flexbox-item>
            <flexbox-item>
              <!-- <group gutter="0"> -->
              <x-input title="电话:" placeholder="输入电话"></x-input>
              <!-- </group> -->
            </flexbox-item>
          </flexbox>
          <x-address title="" placeholder="请输入地址" v-model="addressValue" raw-value :list="addressData" value-text-align="left">
          </x-address>
        </group>
      </div>
      <div class="post-form">
        <group gutter="0">
          <flexbox>
            <flexbox-item class="vux-1px-b">
              <x-input title="扫一扫">
                <img slot="right" class="scan-icon" src="../../assets/scan.png">
							</x-input>
            </flexbox-item>
          </flexbox>
          <!-- </group> -->
          <flexbox>
            <flexbox-item>
              <!-- <group gutter="0"> -->
              <x-input title="快递:" placeholder="快递公司名称"></x-input>
              <!-- </group> -->
            </flexbox-item>
            <flexbox-item>
              <!-- <group gutter="0"> -->
              <x-input title="单号:" placeholder="输入单号"></x-input>
              <!-- </group> -->
            </flexbox-item>
          </flexbox>
          <!-- <group title="备注" gutter="0"> -->
          <x-textarea title="备注" placeholder="请输入备注"></x-textarea>
        </group>
      </div>
      <div class="post-container">
        <ul class="post-list">
          <li class="post-item vux-1px-b">
            <img class="pro-img" src="../../assets/default-pro.png" />
            <div class="pro-box">
              <div class="pro-info">
                <div class="pro-name">大啊大苏打实打实咕嘟咕嘟发生大放送</div>
                <group gutter="0">
                  <x-input placeholder="输入出货价">
                    <img slot="right" class="cost-unit-icon" src="../../assets/unit-pic.png">
									</x-input>
                </group>
              </div>
              <div class="pro-price">
                <div class="cost-price"><span class="label">成本价：</span><span class="value">256.00</span></div>
                <group class="count-box" gutter="0">
                  <x-number :min="1" fillable></x-number>
                </group>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="sum-order">
        <p class="sum-count">共5盒</p>
        <div class="sum-amount">
          <p>合计：560元</p>
          <p>成本：100元</p>
          <p>利润：460元</p>
        </div>
        <div class="operate-box">
          <div class="create-btn">创建订单</div>
          <div class="post-btn">立即发货</div>
        </div>
      </div>
    </view-box>
  </div>
</template>
<script>
import {
  ViewBox,
  Flexbox,
  FlexboxItem,
  Group,
  XAddress,
  XInput,
  XTextarea,
  XNumber,
  ChinaAddressV4Data
} from 'vux'
// const AddrData = require("../../datas/chinaAddress.json")
// import Item from './Item'
export default {
  components: {
    ViewBox,
    Flexbox,
    FlexboxItem,
    Group,
    XAddress,
    XInput,
    XTextarea,
    XNumber
  },
  data() {
    return {
      init: true,
      list: [1],
      loading: true,
      addressData: ChinaAddressV4Data,
      addressValue: [],
    }

  },
  computed: {

  },
  mounted() {


  },
  methods: {
    loadMore() {
      // 	  	if (this.loading || this.no_more) return
      // 	  	this.setState({
      // 	  		loading: true,
      // 	  		page: this.page + 1,
      // 	  		load_more_tip: '加载中'
      // 	  	})
      // 	  	this.getData()
    },
    reLoad() {
      // 	  	if (this.loading || this.no_more) return
      // 	  	this.setState({
      // 	  		loading: true,
      // 	  		page: this.page,
      // 	  		load_more_tip: '加载中'
      // 	  	})
      // 	  	this.getData()
    },
    onItemClick() {

    }
  }
}

</script>
<style lang="less">
@ph: 100vh;

.post-order-page {

  .addr-form,
  .post-form {
    background: #fff;
    margin-bottom: 0.266666rem;

    .weui-cells {
      // margin-top: 0;
    }

    label {
      font-size: 0.373333rem;
      color: #333;
    }

    input,
    textarea {
      align-self: center;
      font-size: 0.32rem;
      color: #333;
    }

    .weui-input {
      vertical-align: middle;
    }

    .vux-popup-picker-select {
      font-size: 0.373333rem;
      color: #333;
    }



    .scan-icon {
      width: 0.4rem;
      height: 0.4rem;
    }

    .vux-x-textarea {
      flex-direction: column;

      .weui-cell__bd {
        width: 96%;
      }
    }

    .weui-cell_access {
      padding-left: 1.0rem;
      background: url(../../assets/gray-location.png) no-repeat;
      background-size: 0.373333rem 0.506666rem;
      background-position: 0.4rem;
    }

    textarea {
      border: 1px solid #e6e6e6;
      margin: 0.16rem 0;
      border-radius: 0.133333rem;
      padding: 0.133333rem;
    }
  }

  .post-container {
    background: #fff;

    .post-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0.4rem;

      .pro-img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 0.266666rem;
        margin-right: 0.4rem;
      }

      .pro-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .pro-info {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .pro-name {
            font-size: 0.373333rem;
            color: #666;
          }

          input {
            font-size: 0.266666rem;
            padding-bottom: 0.133333rem;
          }

          .weui-cell {
            padding: 0.066666rem 0.2rem;
          }

          .cost-unit-icon {
            height: 0.32rem;
          }

          .weui-cells::before {
            border: 0;
          }

          .weui-cells::after {
            border: 0;
          }

          .weui-cell::before {
            border: 0;
          }

          .weui-cell::after {
            border: 0;
          }

          .vux-x-input {
            width: 3.04rem;
            height: 0.72rem;
            border: 1px solid #eee;
            border-radius: 0.666666rem;
          }
        }

        .pro-price {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .weui-cell {
            padding: 0.133333rem 0;

            a,
            input {
              padding: 0.133333rem 0.16666rem;
            }
          }

          .weui-cells::before {
            border: 0;
          }

          .weui-cells::after {
            border: 0;
          }

          .weui-cell::before {
            border: 0;
          }

          .weui-cell::after {
            border: 0;
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
            margin-right: 0;
          }

          .cost-price {
            .label {
              font-size: 0.32rem;
              color: #666;
            }

            .value {
              font-size: 0.373333rem;
              color: #ff6d00;
            }
          }
        }
      }
    }
  }


  .sum-order {
    width: 9.2rem;
    height: 3.133333rem;
    border-radius: 0.4rem;
    background: #fff;
    padding: 0.4rem;
    position: fixed;
    bottom: 2rem;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: 0px 0px 10px #e0e0e0;
    box-sizing: border-box;

    .sum-count {
      font-size: 0.373333rem;
      color: #333;

    }

    .sum-amount {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0.4rem;

      p {
        margin-right: 0.4rem;
      }
    }

    .operate-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      div {
        margin-left: 0.426666rem;
      }

      .create-btn {
        width: 2.266666rem;
        height: 0.84rem;
        border-radius: 0.4rem;
        font-size: 0.426666rem;
        color: #18c4b7;
        border: 1px solid #18c4b7;
        text-align: center;
        line-height: 0.84rem;
      }

      .post-btn {
        width: 2.266666rem;
        height: 0.84rem;
        border-radius: 0.4rem;
        font-size: 0.426666rem;
        color: #fff;
        background: linear-gradient(to right, #ff570d, #fe973e);
        text-align: center;
        line-height: 0.84rem;
      }
    }
  }
}

</style>
