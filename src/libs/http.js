//引入axios
import axios from 'axios'
import Vue from 'vue'
import store from '@/store'

// 环境的切换
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = '/api';
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'http://dev.api.wsenlin.com';
}
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.timeout = 10000

axios.interceptors.request.use(config => {
  Vue.$vux.loading.show({
    text: '数据加载中……'
  });
  if (config.url.indexOf("/api") != -1) {
    config.url = config.url.slice(4, config.url.length)
  }
  return config;
}, error => {
  Vue.$vux.toast.show({
    type: 'warn',
    text: error
  });
  Promise.reject(error)
})

axios.interceptors.response.use(response => {
  Vue.$vux.loading.hide()
  if (response.data.status != "SVC0000") {
    Vue.$vux.toast.show({
      type: 'warn',
      text: response.data.data.msg
    })
  }
  return response
}, error => {
  Vue.$vux.loading.hide()
  let sta = JSON.parse(JSON.stringify(error)).response.status
  if (sta === 400) {
    return Promise.resolve(slientLogin(error.config))
  } else {
    let text = sta === 404 ? '404' : '网络异常，请重试'
    Vue.$vux.toast.show({
      type: 'warn',
      text: text
    })
    return Promise.reject(error)
  }
})


function slientLogin(config) {
  let openid = store.state.home.openid
  if (openid) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: '/user/login',
        data: {
          openid: openid,
          code: ''
        }
      }).then(res => {
        axios.request(config)
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: '/wx/auth/url',
        params: {
          redirectUrl: window.location.href
        }
      }).then(res => {
        axios({
          method: 'post',
          url: '/user/login',
          data: {
            openid: '',
            code: res.data.data.code
          }
        }).then(res => {
          axios.request(config)
        })
      })
    })
  }
}

export default {
  //get请求
  get(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param
      }).then(res => {
        resolve(res)
      }).catch((error) => console.log('error: ', error))
    })
  },
  //post请求
  post(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param
      }).then(res => {
        resolve(res)
      }).catch((error) => console.log('error: ', error))
    })
  },
  //put请求
  put(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url,
        data: param
      }).then(res => {
        resolve(res)
      })
    }).catch((error) => console.log('error: ', error))
  },
  //delete请求
  delete(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url,
        data: param
      }).then(res => {
        resolve(res)
      })
    }).catch((error) => console.log('error: ', error))
  }
}
