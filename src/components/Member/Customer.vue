<template>
  <view-box class="customer" v-if="init">
    <!-- <x-header>详情</x-header> -->
    <div class="header-container">
      <!-- banner -->
      <swiper v-if="swiper_list.length>0" :list="swiper_list" height="3.56rem" :auto="true" />
      <!-- jiugongge -->
      <grid :show-lr-borders="false" :show-vertical-dividers="false" class="grid-contain">
        <grid-item label="报表" link="/r/my-data">
          <img slot="icon" class="nav-icon" src="../../assets/baobiao.png">
				</grid-item>
          <grid-item label="产品" link="/r/products">
            <img slot="icon" class="nav-icon" src="../../assets/chanpin.png">
				</grid-item>
            <grid-item label="报称记录" link="/r/report-record">
              <img slot="icon" class="nav-icon" src="../../assets/baochenjilu.png">
				</grid-item>
      </grid>
    </div>
    <div class="chart-box">
      <div class="title-box">
        <div class="title">体重曲线</div>
        <div class="btn-box">报称</div>
      </div>
      <div class="static-box">
        <p class="static-value">50.6kg</p>
        <p class="static-label">总销售额</p>
      </div>
      <div class="chart-container">
        <v-chart :width="320" :data="lineData">
          <v-scale x field="time" />
          <v-scale y field="tem" />
          <v-line series-field="type" />
          <v-tooltip :show-item-marker="false" />
        </v-chart>
      </div>
    </div>
  </view-box>
</template>
<script>
import {
  ViewBox,
  XButton,
  Swiper,
  Grid,
  GridItem,
  Cell,
  Group,
  Tab,
  TabItem,
  VChart,
  VLine,
  VPoint,
  VScale,
  VTooltip,
  VLegend,
  VBar,
  XHeader
} from 'vux'
// import { mapState } from 'vuex'
export default {
  components: {
    ViewBox,
    XButton,
    Swiper,
    Grid,
    GridItem,
    Cell,
    Group,
    Tab,
    TabItem,
    VChart,
    VLine,
    VPoint,
    VScale,
    VTooltip,
    VLegend,
    VBar,
    XHeader
  },
  computed: {

  },
  mounted() {

  },
  data() {
    return {
      tabIndex: 0,
      init: true,
      barChart: null,
      user: {
        name: "自由行走的花",
        avatar: "../../assets/avatar.png",
        vip_info: {
          is_vip: true
        },
      },
      swiper_list: [{
        url: 'javascript:',
        img: 'https://pic1.yeahka.com/img/fastApp/img/banner.png'
      }, {
        url: 'javascript:',
        img: 'https://pic1.yeahka.com/img/fastApp/img/banner.png'
      }, {
        url: 'javascript:',
        img: 'https://pic1.yeahka.com/img/fastApp/img/banner.png'
      }],
      lineData: [{
          time: '2016-08-08 00:00:00',
          type: '销售',
          tem: 10
        },
        {
          time: '2016-08-08 00:10:00',
          type: '销售',
          tem: 22
        },
        {
          time: '2016-08-08 00:30:00',
          type: '销售',
          tem: 20
        },
        {
          time: '2016-08-09 00:35:00',
          type: '销售',
          tem: 26
        },
        {
          time: '2016-08-09 01:00:00',
          type: '销售',
          tem: 20
        },
        {
          time: '2016-08-09 01:20:00',
          type: '销售',
          tem: 26
        },
        {
          time: '2016-08-10 01:40:00',
          type: '销售',
          tem: 28
        },
        {
          time: '2016-08-10 02:00:00',
          type: '销售',
          tem: 20
        },
        {
          time: '2016-08-10 02:20:00',
          type: '销售',
          tem: 18
        },
        {
          time: '2016-08-08 00:00:00',
          type: '利润',
          tem: 45
        },
        {
          time: '2016-08-08 00:10:00',
          type: '利润',
          tem: 15
        },
        {
          time: '2016-08-08 00:30:00',
          type: '利润',
          tem: 18
        },
        {
          time: '2016-08-09 00:35:00',
          type: '利润',
          tem: 63
        },
        {
          time: '2016-08-09 01:00:00',
          type: '利润',
          tem: 20
        },
        {
          time: '2016-08-09 01:20:00',
          type: '利润',
          tem: 24
        },
        {
          time: '2016-08-10 01:40:00',
          type: '利润',
          tem: 78
        },
        {
          time: '2016-08-10 02:00:00',
          type: '利润',
          tem: 86
        },
        {
          time: '2016-08-10 02:20:00',
          type: '利润',
          tem: 25
        }
      ]
    }
  },
  methods: {
    onItemClick(index) {
      this.tabIndex = index
      // 		if(index == 2){
      // 			this.barChart.repaint()
      // 		}
    },
    renderChart({
      chart
    }) {
      const data = [{
          products: '酵素果粉1',
          count: 38
        },
        {
          products: '酵素果粉2',
          count: 52
        },
        {
          products: '酵素果粉3',
          count: 61
        },
        {
          products: '酵素果粉4',
          count: 145
        },
        {
          products: '酵素果粉5',
          count: 48
        },
        {
          products: '酵素果粉6',
          count: 38
        },
        {
          products: '酵素果粉7',
          count: 38
        },
        {
          products: '酵素果粉8',
          count: 38
        }
      ];
      // this.barChart = chart;
      chart.source(this.data, {
        y: {
          max: 100,
          min: 0
        }
      })
      chart.coord({
        transposed: true
      });
      chart.interval().position('products*count');
      chart.render()
    }
  }
}

</script>
<style lang="less">
.customer {
  box-sizing: border-box;
  width: 100%;
  background: @page-bg;

  .header-container {
    background: #fff;
    width: 100%;
    height: 6rem;
    margin-bottom: 0.346666rem;
  }

  .grid-contain {
    background: #fff;
    // height:2.8rem;
    color: #7c8887;
    font-size: 0.32rem;
    // 				border-top-left-radius: 5rem;
    // 				border-top-right-radius: 5rem;
  }

  // 			.weui-grid__icon img{
  // 				width:1.04rem;
  // 				height:1.04rem;
  // 			} 
  .detail-content {
    box-sizing: border-box;
    padding: 0 0.266666rem;
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: auto;

    .vux-tab-wrap {
      padding-top: 0;
    }

    .weui-cells {
      margin-top: 0;
    }

    .title {
      font-size: 0.533333rem;
      color: #333;
      line-height: 1.333333rem;
    }

    .vux-label {
      width: 2.8rem;
      text-align-last: justify;
    }
  }

  .chart-box {
    box-sizing: border-box;
    width: 9.426666rem;
    border-radius: 6px;
    margin: 0.266666rem auto;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    padding-left: 0.4rem;
    padding-right: 0.8rem;
    background: url(../../assets/arrow-right.png) #fff no-repeat;
    background-size: 0.2rem 0.36rem;
    background-position: 97% 7%;

    .title-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .title {
        font-size: 0.56rem;
        color: #4d4d4d;
        line-height: 0.933333rem;
        font-weight: 600;
      }

      .btn-box {
        box-sizing: border-box;
        width: 1.813333rem;
        height: 0.72rem;
        line-height: 0.72rem;
        font-size: 0.32rem;
        color: #999;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 20px;
        padding-left: 0.666666rem;
        padding-right: 0.266666rem;
        background: url(../../assets/baochen.png) no-repeat;
        background-size: 0.346666rem 0.346666rem;
        background-position: 20% 50%;
      }
    }

    .static-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      // align-items: center;
      .static-value {
        color: #fb912a;
        font-size: 0.48rem;
      }

      .static-label {
        font-size: 0.32rem;
        color: #999;
      }
    }

    // 		.chart-container{
    // 			box-sizing: border-box;
    // 			width:6rem;
    // 		}
  }
}

</style>
