import axios from 'axios'
import store from '../store/index.js'
import router from '../router/index.js'

// axios.defaults.timeout = 10000
// http request 拦截器
axios.interceptors.request.use(
  config => {
    // this.load = true
    var data  = config.data
    console.log(config)

    console.log(router.path)
    console.log("--->" + store.state.JWT_TOKEN)
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'

    if (store.state.JWT_TOKEN) {
      config.headers['Authorization'] = store.state.JWT_TOKEN
    }
    return config
  }, err => {
  // this.load = false
  console.error(err)
  return Promise.reject(err)
})

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // this.load = false
    console.log(response)
    if (response.data.token) {
      store.dispatch('onAddToken', response.data.token)

    }
    if (response.data.code === '4001' || response.data.code === '4002') { // 后端返回4001 4002 无校验信息或校验信息出错
      console.log('4001')
      store.dispatch('onAuthening', false)
      store.dispatch('onLoading', false)
      store.dispatch('onAddToken', '') //清空token
      setTimeout(() => {
                     router.push('/')
                    }
      , 300);
      //router.push('/')
      return response
    } else {
      return response
    }
  },
  err => {
    // this.load = false
    console.error(err)
    return Promise.reject(err)
    // router.go(-1)
  }
)

export function postWithLoading (url, params) {
  let axiosDate = new Date()
  var promise = new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        // 关闭  loading
        let oDate = new Date()
        let time = oDate.getTime() - axiosDate.getTime()
        if (time < 500) {
          time = 500
        }else{
          time = 0
        }
        console.log(time+"...............")
        setTimeout(() => {
          store.dispatch('onLoading', false)
          // store.dispatch('onAuthening', false)
          resolve(response.data)
        }, time)
      })
      .catch((error) => {
        // 关闭  loading
        console.log(error)
        store.dispatch('onLoading', false)
        store.dispatch('onAuthening', false)
        // axiosDate = new Date()
        reject(error)
      })
  })
  return promise
}
export function getWithLoading (url, params) {
  let axiosDate = new Date()
  console.log(url)
  if (url.indexOf(apiUrl.Login) === -1) { // 非登录校验请求
    console.log(url)
    console.log(store.state.JWT_TOKEN)
    if ( store.state.JWT_TOKEN == '') {
      router.push('/')
    }
  }
  var promise = new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        // 关闭  loading
        console.log(response)
        let oDate = new Date()
        let time = oDate.getTime() - axiosDate.getTime()
        if (time < 500) {
          time = 500
        }else{
          time = 0
        }
        setTimeout(() => {
          store.dispatch('onLoading', false)
          // store.dispatch('onAuthening', false)
          resolve(response.data)
        }, time)
      })
      .catch((error) => {
        // 关闭  loading
        store.dispatch('onLoading', false)
        store.dispatch('onAuthening', false)
        axiosDate = new Date()
        reject(error)
      })
  })
  return promise
}
/* 配置所有访问地址 */
//现网
//const host = ''
//本机测试环境
const host = 'http://localhost:9191/springweb'
const apiUrl = {
  Login:  host + '/login',
  getPeopleList:  host + '/people'
}
export default {
  // 组件中公共页面请求函数
  httpGet (url, params) {
    store.dispatch('onLoading', true)
    return getWithLoading(url, params)
  },
  httpPost (url, params) {
    store.dispatch('onLoading', true)
    return postWithLoading(url, params)
  },
  apiUrl
}
