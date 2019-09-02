<template>
  <div class="order-page">
    <view-box ref="viewBox" v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading" infinite-scroll-distance="60">
      <swiper v-if="swiper_list.length>0" :list="swiper_list" height="3.506666rem" :auto="true" />
      <swiper :min-moving-distance="200" :show-dots="false" height="3.306666rem">
        <swiper-item>
          <div class="top vux-1px-b">
            <div class="grid-container">
              <div class="grid-item">
                <span class="item-title">10</span>
                <span class="item-tip">待确认</span>
              </div>
              <div class="grid-item">
                <span class="item-title">42</span>
                <span class="item-tip">待发货</span>
              </div>
              <div class="grid-item">
                <span class="item-title">12</span>
                <span class="item-tip">已发货</span>
              </div>
            </div>
          </div>
          <!-- 货单-->
          <div class="post-container  vux-1px-b">
            <div class="post-btn post">+发货单</div>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="top vux-1px-b">
            <div class="grid-container">
              <div class="grid-item">
                <span class="item-title">54</span>
                <span class="item-tip">退款申请</span>
              </div>
              <div class="grid-item">
                <span class="item-title">28</span>
                <span class="item-tip">待退货</span>
              </div>
              <div class="grid-item">
                <span class="item-title">0</span>
                <span class="item-tip">已退货</span>
              </div>
            </div>
          </div>
          <!-- 货单-->
          <div class="post-container vux-1px-b">
            <div class="post-btn back">+退货单</div>
          </div>
        </swiper-item>
      </swiper>
      <!-- 状态 -->
      <div class="status-container vux-1px-b">
        <img src="../../assets/daifahuo.png" />
        <span class="status-type">待发货订单</span>
      </div>
      <!-- 列表 -->
      <div class="p-list" v-if="list.length>0">
        <div class="p-item">
          <div class="status-line vux-1px-b">
            <div class="user-info">
              <img src="../../assets/avatar.png" class="user-icon" />
              <span class="user-name">刘德华</span>
            </div>
            <div class="status-text">已发货</div>
          </div>
          <div class="pro-container vux-1px-b">
            <div class="pro-img">
              <img src="../../assets/avatar.png" />
						</div>
              <div class="pro-info">
                <div class="pro-name">这是一个测试产品</div>
                <div class="pro-spec">
                  <div class="spec-info">
                    <span class="pro-color">颜色：蓝色</span>
                    <span class="pro-size">尺码：L</span>
                  </div>
                  <div class="pro-count">X2</div>
                </div>
              </div>
            </div>
            <div class="count-price">
              <div class="count">共2件商品</div>
              <div class="price">
                <span class="label">实收款：</span>
                <span class="amount">￥99.00</span>
              </div>
            </div>
            <div class="date-post">
              <div class="date">2018-09-10</div>
              <div class="post-action">发货</div>
            </div>
          </div>
          <div class="p-item">
            <div class="status-line vux-1px-b">
              <div class="user-info">
                <img src="../../assets/avatar.png" class="user-icon" />
                <span class="user-name">刘德华</span>
              </div>
              <div class="status-text">已发货</div>
            </div>
            <div class="pro-container vux-1px-b">
              <div class="pro-img">
                <img src="../../assets/avatar.png" />
						</div>
                <div class="pro-info">
                  <div class="pro-name">这是一个测试产品</div>
                  <div class="pro-spec">
                    <div class="spec-info">
                      <span class="pro-color">颜色：蓝色</span>
                      <span class="pro-size">尺码：L</span>
                    </div>
                    <div class="pro-count">X2</div>
                  </div>
                </div>
              </div>
              <div class="count-price">
                <div class="count">共2件商品</div>
                <div class="price">
                  <span class="label">实收款：</span>
                  <span class="amount">￥99.00</span>
                </div>
              </div>
              <div class="date-post">
                <div class="date">2018-09-10</div>
                <div class="post-action">发货</div>
              </div>
            </div>
          </div>
          <!-- <div class="empty-list" v-else>
			<i class="iconfont icon-1wodexuexizhongxin"></i>
			<div>
					<span>您还没购买课程噢，<span @click="$router.push({name: 'home'})">马上选课</span></span>
			</div>
		</div> -->
    </view-box>
  </div>
</template>
<script>
import {
  Swiper,
  ViewBox,
  SwiperItem
} from 'vux'
import {
  mapState,
  mapActions
} from 'vuex'
import Vue from 'vue'
import InfiniteScroll from '../../packages/infinite-scroll'
Vue.use(InfiniteScroll)
var lodash = require('lodash')
export default {
  components: {
    ViewBox,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      list: [1],
      loading: true,
    }
  },
  computed: {
    ...mapState({
      swiper_list: state => state.home.swiper_list,
      userInfo: state => state.user.userInfo
    })
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {

    },
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

.order-page {
  background: #ebf0ef;

  .top {
    height: 2.133333rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .grid-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 50%;

      .grid-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .item-title {
          font-size: 0.48rem;
          color: #333;
        }

        .item-tip {
          font-size: 0.32rem;
          color: #999;
        }
      }
    }
  }

  .post-container {
    height: 1.173333rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #fff;

    .post-btn {
      width: 3.2rem;
      height: 0.773333rem;
      line-height: 0.773333rem;
      text-align: center;
      border-radius: 4px;
      font-size: 0.48rem;
      color: #fff;
    }

    .post {
      background: url(../../assets/post-pro.png) no-repeat;
      background-size: 100% auto;
    }

    .back {
      background: url(../../assets/back-pro.png) no-repeat;
      background-size: 100% auto;
    }
  }

  .status-container {
    height: 1.186666rem;
    padding-left: 0.4rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    line-height: 1.186666rem;

    span {
      display: block;
      font-size: 0.346666rem;
      color: #666;
    }

    img {
      display: block;
      width: 0.613333rem;
      height: 0.52rem;
      margin-right: 0.266666rem;
    }
  }

  .p-list {
    margin-bottom: 0.333333rem;

    .p-item {
      background: #fff;
      margin-bottom: 0.266666rem;
    }

    .status-line {
      background: #f9f9f9;
      height: 1.253333rem;
      padding: 0 0.4rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .user-info {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 0.346666rem;
        color: #333;

        img {
          width: 0.853333rem;
          height: 0.853333rem;
          border-radius: 50%;
          margin-right: 0.266666rem;
        }
      }

      .status-text {
        font-size: 0.373333rem;
        color: #fd702b;
      }
    }

    .pro-container {
      padding: 0.4rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      .pro-img {
        width: 1.546666rem;
        height: 1.546666rem;
        margin-right: 0.266666rem;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .pro-info {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;

        .pro-name {
          font-size: 0.373333rem;
          color: #999;
        }

        .pro-spec {
          font-size: 0.346666rem;
          color: #999;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.133333rem;
        }

        .spec-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;

          .pro-color {
            margin-right: 0.2rem;
          }

        }
      }
    }

    .count-price {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 0.32rem;
      padding: 0 0.4rem;
      height: 0.906666rem;
      line-height: 0.906666rem;

      .amount {
        color: #ff3d24;
      }
    }

    .date-post {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 0.32rem;
      padding: 0 0.4rem;
      height: 1.066666rem;
      line-height: 1.066666rem;

      .date {
        color: #666;
      }

      .post-action {
        width: 1.853333rem;
        height: 0.746666rem;
        line-height: 0.746666rem;
        border-radius: 5px;
        text-align: center;
        background: #18c4b7;
        font-size: 0.373333rem;
        color: #fff;
      }
    }
  }
}

</style>
