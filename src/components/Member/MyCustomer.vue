<template>
  <div class="customer" v-if="init">
    <!--  <div class="search-box">
      <search @on-submit="onSubmit" :auto-fixed="false" v-model="searchValue" @on-focus="onFocus" @on-cancel="onCancel"></search>
    </div> -->
    <view-box class="customer-list" v-if="list.length>0" v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading" infinite-scroll-distance="60">
      <group>
        <cell is-link @click.native="toDetail(item.id,$event)" class="customer-item" title="" align-items="flex-start" v-for="(item,index) in list" :key="index">
          <img slot="icon" src="../../assets/avatar.png" />
          <div class="customer-info">
            <div class="user-info">
              <div class="user-name">{{item.name}}</div>
            </div>
            <div class="static-box">
              <div class="static-item">
                <div class="weight-box">
                  <p class="init-weight">初始体重：{{item.weight}}kg</p>
                  <p class="current-weight">当前体重：{{item.weightNew}}kg</p>
                </div>
                <p class="vip-valid-time">会员到期时间：{{item.vipExpired}}</p>
              </div>
              <div class="echarge">充值</div>
            </div>
          </div>
        </cell>
      </group>
      <div class="load-more-view">
        <load-more :show-loading="loading" :tip="load_more_tip" @click.native="reLoad"></load-more>
      </div>
    </view-box>
  </div>
</template>
<script>
import {
  ViewBox,
  Search,
  Grid,
  GridItem,
  Cell,
  Group,
  LoadMore,
  InlineLoading,
  XHeader
} from 'vux'

export default {
  components: {
    ViewBox,
    Search,
    Grid,
    GridItem,
    Cell,
    Group,
    LoadMore,
    InlineLoading,
    XHeader
  },
  computed: {

  },
  mounted() {
    this.$vux.loading.show()
    this.getData()
  },
  data() {
    return {
      init: false,
      loading: false,
      page: 0,
      no_more: false,
      load_err: false,
      load_more_tip: '别拉了，到底了',
      searchValue: '',
      list: [{
        id: 1233,
        name: "李婷",
        weight: 70,
        weightNew: 75,
        vipExpired: "2018年12月19日"
      }]
    }
  },
  methods: {
    loadMore() {
      if (this.loading || this.no_more) {
        return
      }
      this.page = this.page + 1
      this.load_more_tip = '加载中'
      this.getData()
    },
    reLoad() {
      if (this.loading || this.no_more) {
        return
      }
      this.page = this.page
      this.load_more_tip = '加载中'
      this.getData()
    },
    getData() {
      this.loading = true
      this.load_more_tip = '加载中'
      this.$api.user.queryCustomer({ id: '', current: this.page, size: 10 }).then(res => {
        if (!this.init) this.init = true
        this.$vux.loading.hide()
        this.loading = false
        this.list = res.data.data.records
        if (res.data.data.total / 10 <= 1) {
          this.no_more = true
          this.load_more_tip = '别拉了，到底了'
        }
      })
    },
    toDetail(id, e) {
      if (e.target.className === "echarge") {
        this.$router.push({ path: '/r/echarge', query: { id: id } })
      } else {
        this.$router.push({ path: '/r/my-customer-detail', query: { id: id } })
      }
    },
    onSubmit(val) {
      window.alert('on submit' + val)
    },
    onCancel() {
      console.log('on cancel')
    },
    onFocus() {
      console.log('on focus')
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

.search-box {
  background: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 500;

  .weui-search-bar {
    background: #fff;
    border-radius: 20px;
  }

  .weui-search-bar__label,
  .weui-search-bar__form,
  .weui-search-bar__box {
    background: #f5f5f5;
    border-radius: 20px;
  }

  .weui-search-bar__form:after {
    border: 0;
  }

  .weui-search-bar:after {
    border: 0;
  }
}

.customer {
  // padding-top: 44px;

  .weui-tab__panel {
    padding-bottom: 0px;
  }

  .customer-list {
    background: #fff;

    .weui-cells {
      margin-top: 0;
    }

    .customer-item {
      display: flex;
      flex-direction: row;
      align-items: center;

      .weui-cell__ft {
        width: 100%
      }

      img {
        display: block;
        width: 1.333333rem;
        height: 1.333333rem;
        border-radius: 50%;
        margin-top: 0.2rem;
      }

      .customer-info {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-left: 0.32rem;
        padding-right: 0.266666rem;

        // align-items: center;
        .user-info {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          line-height: 0.666666rem;

          .user-name {
            font-size: 0.426666rem;
            color: #0f0f0f;
          }
        }

        .static-box {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          margin-top: 0.2rem;

          .static-item {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            .weight-box {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              color: #999;

              p {
                font-size: 0.32rem;
                line-height: 0.6rem;
              }

              .init-weight {
                margin-right: 0.533333rem;
              }
            }

            .vip-valid-time {
              font-size: 0.266666rem;
              text-align: left;
            }
          }

          .echarge {
            width: 1.333333rem;
            height: 0.64rem;
            line-height: 0.64rem;
            text-align: center;
            font-size: 0.32rem;
            color: #18c4b7;
            border: 1px solid #18c4b7;
            border-radius: 20px;
          }
        }
      }
    }
  }
}

</style>
