import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Test from '@/components/Test' //直接加载
Vue.use(Router)

export default new Router({
  mode: 'history', //后端支持可开
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },

    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => { require(['@/components/index.vue'], resolve) }, //这样写属于延时加载  用的时候才会加载
      children: [
        { path: 'user/userList', component: resolve => { require(['@/components/people.vue'], resolve) } }

      ]
    }




  ]
})
