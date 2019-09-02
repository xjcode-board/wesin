<template>
  <view-box class="customDetail">
    <div class="top">
      <div class="detail-top">
        <div class="detail-info">
          <div class="user-avatar"><img src="../../assets/avatar.png" /></div>
            <div class="user-info">
              <dd>{{user.name}}</dd>
            </div>
            <div class="contact-box">
              <div class="wx">微信号：{{user.wxAcc}}</div>
              <div class="addr">{{user.province}} {{user.city}}</div>
            </div>
          </div>
          <div class="upgrade">升级代理</div>
        </div>
      </div>
      <div class="detail-content">
        <!-- 基本信息 -->
        <div class="tabs-body">
          <div class="title">基本信息</div>
          <group>
            <cell title="性别" :value="user.sex"></cell>
            <cell title="手机号码" :value="user.tel"></cell>
            <cell title="初始体重" :value="user.weight"></cell>
            <cell title="当前体重" :value="user.weightNew"></cell>
            <cell title="生日(农历)" :value="user.birthday"></cell>
            <cell title="会员到期时间" :value="user.vipExpired" class="valid-cell"></cell>
          </group>
        </div>
      </div>
      <div class="chart-box">
        <div class="title-box">
          <div class="title">体重曲线</div>
          <div class="btn-box">报称</div>
        </div>
        <div class="static-box">
          <p class="static-value">{{user.reportWeight}}kg</p>
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
  VBar
} from 'vux'
export default {
  components: {
    ViewBox,
    XButton,
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
    VBar
  },
  computed: {

  },
  mounted() {
    this.$vux.loading.show()
    const id = this.$route.query.id
    this.getData(id)
  },
  data() {
    return {
      user: {},
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
    getData(id) {
      this.$api.user.queryCustomer({ id: '', current: 1, size: 10 }).then(res => {
        this.user = res.data.data.records[0]
        this.$vux.loading.hide()
      })
    },
    getChartData(id) {

    }

  }
}

</script>
<style lang="less">
.customDetail {
  box-sizing: border-box;
  width: 100%;
  background: url(../../assets/custom.png) #ebf0ef no-repeat;
  background-size: 100% auto;

  .top {
    box-sizing: border-box;
    width: 100%;

    .detail-top {
      padding: 0.4rem 0.466666rem;
      position: relative;

      .detail-info {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        img {
          width: 1.76rem;
          height: 1.76rem;
          border-radius: 50%;
        }

        .user-info {
          color: #fff;
          font-size: 0.426666rem;
        }

        .contact-box {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          .wx,
          .addr {
            font-size: 0.373333rem;
            color: #fff;
            line-height: 0.6rem;
          }

          .wx {
            margin-right: 0.533333rem;
          }
        }
      }

      .upgrade {
        position: absolute;
        top: 20%;
        right: 0;
        width: 2.506666rem;
        height: 0.906666rem;
        line-height: 0.906666rem;
        font-size: 0.373333rem;
        color: #fff;
        text-align: center;
        background: linear-gradient(to right, #2decd9, #1cc3af);
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }
    }
  }

  .detail-content {
    box-sizing: border-box;
    padding: 0 0.266666rem;
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: auto;

    .valid-cell .weui-cell__ft {
      color: #fb912a;
    }

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
