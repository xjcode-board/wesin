<template>
  <view-box class="data-page" v-if="init">
    <div class="top">
      <button-tab v-model="dataType">
        <button-tab-item @on-item-click="consoleIndex()">单品榜单</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex()">我的账单</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex()">销售/利润</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex()">其他流水</button-tab-item>
      </button-tab>
    </div>
    <div class="wrapper" v-if="dataType==0">
      <div class="table-head">
        <p class="head-item">排名</p>
        <p class="head-item">商品名称</p>
        <p class="head-item" @click="sort(0,$event)">销售额<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span></p>
        <p class="head-item" @click="sort(1,$event)">净利润<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span></p>
      </div>
      <div class="table-list" v-for="(item,index) in tableList" :key="index">
        <div class="list-item">
          <div class="index">{{(index+1)}}</div>
          <div class="pro-box">
            <img :src="item.img" />
            <p class="pro-desc">{{item.name}}</p>
          </div>
          <div class="sale-amount">{{item.totalCost}}</div>
          <div class="profit-amount">{{item.totalAmount}}</div>
        </div>
      </div>
    </div>
    <div class="wrapper" v-if="dataType==1">
      <div class="date-search vux-1px-b">
        <button-tab v-model="dateType" class="quick-tag">
          <button-tab-item @on-item-click="consoleIndex()">日</button-tab-item>
          <button-tab-item @on-item-click="consoleIndex()">月</button-tab-item>
          <button-tab-item @on-item-click="consoleIndex()">年</button-tab-item>
        </button-tab>
        <div class="date-input">
          <datetime class="date" v-model="value1" @on-change="change" clear-text="今天" @on-clear="setToday">
            <x-input placeholder="开始时间" class="input" v-model="value1"></x-input>
          </datetime>
          <span class="seprate-line">-</span>
          <datetime class="date" v-model="value2" @on-change="change" clear-text="今天" @on-clear="setToday">
            <x-input class="input" placeholder="结束时间" v-model="value2"></x-input>
          </datetime>
          <x-button class="search">查询</x-button>
        </div>
      </div>
      <div class="graph">
        <v-chart prevent-render @on-render="renderChart">
          <v-scale x field="tem" />
          <v-scale y field="time" />
          <v-bar />
          <v-tooltip />
        </v-chart>
      </div>
    </div>
    <div class="wrapper" v-if="dataType==2">
      <div class="date-search vux-1px-b">
        <button-tab v-model="dateType" class="quick-tag">
          <button-tab-item @on-item-click="consoleIndex()">日</button-tab-item>
          <button-tab-item @on-item-click="consoleIndex()">月</button-tab-item>
          <button-tab-item @on-item-click="consoleIndex()">年</button-tab-item>
        </button-tab>
        <div class="date-input">
          <datetime class="date" v-model="value1" @on-change="change" clear-text="今天" @on-clear="setToday">
            <x-input placeholder="开始时间" class="input" v-model="value1"></x-input>
          </datetime>
          <span class="seprate-line">-</span>
          <datetime class="date" v-model="value2" @on-change="change" clear-text="今天" @on-clear="setToday">
            <x-input class="input" placeholder="结束时间" v-model="value2"></x-input>
          </datetime>
          <x-button class="search">查询</x-button>
        </div>
      </div>
      <div class="graph">
        <v-chart prevent-render @on-render="renderChart">
          <v-scale x field="tem" />
          <v-scale y field="time" />
          <v-bar />
          <v-tooltip />
        </v-chart>
      </div>
    </div>
    <div class="wrapper" v-if="dataType==3">
      <div class="date-search vux-1px-b">
        <button-tab v-model="dateType" class="quick-tag">
          <button-tab-item @on-item-click="consoleIndex()">日</button-tab-item>
          <button-tab-item @on-item-click="consoleIndex()">月</button-tab-item>
          <button-tab-item @on-item-click="consoleIndex()">年</button-tab-item>
        </button-tab>
        <div class="date-input">
          <datetime class="date" v-model="value1" @on-change="change" clear-text="今天" @on-clear="setToday">
            <x-input placeholder="开始时间" class="input" v-model="value1"></x-input>
          </datetime>
          <span class="seprate-line">-</span>
          <datetime class="date" v-model="value2" @on-change="change" clear-text="今天" @on-clear="setToday">
            <x-input class="input" placeholder="结束时间" v-model="value2"></x-input>
          </datetime>
          <x-button class="search">查询</x-button>
        </div>
      </div>
      <div class="graph">
        <v-chart prevent-render @on-render="renderChart">
          <v-scale x field="tem" />
          <v-scale y field="time" />
          <v-bar />
          <v-tooltip />
        </v-chart>
      </div>
    </div>
  </view-box>
</template>
<script>
import {
  ViewBox,
  XButton,
  Grid,
  GridItem,
  Cell,
  Group,
  Datetime,
  XInput,
  XTextarea,
  VChart,
  VTooltip,
  VLegend,
  VBar,
  ButtonTab,
  ButtonTabItem,
  VScale,
  Swiper,
  SwiperItem
} from 'vux'

export default {
  components: {
    ViewBox,
    XButton,
    Grid,
    GridItem,
    Cell,
    Group,
    Datetime,
    XInput,
    XTextarea,
    VChart,
    VTooltip,
    VLegend,
    VBar,
    XButton,
    ButtonTab,
    ButtonTabItem,
    VScale,
    Swiper,
    SwiperItem
  },
  computed: {

  },
  mounted() {
    this.$vux.loading.show()
    this.getSigleList()
  },
  data() {
    return {
      tableList: [],
      init: true,
      dataType: 0,
      dateType: 0,
      value1: '',
      value2: '',
      barChart: null
    }
  },
  methods: {
    consoleIndex() {

    },
    change(value) {
      console.log('change', value)
    },
    async getSigleList(type, sort) {
      const data = await this.$api.data.singleProdata({ type: type, sort: sort, current: 1, size: 10 })
      this.tableList = data.data.data.records;
    },
    renderChart({
      chart
    }) {
      this.$api.data.billData({
        time: "time",
        current: 1,
        size: 10
      }).then(res => {
        chart.source(res.data, {
          tem: {
            tickCount: 5
          }
        })
        chart.coord({
          transposed: true
        });
        chart.interval().position('time*tem').color('city').style('tem', {
          radius: function radius(val) {
            return val > 0 ? [3, 3, 0, 0] : [0, 0, 3, 3];
          }
        }).adjust('dodge');
        chart.render()
      })
    },
    setToday(value) {
      let now = new Date()
      let cmonth = now.getMonth() + 1
      let day = now.getDate()
      if (cmonth < 10) cmonth = '0' + cmonth
      if (day < 10) day = '0' + day
      this.value1 = now.getFullYear() + '-' + cmonth + '-' + day
      console.log('set today ok')
    },
    sort(type, e) {
      let sort
      if (e.currentTarget.classList.value.indexOf("ascending") != -1) {
        e.currentTarget.classList.remove("ascending")
        e.currentTarget.classList.add("descending")
        sort = -1
      } else if (e.currentTarget.classList.value.indexOf("descending") != -1) {
        e.currentTarget.classList.remove("descending")
        sort = 0
      } else if (e.currentTarget.classList.value.indexOf("ascending") == -1 && e.currentTarget.classList.value.indexOf("descending") == -1) {
        e.currentTarget.classList.add("ascending")
        sort = 1
      }
      const data = this.$api.data.singleProdata({ type: type, sort: sort, current: 1, size: 10 }).then(res => {
        this.tableList = res.data.data.records;
      })
    }
  }
}

</script>
<style lang="less">
.data-page {
  .top {
    background: #fff;
    margin-bottom: 0.2rem;
    position: fixed;
    top: 0;
    width: 100%;

    .vux-button-group {
      height: 1.066666rem;

      a {
        height: 1.066666rem;
        line-height: 1.066666rem;
        color: #333;
      }
    }

    .vux-button-group>a.vux-button-group-current {
      color: #fff;
      background: #18c4b7;
    }

    .vux-button-group>a.vux-button-tab-item-first,
    .vux-button-group>a.vux-button-tab-item-last,
    .vux-button-group>a.vux-button-tab-item-last:after,
    .vux-button-group>a.vux-button-tab-item-first:after {
      border-radius: 0;
    }

    .vux-button-group>a.vux-button-tab-item-middle:after,
    .vux-button-group>a.vux-button-tab-item-last:after,
    .vux-button-group>a.vux-button-tab-item-first:after {
      border-color: #e6e6e6;
    }
  }

  .wrapper {
    background: #fff;
    margin-top: 1.2rem;
  }

  .table-head {
    width: 100%;
    background: #fff;
    height: 0.933333rem;
    line-height: 0.8rem;
    padding-top: 0.133333rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      font-size: 0.32rem;
      color: #999;

      &:nth-of-type(1) {
        text-align: center;
        flex: 1;
      }

      &:nth-of-type(2) {
        flex: 4;
      }

      &:nth-of-type(3) {
        text-align: center;
        flex: 2;
      }

      &:nth-of-type(4) {
        text-align: center;
        flex: 2;
      }
    }

    .caret-wrapper {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      height: 34px;
      width: 24px;
      vertical-align: middle;
      cursor: pointer;
      overflow: initial;
      position: relative;
    }

    .sort-caret {
      width: 0;
      height: 0;
      border: 5px solid transparent;
      position: absolute;
      left: 7px;
    }

    .sort-caret.ascending {
      border-bottom-color: #c0c4cc;
      top: 5px;
    }

    .sort-caret.descending {
      border-top-color: #c0c4cc;
      bottom: 7px;
    }

    .ascending .sort-caret.ascending {
      border-bottom-color: #333;
    }

    .descending .sort-caret.descending {
      border-top-color: #333;
    }
  }

  .table-list {
    background: #fff;

    .list-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 1.2rem;
      margin-bottom: 0.133333rem;

      div {
        font-size: 0.266666rem;
        color: #333;

        &:nth-of-type(1) {
          text-align: center;
          font-size: 0.426666rem;
          flex: 1;
        }

        &:nth-of-type(2) {
          flex: 4;
          display: flex;
          flex-direction: row;
          align-items: center;

          img {
            margin-right: 0.133333rem;
          }
        }

        &:nth-of-type(3) {
          text-align: center;
          font-size: 0.426666rem;
          flex: 2;
        }

        &:nth-of-type(4) {
          text-align: center;
          font-size: 0.426666rem;
          color: #fc8a25;
          flex: 2;
        }
      }
    }
  }

  .date-search {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    height: 1.173333rem;
    padding-left: 0.533333rem;
    padding-right: 0.32rem;

    .quick-tag {
      justify-content: space-around;

      a {
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

    .vux-button-group>a.vux-button-group-current {
      color: #fff;
      background: #fb902a;
    }

    .vux-button-group>a.vux-button-tab-item-middle:after,
    .vux-button-group>a.vux-button-tab-item-last:after,
    .vux-button-group>a.vux-button-tab-item-first:after {
      border: 0;
    }

    .date-input {
      display: flex;
      flex-direction: row;

      .weui-cell::before {
        border: 0;
      }

      .weui-cell::after {
        border: 0;
      }

      .weui-cell {
        padding: 0;
      }

      .weui-cell_access .weui-cell__ft::after {
        content: none;
      }

      .seprate-line {
        color: #ccc;
        margin: 0 0.133333rem;
      }

      .input {
        display: block;
        width: 1.973333rem;
        height: 0.533333rem;
        line-height: 0.533333rem;
        text-align: center;
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        padding: 0 0.133333rem;
        box-sizing: border-box;
      }

      .search {
        width: 1.173333rem;
        height: 0.533333rem;
        line-height: 0.533333rem;
        text-align: center;
        color: #fff;
        font-size: 0.266666rem;
        background: #fb902a;
        padding: 0 0.133333rem;
        border-radius: 3px;
        margin-left: 0.4rem;
      }
    }
  }
}

</style>
