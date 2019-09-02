<template>
  <div>
    <view-box ref="viewBox">
      <div class="header-container">
        <!-- banner -->
        <swiper v-if="swiper_list.length>0" :list="swiper_list" height="3.56rem" :auto="true" />
        <!--  -->
        <grid :show-lr-borders="false" :show-vertical-dividers="false" class="grid-contain">
          <grid-item label="报表" link="/r/my-data">
            <badge text="2"></badge>
            <img slot="icon" class="nav-icon" src="../../assets/baobiao.png">
          </grid-item>
            <grid-item label="顾客" link="/r/my-customer">
              <badge text="2"></badge>
              <img slot="icon" class="nav-icon" src="../../assets/guke.png">
          </grid-item>
              <grid-item label="团队" link="/r/my-team">
                <badge text="2"></badge>
                <img slot="icon" class="nav-icon" src="../../assets/tuandui.png">
          </grid-item>
                <grid-item label="产品" link="/r/products">
                  <badge text="2"></badge>
                  <img slot="icon" class="nav-icon" src="../../assets/chanpin.png">
          </grid-item>
                  <grid-item label="海报" link="/r/my-poster">
                    <badge text="2"></badge>
                    <img slot="icon" class="nav-icon" src="../../assets/haibao.png">
          </grid-item>
        </grid>
      </div>
      <div class="home-content">
        <tab class="tab-container" v-model="index" :line-width=2 custom-bar-width="40px" active-color="#18c4b7">
          <tab-item @click="tabSelect = 0" :key="0">销售/利润</tab-item>
          <tab-item @click="tabSelect = 1" :key="1">账目信息</tab-item>
          <tab-item :selected="tabSelect === 2" @click="tabSelect = 2" :key="2">我的库存</tab-item>
        </tab>
        <swiper v-model="index" :show-dots="false" height="8.84rem">
          <swiper-item>
            <div class="tab-swiper vux-center tabs-body">
              <div class="cell-title">
                <div class="sum1">
                  <p class="sum-title">￥{{totalSaleAmount}}</p>
                  <p class="sum-tip">总销售额</p>
                </div>
                <div class="sum2">
                  <p class="sum-title">￥{{totalProfit}}</p>
                  <p class="sum-tip">净利润</p>
                </div>
              </div>
              <div class="chart-container">
                <v-chart prevent-render @on-render="renderChart1" :width="charWidth">
                  <v-scale x field="date" type="timeCat" mask="MM-DD" :tick-count="3" />
                  <v-scale y :min="0" field="value" :tick-count="5" />
                  <v-legend disabled />
                  <v-line series-field="type" shape="smooth" adjust="stack" />
                  <v-tooltip :show-item-marker="false" />
                </v-chart>
              </div>
            </div>
          </swiper-item>
          <swiper-item>
            <div class="tab-swiper vux-center tabs-body">
              <button-tab v-model="dateType" class="quick-tag">
                <button-tab-item @on-item-click="consoleIndex()">日</button-tab-item>
                <button-tab-item @on-item-click="consoleIndex()">月</button-tab-item>
                <button-tab-item @on-item-click="consoleIndex()">年</button-tab-item>
              </button-tab>
              <div class="chart-container">
                <v-chart prevent-render @on-render="renderChart2" :width="charWidth">
                  <v-scale x field="value" />
                  <v-scale y field="time" />
                  <v-bar />
                  <v-tooltip />
                </v-chart>
              </div>
            </div>
          </swiper-item>
          <swiper-item>
            <div class="tab-swiper vux-center tabs-body">
              <div class="cell-title">
                <div class="sum1">
                  <p class="sum-title">{{totalStock}}</p>
                  <p class="sum-tip">总库存数量</p>
                </div>
                <div class="sum2">
                  <p class="sum-title">￥{{totalCost}}</p>
                  <p class="sum-tip">总成本金额</p>
                </div>
              </div>
              <div class="chart-container">
                <v-chart prevent-render @on-render="renderChart3" :width="charWidth">
                  <v-scale x field="value" />
                  <v-scale y field="type" />
                  <v-bar colors='#69d2fd' />
                  <v-tooltip :show-item-marker="false" />
                </v-chart>
              </div>
            </div>
          </swiper-item>
        </swiper>
      </div>
      <!-- 完善资料弹窗 -->
      <div class="perfect-modal" v-show="modalFlag">
        <div class="modal-content">
          <div class="header-box vux-1px-b">
            <p class="title">完善资料</p>
            <img src="../../assets/modal-close.png" class="modal-close" @click="hideModal" />
          </div>
            <group gutter="0" label-align="left">
              <x-input title="姓名" placeholder="请输入" v-model="formData.name"></x-input>
              <x-input title="微信号" placeholder="请输入" v-model="formData.wxAcc"></x-input>
              <popup-picker title="性别" placeholder="请选择" :data="sexlist" v-model="formData.sex" value-text-align="left"></popup-picker>
              <x-input title="生日" placeholder="请输入，如19921219" v-model="formData.birthday"></x-input>
              <x-input title="身高" placeholder="请输入" v-model="formData.height"></x-input>
              <x-input title="手机" placeholder="请输入" class="weui-vcode" v-model="formData.tel">
                <x-button slot="right" type="primary" :disabled="btnDis" mini @click.native="sendCode">{{btnText}}</x-button>
              </x-input>
              <x-input placeholder="请输入验证码" v-model="inputCode" class="code-input"></x-input>
              <x-input title="上级手机号码" placeholder="请输入" v-model="formData.ptel"></x-input>
              <x-input title="初始体重" placeholder="请输入" v-model="formData.weight"></x-input>
              <x-input title="目标体重" placeholder="请输入" v-model="formData.weight"></x-input>
              <popup-picker title="当前级别" placeholder="请选择" :data="levellist" v-model="formData.level_id" value-text-align="left"></popup-picker>
              <!-- <selector title="当前级别" :options="['总经销商', '一级代理商','二级代理商']" v-model="value11"></selector> -->
            </group>
            <x-button type="primary" class="modal-confirm" @click.native="perfectSubmit">确定</x-button>
          </div>
        </div>
    </view-box>
  </div>
</template>
<script>
import {
  Swiper,
  SwiperItem,
  ViewBox,
  Grid,
  GridItem,
  Tab,
  TabItem,
  LoadMore,
  InlineLoading,
  VChart,
  VLine,
  VTooltip,
  VLegend,
  VBar,
  VPoint,
  XButton,
  VScale,
  Badge,
  Group,
  XInput,
  Selector,
  PopupPicker,
  ButtonTab,
  ButtonTabItem
} from 'vux'
import {
  mapState,
  mapActions
} from 'vuex'
var lodash = require('lodash')
import util from "@/libs/util"
export default {
  components: {
    Swiper,
    SwiperItem,
    Grid,
    GridItem,
    Tab,
    TabItem,
    ViewBox,
    LoadMore,
    InlineLoading,
    Badge,
    VChart,
    VPoint,
    VTooltip,
    VLegend,
    VBar,
    VLine,
    XButton,
    VScale,
    Group,
    XInput,
    Selector,
    PopupPicker,
    ButtonTab,
    ButtonTabItem
  },
  data() {
    return {
      charWidth: (350 / 375) * window.screen.width,
      totalSaleAmount: 0,
      totalProfit: 0,
      totalStock: 0,
      totalCost: 0,
      modalFlag: false,
      index: 0,
      formData: {
        wxAcc: '',
        name: '',
        birthday: '',
        height: '',
        weight: '',
        sex: [],
        tel: '',
        ptel: '',
        level_id: []
      },
      btnText: '发送验证码',
      btnDis: false,
      vCode: '',
      inputCode: '',
      value1: '',
      value2: '',
      value3: [],
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: [],
      tabSelect: null,
      chart1: null,
      chart2: null,
      chart3: null,
      dateType: 0,
      sexlist: [
        ['男', '女']
      ],
      levellist: [
        ['总经销商', '一级代理商', '二级代理商']
      ]
    }
  },
  computed: {
    ...mapState({
      init: state => state.home.init,
      swiper_list: state => state.home.swiper_list,
      share: state => state.home.share,
      code: state => state.home.code,
      openid: state => state.home.openid,
      perfect: state => state.home.perfect,
      userInfo: state => state.home.userInfo
    })
  },
  mounted() {
    this.getData()
    if (!this.userInfo.tel) {
      this.modalFlag = true;
    }
  },
  methods: {
    async renderChart1({
      chart
    }) {
      const data = await this.$api.data.saleProfitData({ time: "day", current: 1, size: 10 })
      this.totalSaleAmount = util.fmoney(data.data.data.totalAmount)
      this.totalProfit = util.fmoney(data.data.data.totalProfit)
      chart.source(data.data.data.data);
      chart.legend(false);
      chart.line().position('time*value').color('type').shape('smooth');
      chart.point().position('time*value').color('type').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
      });
      chart.tooltip({
        showCrosshairs: true
      });
      chart.render();
      this.updateChart2()
    },
    renderChart2({
      chart
    }) {
      chart.legend({
        custom: 'true',
        items: [{
          name: '收入',
          marker: 'square',
          fill: '#79d6f5'
        }, {
          name: '支出',
          marker: 'square',
          fill: '#f9a382'
        }, {
          name: '盈利',
          marker: 'square',
          fill: '#2ee3d5'
        }],
        align: 'right',
        itemWidth: null
      });
      const colors = {
        '收入': '#79d6f5',
        '支出': '#f9a382',
        '盈利': '#2ee3d5'
      };
      chart.source([], {
        value: {
          tickCount: 5
        }
      })
      chart.coord({
        transposed: true
      });
      chart.interval().position('time*value').color('type', function(val) {
        return colors[val];
      }).style('value', {
        radius: function radius(val) {
          return val > 0 ? [3, 3, 0, 0] : [0, 0, 3, 3];
        }
      }).adjust('dodge').size(6);
      chart.render()
      this.chart2 = chart;
    },
    updateChart2() {
      const data = this.$api.data.billData({ time: "day", current: 1, size: 10 })
      this.chart2.changeData(data.data.data.data)
      this.updateChart3()
    },
    renderChart3({
      chart
    }) {
      chart.source([])
      chart.coord({
        transposed: true
      });
      chart.interval().position('type*value');
      chart.render()
      this.chart3 = chart
    },
    updateChart3() {
      const data = this.$api.data.stockData({ time: "day", current: 1, size: 10 })
      this.totalStock = util.fmoney(data.data.data.totalStock)
      this.totalCost = util.fmoney(data.data.data.totalCost)
      this.chart3.changeData(data.data.data.data)
      this.$vux.loading.hide()
    },
    getData() {
      this.setState({
        swiper_list: [{
          url: 'javascript:',
          img: 'https://pic1.yeahka.com/img/fastApp/img/banner.png'
        }, {
          url: 'javascript:',
          img: 'https://pic1.yeahka.com/img/fastApp/img/banner.png'
        }, {
          url: 'javascript:',
          img: 'https://pic1.yeahka.com/img/fastApp/img/banner.png'
        }]
      })
    },
    hideModal() {
      this.modalFlag = false
    },
    consoleIndex() {
      const types = ['day', 'month', 'year']
      const type = types[this.dateType];
      const data = this.$api.data.billData({ time: type, current: 1, size: 10 })
      this.chart2.changeData(data.data.data.data)
    },
    sendCode() {
      if (!/^(1)\d{10,10}$/.test(this.formData.tel)) {
        this.$vux.toast.text("请输入正确的手机号")
        return
      }
      this.$api.user.sendCode({ tel: this.formData.tel }).then(res => {
        this.vCode = res.data.code
        this.btnDis = true
        this.countDown()
      })
    },
    countDown() {
      let t = 60
      let timer = setInterval(function() {
        t--
        this.btnText = t + "s"
        if (t == 0) {
          clearInterval(timer)
        }
      }, 1000);
    },
    perfectSubmit() {
      if (!this.formData.name) {
        this.$vux.toast.text("请输入姓名")
        return
      }
      if (!this.formData.wxAcc) {
        this.$vux.toast.text("请输入微信号")
        return
      }
      if (this.formData.sex.length === 0) {
        this.$vux.toast.text("请选择性别")
        return
      }
      this.formData.sex = this.formData.sex.join("")
      if (!this.formData.birthday) {
        this.$vux.toast.text("请输入生日")
        return
      }
      if (!this.formData.height) {
        this.$vux.toast.text("请输入身高")
        return
      }
      if (!/^(1)\d{10,10}$/.test(this.formData.tel)) {
        this.$vux.toast.text("请输入正确的手机号")
        return
      }
      if (this.vCode != this.inputCode) {
        this.$vux.toast.text("请输入正确的验证码")
        return
      }
      if (!/^(1)\d{10,10}$/.test(this.formData.ptel)) {
        this.$vux.toast.text("请输入正确的上级手机号")
        return
      }
      if (!this.formData.weight) {
        this.$vux.toast.text("请输入体重")
        return
      }
      if (!this.formData.level_id) {
        this.$vux.toast.text("请选择当前级别")
        return
      }
      this.formData.level_id = this.formData.level_id.join("")
      this.$vux.loading.show()
      this.$api.user.userRegist(this.formData).then(res => {
        this.$vux.loading.hide()
        this.modalFlag = false
      })
    },
    onItemClick() {

    },
    ...mapActions('home', ['setState'])
  },
  filters: {
    ceil: function(value) {
      return lodash.ceil(value, 1)
    }
  }
}

</script>
<style lang="less">
html,
body {
  height: 100%;
  width: 100%;
  background: #ebf0ef;
  overflow-x: hidden;
}

.list {
  background: @page-bg;
  margin-bottom: 0.4rem;

  .list-title {
    padding: 0.4rem 0.266667rem 0.266667rem 0.266667rem;
    font-weight: 500;
    font-size: 0.48rem;
    color: @main-text;
  }

  .list-body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .types-title {
    position: relative;
    font-size: 14px;
    color: #93999f;
    letter-spacing: 0.6px;
    line-height: 36px;
    text-align: center;
    margin: .4rem 0 .266667rem 0;

    em {
      font-size: 20px;
      font-weight: 600;
      color: #4d555d;
      margin: 0 3px;
      font-style: normal;
    }

    .tit-icon {
      display: inline-block;
      vertical-align: bottom;
      width: 56px;
      height: 36px;
      background: url("../../../static/icon.png") no-repeat;
      background-size: 100%;
    }

    .icon-new-l {
      background-position: center -360px;
      margin-right: .533333rem;
    }

    .icon-new-r {
      background-position: center -396px;
      margin-left: .533333rem;

    }
  }
}

.header-container {
  background: #fff;
  width: 100%;
  height: 6rem;
  margin-bottom: 0.346666rem;

  .vux-badge {
    position: absolute;
    right: 0.4rem;
    top: 0.4rem;
  }
}

.grid-contain {
  background: #fff;
  // height:2.8rem;
  color: #7c8887;
  font-size: 0.32rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
}

.weui-grid__icon img {
  width: 1.04rem;
  height: 1.04rem;
}

.vux-tab-container {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.home-content {
  width: 9.36rem;
  // height: 9.04rem;
  background: #fff;
  border-radius: 10px;
  margin: 0.8rem auto;
}

.tabs-body {
  height: 7.44rem;

  .quick-tag {
    justify-content: space-around;
    width: 30%;
    margin-left: 0.4rem;
    margin-top: 0.1rem;

    a {
      display: block;
      margin-right: 0.266666rem;
      font-size: 0.32rem;
      color: #999;
      border-radius: 50%;
      background: #fff;
      width: 0.586666rem;
      height: 0.586666rem;
      text-align: center;
      line-height: 0.586666rem;
    }
  }

  .vux-button-group>a {
    flex: none;
  }

  .vux-button-group>a.vux-button-group-current {
    width: 0.586666rem;
    height: 0.586666rem;
    text-align: center;
    line-height: 0.586666rem;
    color: #fff;
    background: #fb902a;
  }

  .vux-button-group>a.vux-button-tab-item-middle:after,
  .vux-button-group>a.vux-button-tab-item-last:after,
  .vux-button-group>a.vux-button-tab-item-first:after {
    border: 0;
  }

  .vux-button-group>a.vux-button-tab-item-middle,
  .vux-button-group>a.vux-button-tab-item-first,
  .vux-button-group>a.vux-button-tab-item-last {
    border-radius: 50%;
  }
}

.cell-title {
  height: 1.6rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: url(../../assets/arrow-right.png) no-repeat;
  background-size: 0.2rem 0.36rem;
  background-position: 95% 50%;
}

.sum1 {
  margin-left: 0.4rem;
  margin-right: 0.8rem;
  display: flex;
  flex-direction: column;
  align-content: center;

  .sum-title {
    color: #286fec;
    font-size: 0.64rem;
  }

  .sum-tip {
    color: #999;
    font-size: 0.266666rem;
  }
}

.sum2 {
  .sum-title {
    color: #fb902a;
    font-size: 0.64rem;
  }

  .sum-tip {
    color: #999;
    font-size: 0.266666rem;
  }
}

.chart-container {
  width: 9.36rem;
}


.perfect-modal {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 500;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-content {
    width: 7.533333rem;
    height: 14.8rem;
    background: #fff;
    border-radius: 0.266666rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: 0 0.533333rem;
    box-sizing: border-box;

    .header-box {
      height: 1rem;
      border-top-left-radius: 0.266666rem;
      border-top-right-radius: 0.266666rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .modal-close {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 0.306666rem;
        height: 0.306666rem;
      }

      .title {
        font-size: 0.426666rem;
        color: #333;
      }
    }

    .weui-cell {
      box-sizing: border-box;
      height: 0.986666rem;
      margin-bottom: 0.133333rem;
      line-height: 0.986666rem;
      padding: 10px;

      label {
        font-size: 0.32rem;
        color: #999;
        height: 0.32rem;
        line-height: 0.32rem;
        border-right: 1px solid #e6e6e6;
      }

      input,
      .vux-popup-picker-select {
        font-size: 0.32rem;
        color: #333;
        padding-left: 0.293333rem;
      }

      .vux-popup-picker-select {
        font-size: 0.32rem;
        color: #333;
        padding-left: 0.6rem;
      }
    }

    .weui-btn_mini {
      height: 0.533333rem;
      line-height: 0.533333rem;
      text-align: center;
      color: #18c4b7;
      font-size: 0.266666rem;
      border-radius: 0.266666rem;
      border: 1px solid #18c4b7;
      padding: 0 0.133333rem;
      background: #fff;
    }

    .vux-tap-active .weui-label {
      width: 3em;
    }

    .code-input {
      padding-left: 0;
    }

    .weui-cells::before,
    .vux-cell-box::before {
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

    .modal-confirm {
      width: 6.586666rem;
      height: 0.986666rem;
      line-height: 0.986666rem;
      text-align: center;
      color: #fff;
      font-size: 0.426666rem;
      border-radius: 0.533333rem;
      background: #18c4b7;
    }
  }
}

</style>
