// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import http from './httputils/index.js'
import axios from 'axios'
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
Vue.use(ViewUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios   // 所有组件就可用组件实例this引用
 Vue.prototype.$store = store   // 所有组件就可用组件实例this引用
Vue.prototype.$http = http     // 所有组件就可用组件实例this引用
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
