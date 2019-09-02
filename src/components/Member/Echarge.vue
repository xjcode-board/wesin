<template>
  <div class="echarge">
    <div class="top">
      <div class="user-box vux-1px-b">
        <div class="user-phone-box">
          <div class="user-phone">18813153253</div>
          <div class="phone-area">北京移动</div>
        </div>
        <img src="../../assets/user-icon.png" />
			</div>
        <div class="account-info vux-1px-b">
          <div class="user-account">
            <img src="../../assets/default-user.png" class="user-icon" />
            <div class="account-name">
              <div class="name">名称：<span>CCC</span></div>
              <div class="level">级别：<span>皇冠经销商</span></div>
            </div>
          </div>
          <div class="wx-valid-time">
            <div class="wx-account">微信号：<span>CCC001</span></div>
            <div class="valid">过期时间：<span>2018/12/01</span></div>
          </div>
        </div>
      </div>
      <div class="echarge-box vux-1px-t vux-1px-b">
        <div class="echarge-container">
          <div class="title">选择充值时间<span>(充值时间可以累积)</span></div>
          <div class="echarge-list">
            <div class="echarge-item">
              <p class="month">1个月</p>
              <p class="money">20元</p>
            </div>
            <div class="echarge-item">
              <p class="month">3个月</p>
              <p class="money">20元</p>
            </div>
            <div class="echarge-item">
              <p class="month">6个月</p>
              <p class="money">77元</p>
            </div>
            <div class="echarge-item">
              <p class="month">12个月</p>
              <p class="money">128元</p>
            </div>
            <div class="echarge-item">
              <p class="month">18个月</p>
              <p class="money">178元</p>
            </div>
            <div class="echarge-item">
              <p class="month">24个月</p>
              <p class="money">200元</p>
            </div>
          </div>
        </div>
        <div class="echange-container">
          <div class="top-title">积分兑换会员</div>
          <div class="title">当前积分：179<span>(充值时间可以累积)</span></div>
          <div class="echange-list">
            <div class="echange-item">
              <p class="month">1个月</p>
              <p class="money">15积分</p>
            </div>
            <div class="echange-item">
              <p class="month">3个月</p>
              <p class="money">45积分</p>
            </div>
            <div class="echange-item">
              <p class="month">6个月</p>
              <p class="money">100积分</p>
            </div>
            <div class="echange-item">
              <p class="month">12个月</p>
              <p class="money">128积分</p>
            </div>
            <div class="echange-item">
              <p class="month">18个月</p>
              <p class="money">178积分</p>
            </div>
            <div class="echange-item disabled">
              <p class="month">24个月</p>
              <p class="money">200积分</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {
  Tab,
  TabItem
} from 'vux'
export default {
  components: {
    Tab,
    TabItem
  },
  data() {
    return {
      init: false,
      c_order: [],
      v_order: [],
      index: 0
    }
  },
  mounted() {
    this.$vux.loading.show()
    this.$http.get('v1/member-order').then(
      res => {
        this.$vux.loading.hide()
        if (res.code === 200) {
          this.init = true
          this.c_order = res.data.c_order
          this.v_order = res.data.v_order
        }
      },
      fail => {
        this.$vux.loading.hide()
      }
    )
  },
  methods: {
    onItemClick(index) {
      this.index = index
    }
  }
}

</script>
<style lang="less">
.echarge {
  .top {
    margin-bottom: 0.266666rem;

    .user-box {
      padding: 0.4rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background: #fff;

      img {
        width: 0.64rem;
        height: 0.64rem;
      }

      .user-phone-box {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        .user-phone {
          font-size: 0.64rem;
          color: #333;
          line-height: 0.8rem;
        }

        .phone-area {
          font-size: 0.32rem;
          color: #999;
          line-height: 0.6rem;
        }
      }
    }

    .account-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0.4rem;
      background: #fff;
      height: 2.146666rem;

      .user-account {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        img {
          margin-right: 0.16rem;
          display: block;
          width: 0.906666rem;
          height: 0.906666rem;
          border-radius: 50%;
        }

        .account-name {
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: flex-start;
          font-size: 0.32rem;

          div {
            color: #323242;
          }

          span {
            color: #999;
          }
        }

        .wx-valid-time {
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: flex-end;
          font-size: 0.32rem;

          div {
            color: #323242;
          }

          span {
            color: #999;
          }
        }
      }
    }
  }

  .echarge-box {
    background: #fff;
    padding: 0.4rem;

    .echarge-container {
      .title {
        font-size: 0.373333rem;
        color: #333;
        margin-bottom: 0.4rem;

        span {
          font-size: 0.266666rem;
          color: #999;
        }
      }

      .echarge-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .echarge-item {
          width: 2.88rem;
          height: 1.36rem;
          border-radius: 0.08rem;
          border: 1px solid #18c4b7;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.4rem;

          .month {
            font-size: 0.426666rem;
            color: #18c4b7;
          }

          .money {
            font-size: 0.32rem;
            color: #74dcd4;
          }
        }
      }
    }

    .echange-container {
      .top-title {
        font-size: 0.426666rem;
        color: #ff6d00;
        text-align: center;
        margin-top: 0.32rem;
        line-height: 0.6rem;
        margin-bottom: 0.2rem;
      }

      .title {
        font-size: 0.373333rem;
        color: #ff6d00;
        margin-bottom: 0.4rem;

        span {
          font-size: 0.266666rem;
          color: #999;
        }
      }

      .echange-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .echange-item {
          width: 2.88rem;
          height: 1.36rem;
          border-radius: 0.08rem;
          border: 1px solid #ff6d00;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.4rem;

          .month {
            font-size: 0.426666rem;
            color: #ff6d00;
          }

          .money {
            font-size: 0.32rem;
            color: #ffa766;
          }
        }
      }
    }
  }
}

</style>
