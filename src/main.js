// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import { AlertPlugin, ToastPlugin, LoadingPlugin, ConfirmPlugin, WechatPlugin } from 'vux'
import store from './store'
import sess from './libs/sess'
import VueRouter from 'vue-router'
import 'lib-flexible/flexible'
import routes from './route'
import http from './libs/http'
import Navigation from 'vue-navigation'
import App from './App'
import api from './api'
import InfiniteScroll from './packages/infinite-scroll'
Vue.use(InfiniteScroll)
Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(WechatPlugin)
Vue.prototype.$sess = sess
Vue.prototype.$http = http
Vue.prototype.$api = api
const tabbars = ['index', 'home', 'order', 'cart', 'member']

Vue.prototype.tabbars = tabbars
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (tabbars.indexOf(to.name) < 0) {
        return { x: 0, y: 0 }
      }
    }
  }
})

FastClick.attach(document.body)

Vue.config.productionTip = false

router.beforeEach(function(to, from, next) {
  let scrollTop = window.scrollY
  let fromPath = from.path
  store.commit('updateLoadingStatus', { isLoading: true })
  if (tabbars.indexOf(to.name) > 0) {
    if (from.meta.keepAlive) {
      sess.set(fromPath || '/', {
        history: true,
        scrollTop: scrollTop
      })
    }
  }
  next()
})

router.afterEach((toRoute, fromRoute) => {
  const to = toRoute.path
  const h = sess.get(to)
  if (h && h.scrollTop >= 0) {
    Vue.nextTick(() => {
      window.scroll(0, h.scrollTop)
    })
  }
  if (window.ga) {
    window.ga('set', 'page', toRoute.fullPath)
    window.ga('send', 'pageview')
  }
  store.commit('updateLoadingStatus', { isLoading: false })
})
Vue.use(Navigation, { router, store })
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
