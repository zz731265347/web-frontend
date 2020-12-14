import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//另一个东东 sessionStorage 客户端回话
const store = new Vuex.Store({
  state: {
    msg: '',
    err: '',
    authenErr: '',
    isLoading: false,
    authening: false,
    JWT_TOKEN: '',
    USER_ID: ''
  },
  mutations: {
    updateToken(state,newtoken){
       state.JWT_TOKEN = newtoken
    },

    updateUserID(state,userid){
       state.USER_ID = userid
    },

    msgAdd (state, item) {
      state.msg = item
    },
    addErr (state, str) {
      state.err = str
    },
    addAuthenErr (state, str) {
      state.authenErr = str
    },
    updateLoadingState (state, flag) {
      state.isLoading = flag
    },
    updateAutheningState (state, flag) {
      state.authening = flag
    },

  },
  actions: {

    onAddToken (context, token) {
      if (token !== '') {
        context.commit('updateToken', token)
      } else {
        context.commit('addErr', '添加失败')
      }
    },

    onAddMsg (context, item) {
      if (item !== '') {
        context.commit('msgAdd', item)
      } else {
        context.commit('addErr', '添加失败')
      }
    },
    onAddERR (context, item) {
      context.commit('addErr', item)
    },
    onAddAuthenERR (context, item) {
      context.commit('addAuthenErr', item)
    },
    onLoading (context, flag) {
      context.commit('updateLoadingState', flag)
    },
    onAuthening (context, flag) {
      context.commit('updateAutheningState', flag)
    }
  },
  modules: {}
})
export default store
