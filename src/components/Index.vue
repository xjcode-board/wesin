<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar style="position:fixed">
      <tabbar-item v-for="(item,index) in tabbars" @on-item-click="item_click" :key="index" :link="{name:item.route_name,replace:true}" :selected="route_name===item.route_name?true:false" :badge="item.badge">
        <img slot="icon" class="icon iconfont" :src="item.icon"></img>
        <img slot="icon-active" class="icon iconfont" :src="item.icon_active"></img>
        <span slot="label">{{item.name}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      route_name: '',
      selected: 1,
      tabbars: [{
          name: '首页',
          route_name: 'home',
          badge: '',
          icon: 'https://pic1.yeahka.com/img/web/images/icon/bar-home.png',
          icon_active: 'https://pic1.yeahka.com/img/web/images/icon/bar-homefill.png'
        },
        {
          name: '订单',
          route_name: 'order',
          badge: '',
          icon: 'https://pic1.yeahka.com/img/web/images/icon/bar-order.png',
          icon_active: 'https://pic1.yeahka.com/img/web/images/icon/bar-orderfill.png'
        },
        {
          name: '购物车',
          route_name: 'cart',
          badge: '',
          icon: 'https://pic1.yeahka.com/img/web/images/icon/bar-cart.png',
          icon_active: 'https://pic1.yeahka.com/img/web/images/icon/bar-cartfill.png'
        },
        {
          name: '我的',
          route_name: 'member',
          badge: '8',
          icon: 'https://pic1.yeahka.com/img/web/images/icon/bar-member.png',
          icon_active: 'https://pic1.yeahka.com/img/web/images/icon/bar-memberfill.png'
        }
      ]
    }
  },
  mounted() {
    this.route_name = this.$route.name
  },
  methods: {
    item_click(index) {
      let item = this.tabbars[index]
      if (item.route_name === this.route_name) {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    }
  }
}

</script>
<style lang="less">
.tabbar-icon {
  font-size: 23px;
  line-height: 27px;
}
.weui-tabbar .weui-tabbar__label{
	padding-top:2px;
}
.weui-tabbar__item .weui-tabbar__icon{
	height: auto;
}
.weui-tabbar a:nth-of-type(1) img {
  width:0.453333rem;
	height: 0.506666rem;
}
.weui-tabbar a:nth-of-type(2) img {
  width:0.426666rem;
	height: 0.506666rem;
}
.weui-tabbar a:nth-of-type(3) img {
  width:0.506666rem;
	height: 0.426666rem;
}
.weui-tabbar a:nth-of-type(4) img {
  width:0.506666rem;
	height: 0.533333rem;
}
</style>
