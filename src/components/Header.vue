<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      route_name: '',
      selected: 1,
      tabbars: [
        {
          name: '首页',
          route_name: 'home',
          icon: 'icon-home',
          icon_active: 'icon-homefill'
        },
        {
          name: '订单',
          route_name: 'order',
          icon: 'icon-crown',
          icon_active: 'icon-crownfill'
        },
        {
          name: '购物车',
          route_name: 'cart',
          icon: 'icon-news_hot_light',
          icon_active: 'icon-news_hot_fill_light'
        },
        {
          name: '我的',
          route_name: 'member',
          icon: 'icon-my',
          icon_active: 'icon-myfill'
        }
      ]
    }
  },
  mounted () {
    this.route_name = this.$route.name
  },
  methods: {
    item_click (index) {
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
</style>