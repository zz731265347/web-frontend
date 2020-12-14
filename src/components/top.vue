<template  >

    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"><!-- <img src="@/assets/mylogo.png"> --></div>
            <div class="layout-nav">

                <MenuItem name="1" style="float: right;">
                    <Avatar style="background-color: #87d068" icon="ios-person" size="large" />
                    {{userID}}
                   <!-- <p style="margin-left: 4px;" v-html="name"> 12313</p> -->
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>


<script>
/* import http from '@/components/util/http' */

import store from '../store'
  export default {
    data () {
      return {
        userID: store.state.USER_ID,
        authorization: store.state.JWT_TOKEN
      }
    },
    methods: {
      logOut: function (event) {
        /* console.log('logOut')
        sessionStorage.clear()
        store.dispatch('reseting', '')
        this.$router.push('/') */
      }
    },

  }
</script>


<style>

</style>
