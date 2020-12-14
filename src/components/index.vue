
<template>
    <div class="layout">
        <Layout>
            <top/>
            <Layout>
              <template id="lefttitle">
                  <Sider hide-trigger :style="{background: '#fff'}">
                      <Menu active-name="0-0" theme="light" width="auto" :open-names="['0']">
                        <Submenu  v-for="(item,i) in pri" :name="i" >
                          <template slot="title">
                              <Icon type="ios-navigate"></Icon>
                              {{item.name}}
                          </template>
                           <MenuItem  v-for="(itemtwo,index) in item.pritwo"   :name="i + '-' + index">{{itemtwo.name}}</MenuItem>
                        </Submenu>



<!--
                          <Submenu name="1">
                              <template slot="title">
                                  <Icon type="ios-navigate"></Icon>
                                  Item 1
                              </template>
                              <MenuItem name="1-1">Option 1</MenuItem>
                              <MenuItem name="1-2">Option 2</MenuItem>
                              <MenuItem name="1-3">Option 3</MenuItem>
                          </Submenu>
                          <Submenu name="2">
                              <template slot="title">
                                  <Icon type="ios-keypad"></Icon>
                                  Item 2
                              </template>
                              <MenuItem name="2-1">Option 1</MenuItem>
                              <MenuItem name="2-2">Option 2</MenuItem>
                          </Submenu>
                          <Submenu name="3">
                              <template slot="title">
                                  <Icon type="ios-analytics"></Icon>
                                  Item 3
                              </template>
                              <MenuItem name="3-1">Option 1</MenuItem>
                              <MenuItem name="3-2">Option 2</MenuItem>
                          </Submenu> -->
                      </Menu>
                  </Sider>
              </template>

                <Layout :style="{padding: '0 24px 24px'}">
                 <router-view/>




                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
  import top from './top.vue'
    export default {

      data () {
            return {
             pri:[
             {
               name:"系统管理",
               pritwo:[
                 {
                   name:"管理员列表",
                   path:"/path",

                 },
                 {
                   name:"权限列表",
                   path:"",

                 },
                 {
                   name:"操作日志",
                   path:"",

                 },
                 ]

             },
             {
               name:"统计管理",
               pritwo:[
                 {
                   name:"XX统计1",
                   path:"/path",

                 },
                 {
                    name:"XX统计2",
                   path:"",

                 },
                 {
                    name:"XX统计3",
                   path:"",

                 },
                 ]

             },
             ]

            }
        },
        components: {top}
    }
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 192px;
    height: 58px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 3px;
    left: 20px;
}
.layout-nav{
    width: 420px;

    margin-right: 20px;
    float: right;
}
</style>
