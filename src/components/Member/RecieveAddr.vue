<template>
  <view-box class="address-page" v-if="list.length>0" v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading" infinite-scroll-distance="60">
    <ul class="addr-ul">
      <li class="addr-item vux-1px-b" v-for="(item,index) in list" :key="index">
        <div class="addr-box">
          <div class="position home">{{item.address+item.area}}</div>
          <div class="contact-box">
            <p class="name">{{item.name}}</p>
            <p class="tel">{{item.tel}}</p>
          </div>
        </div>
        <div class="edit-box" @click="$router.push({name: 'AddAddress',query:" +item.id+"})"></div>
      </li>
    </ul>
    <div class="add" @click="$router.push({name: 'AddAddress'})"><span>+ </span>新增地址</div>
    <div class="load-more-view">
      <load-more :show-loading="loading" :tip="load_more_tip" @click.native="reLoad"></load-more>
    </div>
  </view-box>
</template>
<script>
import {
  ViewBox
} from 'vux'
export default {
  components: {
    ViewBox
  },
  data() {
    return {
      loading: false,
      page: 0,
      no_more: false,
      load_err: false,
      load_more_tip: '别拉了，到底了',
      list: []
    }
  },
  mounted() {
    this.getData()
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
      this.$api.address.queryAddress({
        id: '',
        current: this.page,
        size: 10
      }).then(res => {
        if (!this.init) this.init = true
        this.$vux.loading.hide()
        this.loading = false
        this.list = res.data.data.records
        if (res.data.data.total / 10 <= 1) {
          this.no_more = true
          this.load_more_tip = '别拉了，到底了'
        }
      })
    }
  }
}

</script>
<style lang="less">
.address-page {
  background: #fff;

  .weui-tab__panel {
    padding-bottom: 0;
  }

  .addr-item {
    padding: 0.266666rem 0.4rem 0.4rem 0.4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .addr-box {
      display: flex;
      flex-direction: column;

      .position {
        font-size: 0.426666rem;
        padding-left: 0.933333rem;
      }

      .contact-box {
        font-size: 0.32rem;
        color: #999;
        height: 0.8rem;
        line-height: 0.8rem;
        display: flex;
        flex-direction: row;
        align-items: center;

        .name {
          margin-right: 0.4rem;
        }
      }

      .home {
        background: url(../../assets/home.png) no-repeat;
        background-size: 0.76rem 0.426666rem;
        background-position: 0% 50%;
      }

      .school {
        background: url(../../assets/school.png) no-repeat;
        background-size: 0.76rem 0.426666rem;
        background-position: 0% 50%;
      }

      .company {
        background: url(../../assets/company.png) no-repeat;
        background-size: 0.76rem 0.426666rem;
        background-position: 0% 50%;
      }
    }

    .edit-box {
      width: 0.453333rem;
      height: 100%;
      background: url(../../assets/edit.png) no-repeat;
      background-size: 0.453333rem 0.453333rem;
      background-position: center center;
    }
  }

  .add {
    width: 2.666666rem;
    height: 0.906666rem;
    line-height: 0.906666rem;
    text-align: center;
    background: #FFF;
    font-size: 0.32rem;
    color: #666;
    border-radius: 0.4rem;
    position: fixed;
    bottom: 2rem;
    left: 0;
    right: 0;
    margin: auto;

    span {
      font-size: 0.4rem;
    }
  }
}

</style>
